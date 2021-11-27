import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, loginAction, logoutAction, fetchFilmsAction, fetchPromoFilmAction, fetchCommentsAction, fetchSimilarFilmsAction} from './api-actions';
import {APIRoute, AppRoute, AppRouteChangeElement, AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {requireAuthorization, redirectToRoute, requireLogout, loadFilms, loadPromo, loadComments, loadSimilar} from './action';
import {AuthData} from '../types/auth-data';
import {HttpCode, makeFakeComments, makeFakeFilm, makeFakeFilms} from '../utils/mocks';
import {AUTH_TOKEN_KEY_NAME} from '../services/token';
import {adaptCommentsToClient, adaptToClient} from '../utils/adapter';
import {getIdRoute} from '../utils/utils';

const CALLED_TIMES_COUNT = 1;
const ID = 1;

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch LoadFilms when GET /films', async () => {
    const mockFilms = makeFakeFilms();
    const adaptedData = mockFilms.map((film) => adaptToClient(film));

    mockAPI
      .onGet(APIRoute.Films)
      .reply(HttpCode.Ok, mockFilms);

    const store = mockStore();
    await store.dispatch(fetchFilmsAction());

    expect(store.getActions()).toEqual([
      loadFilms(adaptedData),
    ]);
  });

  it('should dispatch LoadPromo when GET /promo', async () => {
    const mockFilm = makeFakeFilm();
    const adaptedData = adaptToClient(mockFilm);

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(HttpCode.Ok, mockFilm);

    const store = mockStore();
    await store.dispatch(fetchPromoFilmAction());

    expect(store.getActions()).toEqual([
      loadPromo(adaptedData),
    ]);
  });

  it('should dispatch LoadSimilar when GET /films/:id/similar', async () => {
    const mockFilms = makeFakeFilms();
    const adaptedData = mockFilms.map((film) => adaptToClient(film));

    mockAPI
      .onGet(APIRoute.Similar.replace(AppRouteChangeElement.Id, String(ID)))
      .reply(HttpCode.Ok, mockFilms);

    const store = mockStore();
    await store.dispatch(fetchSimilarFilmsAction(ID));

    expect(store.getActions()).toEqual([
      loadSimilar(adaptedData),
    ]);
  });

  it('should dispatch LoadComments when GET /comments/:film_id', async () => {
    const mockComments = makeFakeComments();
    const adaptedData = mockComments.map((comment) => adaptCommentsToClient(comment));

    mockAPI
      .onGet(getIdRoute(APIRoute.Comments, ID))
      .reply(HttpCode.Ok, mockComments);

    const store = mockStore();
    await store.dispatch(fetchCommentsAction(ID));

    expect(store.getActions()).toEqual([
      loadComments(adaptedData),
    ]);
  });

  it('should post comment when POST /comments/:film_id', async () => {
    const store = mockStore();

    mockAPI
      .onPost(APIRoute.Comments.replace(AppRouteChangeElement.FilmId, String(ID)))
      .reply(HttpCode.Ok, []);

    expect(store.getActions()).toEqual([]);
  });

  it('should authorization status is «AUTH» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(HttpCode.Ok, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(HttpCode.Ok, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      redirectToRoute(AppRoute.Root),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(CALLED_TIMES_COUNT);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(HttpCode.NoContent);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(CALLED_TIMES_COUNT);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });
});

import {loadFilms, redirectToRoute, loadPromo, loadComments, requireAuthorization, requireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {adaptToClient, adaptCommentsToClient} from '../utils';
import {ThunkActionResult} from '../types/action';
import {Film, FilmId, Films} from '../types/films';
import {Comments} from '../types/comment';
import {AuthData} from '../types/auth-data';

const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Films>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClient(film));

    dispatch(loadFilms(adaptedData));
  };

const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    const adaptedData = adaptToClient(data);

    dispatch(loadPromo(adaptedData));
  };

const fetchCommentsAction = (id: FilmId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Comments>(APIRoute.Comments.replace(':film_id', String(id)));
    const adaptedData = data.map((comment) => adaptCommentsToClient(comment));
    dispatch(loadComments(adaptedData));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout(AuthorizationStatus.NoAuth));
  };

export {
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchCommentsAction,
  checkAuthAction,
  loginAction,
  logoutAction
};

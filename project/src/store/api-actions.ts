import {loadFilms, redirectToRoute, loadPromo, loadFavorite, loadSimilar, loadComments, requireAuthorization, requireLogout} from './action'; //, sendComment
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute, AppRouteChangeElement} from '../const';
import {adaptToClient, adaptCommentsToClient, getIdRoute} from '../utils';
import {ThunkActionResult} from '../types/action';
import {Film, FilmId, FilmServer, FilmsServer} from '../types/films';
import {CommentPost, CommentsServer} from '../types/comment';
import {AuthData} from '../types/auth-data';
import browserHistory from '../browser-history';
import {toast} from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmsServer>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClient(film));

    dispatch(loadFilms(adaptedData));
  };

const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmServer>(APIRoute.Promo);
    const adaptedData = adaptToClient(data);

    dispatch(loadPromo(adaptedData));
  };

const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.get(APIRoute.Login);
      const {data} = await api.get<FilmsServer>(APIRoute.Favorite);
      const adaptedData = data.map((film) => adaptToClient(film));
      dispatch(loadFavorite(adaptedData));
    } catch {
      toast.info(LOAD_FAVORITE_FAIL_MESSAGE);
    }
  };

const postFavoriteFilmStatusAction = (id: FilmId, status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(() => {
        api.post<Film>(getIdRoute(APIRoute.FavoriteStatus, id).replace(AppRouteChangeElement.STATUS, String(status)), {status});
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const fetchSimilarFilmsAction = (id: FilmId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmsServer>(APIRoute.Similar.replace(AppRouteChangeElement.ID, String(id)));
    const adaptedData = data.map((film) => adaptToClient(film));

    dispatch(loadSimilar(adaptedData));
  };

const fetchCommentsAction = (id: FilmId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<CommentsServer>(getIdRoute(APIRoute.Comments, id));
    const adaptedData = data.map((comment) => adaptCommentsToClient(comment));
    dispatch(loadComments(adaptedData));
  };

const postCommentAction = (id: FilmId, {rating, text: comment}: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<CommentPost>(getIdRoute(APIRoute.Comment, id), {rating, comment});
    browserHistory.push(AppRoute.Film.replace(AppRouteChangeElement.ID, String(id)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchFavoriteFilmsAction,
  postFavoriteFilmStatusAction,
  fetchSimilarFilmsAction,
  fetchCommentsAction,
  postCommentAction,
  checkAuthAction,
  loginAction,
  logoutAction
};

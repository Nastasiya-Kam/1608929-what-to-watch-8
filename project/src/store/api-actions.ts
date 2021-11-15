import {loadFilms, redirectToRoute, loadPromo, loadFavorite, loadSimilar, loadComments, requireAuthorization, requireLogout} from './action'; //, sendComment
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {adaptToClient, adaptCommentsToClient} from '../utils';
import {ThunkActionResult} from '../types/action';
import {Film, FilmId, Films} from '../types/films';
import {CommentPost, Comments} from '../types/comment';
import {AuthData} from '../types/auth-data';
import browserHistory from '../browser-history';

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

const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    const adaptedData = data.map((film) => adaptToClient(film));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadFavorite(adaptedData));
  };

const postFavoriteFilmStatusAction = (id: FilmId, status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<Film>(APIRoute.FavoriteStatus.replace(':film_id', String(id)).replace(':status', String(status)), {status});
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

const fetchSimilarFilmsAction = (id: FilmId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Films>(APIRoute.Similar.replace(':id', String(id)));
    const adaptedData = data.map((film) => adaptToClient(film));

    dispatch(loadSimilar(adaptedData));
  };

const fetchCommentsAction = (id: FilmId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Comments>(APIRoute.Comments.replace(':film_id', String(id)));
    const adaptedData = data.map((comment) => adaptCommentsToClient(comment));
    dispatch(loadComments(adaptedData));
  };

const postCommentAction = (id: FilmId, {rating, text: comment}: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<CommentPost>(APIRoute.Comment.replace(':film_id', String(id)), {rating, comment});
    browserHistory.push(AppRoute.Film.replace(':id', String(id)));
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
  fetchFavoriteFilmsAction,
  postFavoriteFilmStatusAction,
  fetchSimilarFilmsAction,
  fetchCommentsAction,
  postCommentAction,
  checkAuthAction,
  loginAction,
  logoutAction
};

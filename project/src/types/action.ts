import {AppRoute, AuthorizationStatus} from '../const';
import {Film, Films} from '../types/films';
import {Comments} from '../types/comment';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  SetCurrentFilm = 'setCurrentFilm',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  LoadFavorite = 'data/loadFavorite',
  LoadSimilar = 'data/loadSimilar',
  LoadComments = 'data/loadComments',
  SendComment = 'data/sendComment',
  RequireAuthorization = 'user/requireAuthorization',
  SetUserMail = 'user/setUserMail',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute'
}

type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

type GetGenreFilmsAction = {
  type: ActionType.GetGenreFilms;
  payload: Films;
};

type SetCurrentFilmAction = {
  type: ActionType.SetCurrentFilm;
  payload: Film;
}

type LoadFilmsAction = {
  type: ActionType.LoadFilms;
  payload: Films;
}

type LoadPromoAction = {
  type: ActionType.LoadPromo;
  payload: Film;
}

type LoadFavoriteAction = {
  type: ActionType.LoadFavorite;
  payload: Films;
}

type LoadSimilarAction = {
  type: ActionType.LoadSimilar;
  payload: Films;
}

type LoadCommentsAction = {
  type: ActionType.LoadComments;
  payload: Comments;
}
type SendCommentAction = {
  type: ActionType.SendComment;
}

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus,
}

type SetUserMailAction = {
  type: ActionType.SetUserMail;
  payload: string;
}

type RequireLogoutAction = {
  type: ActionType.RequireLogout;
  payload: AuthorizationStatus;
}

type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute;
  payload: AppRoute;
}

type Actions =
  | ChangeGenreAction
  | GetGenreFilmsAction
  | SetCurrentFilmAction
  | LoadFilmsAction
  | LoadPromoAction
  | LoadFavoriteAction
  | LoadSimilarAction
  | LoadCommentsAction
  | SendCommentAction
  | RequireAuthorizationAction
  | SetUserMailAction
  | RequireLogoutAction
  | RedirectToRouteAction;
  // | ReturnType<typeof requireAuthorization>
  // | ReturnType<typeof requireLogout>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {
  ChangeGenreAction,
  GetGenreFilmsAction,
  SetCurrentFilmAction,
  LoadFilmsAction,
  LoadPromoAction,
  LoadFavoriteAction,
  LoadSimilarAction,
  LoadCommentsAction,
  SendCommentAction,
  RequireAuthorizationAction,
  SetUserMailAction,
  RequireLogoutAction,
  RedirectToRouteAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};

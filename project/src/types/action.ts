import {AuthorizationStatus} from '../const';
import {Film, Films} from '../types/films';
import {Comments} from '../types/comment';
// import {requireAuthorization, requireLogout} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  ResetGenre = 'resetGenre',
  SetCurrentFilm = 'setCurrentFilm',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  LoadComments = 'data/loadComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout'
}

type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

type GetGenreFilmsAction = {
  type: ActionType.GetGenreFilms;
  payload: Films;
};

type ResetGenreAction = {
  type: ActionType.ResetGenre;
}

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

type LoadCommentsAction = {
  type: ActionType.LoadComments;
  payload: Comments;
}

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus,
}

type RequireLogoutAction = {
  type: ActionType.RequireLogout,
}

type Actions =
  | ChangeGenreAction
  | GetGenreFilmsAction
  | ResetGenreAction
  | SetCurrentFilmAction
  | LoadFilmsAction
  | LoadPromoAction
  | LoadCommentsAction
  | RequireAuthorizationAction
  | RequireLogoutAction;
  // | ReturnType<typeof requireAuthorization>
  // | ReturnType<typeof requireLogout>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {
  ChangeGenreAction,
  GetGenreFilmsAction,
  ResetGenreAction,
  SetCurrentFilmAction,
  LoadFilmsAction,
  LoadPromoAction,
  LoadCommentsAction,
  RequireAuthorizationAction,
  RequireLogoutAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};

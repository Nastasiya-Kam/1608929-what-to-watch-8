import {Film} from '../types/films';
// import {requireAuthorization, requireLogout} from '../store/action';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  ResetGenre = 'resetGenre',
  SetCurrentFilm = 'setCurrentFilm',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout'
}

type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

type GetGenreFilmsAction = {
  type: ActionType.GetGenreFilms;
  payload: Film[];
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
  payload: Film[];
}

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: string,
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
  | RequireAuthorizationAction
  | RequireLogoutAction;
  // | ReturnType<typeof requireAuthorization>
  // | ReturnType<typeof requireLogout>;

export {ActionType};
export type {ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, SetCurrentFilmAction, LoadFilmsAction, RequireAuthorizationAction, RequireLogoutAction, Actions};

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

import {changeGenre,
  getGenreFilms,
  setCurrentFilm,
  loadFilms,
  loadFilm,
  loadPromo,
  loadFavorite,
  loadSimilar,
  loadComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute} from '../store/action';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  SetCurrentFilm = 'setCurrentFilm',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  LoadPromo = 'data/loadPromo',
  LoadFavorite = 'data/loadFavorite',
  LoadSimilar = 'data/loadSimilar',
  LoadComments = 'data/loadComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute'
}

type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof setCurrentFilm>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof loadFavorite>
  | ReturnType<typeof loadSimilar>
  | ReturnType<typeof loadComments>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};

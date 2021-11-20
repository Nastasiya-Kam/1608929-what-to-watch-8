import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

import {changeGenre,
  getGenreFilms,
  loadFilms,
  loadFilm,
  isLoading,
  loadPromo,
  loadFavorite,
  loadSimilar,
  loadComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute} from '../store/action';

enum ActionType {
  ChangeGenre = 'genre/changeGenre',
  GetGenreFilms = 'genre/getGenreFilms',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  IsLoading ='data/isLoading',
  LoadPromo = 'data/loadPromo',
  LoadFavorite = 'data/loadFavorite',
  LoadSimilar = 'data/loadSimilar',
  LoadComments = 'data/loadComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'root/redirectToRoute'
}

type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof isLoading>
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

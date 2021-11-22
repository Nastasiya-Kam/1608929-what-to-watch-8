import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Action} from 'redux';

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

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

export {ActionType};
export type {
  ThunkActionResult,
  ThunkAppDispatch
};

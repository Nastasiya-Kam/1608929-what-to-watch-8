import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Film, Films} from '../types/films';
import {Comments} from '../types/comment';
import {AppRoute, AuthorizationStatus} from '../const';

const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

const getGenreFilms = createAction(
  ActionType.GetGenreFilms,
  (films: Films) => ({
    payload: films,
  }),
);

const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: Films) => ({
    payload: films,
  }),
);

const loadFilm = createAction(
  ActionType.LoadFilm,
  (film: Film) => ({
    payload: film,
  }),
);

const isLoading = createAction(
  ActionType.IsLoading,
  (flag: boolean) => ({
    payload: flag,
  }),
);

const loadPromo = createAction(
  ActionType.LoadPromo,
  (film: Film) => ({
    payload: film,
  }),
);

const loadFavorite = createAction(
  ActionType.LoadFavorite,
  (films: Films) => ({
    payload: films,
  }),
);

const loadSimilar = createAction(
  ActionType.LoadSimilar,
  (films: Films) => ({
    payload: films,
  }),
);

const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Comments) => ({
    payload: comments,
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export {
  changeGenre,
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
  redirectToRoute
};

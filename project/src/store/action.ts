import {ActionType} from '../types/action';
import {Film, Films} from '../types/films';
import {Comments} from '../types/comment';
import {AppRoute, AuthorizationStatus} from '../const';

const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

const getGenreFilms = (films: Films) => ({
  type: ActionType.GetGenreFilms,
  payload: films,
} as const);

const loadFilms = (films: Films) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

const loadFilm = (film: Film) => ({
  type: ActionType.LoadFilm,
  payload: film,
} as const);

const isLoading = (flag: boolean) => ({
  type: ActionType.IsLoading,
  payload: flag,
} as const);

const loadPromo = (film: Film) => ({
  type: ActionType.LoadPromo,
  payload: film,
} as const);

const loadFavorite = (films: Films) => ({
  type: ActionType.LoadFavorite,
  payload: films,
} as const);

const loadSimilar = (films: Films) => ({
  type: ActionType.LoadSimilar,
  payload: films,
} as const);

const loadComments = (comments: Comments) => ({
  type: ActionType.LoadComments,
  payload: comments,
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

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

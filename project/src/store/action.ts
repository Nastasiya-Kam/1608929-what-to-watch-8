import {
  ActionType,
  ChangeGenreAction,
  GetGenreFilmsAction,
  ResetGenreAction,
  SetCurrentFilmAction,
  LoadFilmsAction,
  LoadPromoAction,
  RequireAuthorizationAction,
  RequireLogoutAction
} from '../types/action';
import {Film, Films} from '../types/films';
import {AuthorizationStatus} from '../const';

const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

const getGenreFilms = (films: Films): GetGenreFilmsAction => ({
  type: ActionType.GetGenreFilms,
  payload: films,
});

const resetGenre = (): ResetGenreAction => ({
  type: ActionType.ResetGenre,
});

const setCurrentFilm = (film: Film): SetCurrentFilmAction => ({
  type: ActionType.SetCurrentFilm,
  payload: film,
});

const loadFilms = (films: Films): LoadFilmsAction => ({
  type: ActionType.LoadFilms,
  payload: films,
});

const loadPromo = (film: Film): LoadPromoAction => ({
  type: ActionType.LoadPromo,
  payload: film,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export {changeGenre, getGenreFilms, resetGenre, setCurrentFilm, loadFilms, loadPromo, requireAuthorization, requireLogout};

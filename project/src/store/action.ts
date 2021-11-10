import {ActionType, ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, SetCurrentFilmAction, LoadFilmsAction, RequireAuthorizationAction, RequireLogoutAction} from '../types/action';
import {Film} from '../types/films';
import {AuthorizationStatus} from '../const';

const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

const getGenreFilms = (films: Film[]): GetGenreFilmsAction => ({
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

const loadFilms = (films: Film[]): LoadFilmsAction => ({
  type: ActionType.LoadFilms,
  payload: films,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export {changeGenre, getGenreFilms, resetGenre, setCurrentFilm, loadFilms, requireAuthorization, requireLogout};

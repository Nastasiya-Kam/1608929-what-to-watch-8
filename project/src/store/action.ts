import {ActionType, ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, SetCurrentFilmAction, LoadFilmsAction} from '../types/action';
import {Film} from '../types/films';

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

export {changeGenre, getGenreFilms, resetGenre, setCurrentFilm, loadFilms};

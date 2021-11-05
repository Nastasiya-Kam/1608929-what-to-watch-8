import {ActionType, ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, SetCurrentFilmAction} from '../types/action';
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

export {changeGenre, getGenreFilms, resetGenre, setCurrentFilm};

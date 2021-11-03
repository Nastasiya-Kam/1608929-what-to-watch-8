import {ActionType, ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction} from '../types/action';
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

export {changeGenre, getGenreFilms, resetGenre};

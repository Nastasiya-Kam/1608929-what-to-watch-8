import {ActionType, ChangeGenreAction, GetGenreFilmsAction} from '../types/action';
import { Film } from '../types/films';

const changeGenre = (): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
});

const getGenreFilms = (films: Film[]): GetGenreFilmsAction => ({
  type: ActionType.GetGenreFilms,
  payload: films,
});

export {changeGenre, getGenreFilms};

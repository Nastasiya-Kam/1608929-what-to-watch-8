import {Film} from '../types/films';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
}

type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
};

type GetGenreFilmsAction = {
  type: ActionType.GetGenreFilms;
  payload: Film[];
};

type Actions = ChangeGenreAction | GetGenreFilmsAction;

export {ActionType};
export type {ChangeGenreAction, GetGenreFilmsAction, Actions};

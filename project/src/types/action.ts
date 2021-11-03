import {Film} from '../types/films';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  ResetGenre = 'resetGenre',
}

type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

type GetGenreFilmsAction = {
  type: ActionType.GetGenreFilms;
  payload: Film[];
};

type ResetGenreAction = {
  type: ActionType.ResetGenre;
}

type Actions = ChangeGenreAction | GetGenreFilmsAction | ResetGenreAction;

export {ActionType};
export type {ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, Actions};

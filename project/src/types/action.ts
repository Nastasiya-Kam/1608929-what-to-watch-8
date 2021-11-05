import {Film} from '../types/films';

enum ActionType {
  ChangeGenre = 'changeGenre',
  GetGenreFilms = 'getGenreFilms',
  ResetGenre = 'resetGenre',
  SetCurrentFilm = 'setCurrentFilm',
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

type SetCurrentFilmAction = {
  type: ActionType.SetCurrentFilm;
  payload: Film;
}

type Actions = ChangeGenreAction | GetGenreFilmsAction | ResetGenreAction | SetCurrentFilmAction;

export {ActionType};
export type {ChangeGenreAction, GetGenreFilmsAction, ResetGenreAction, SetCurrentFilmAction, Actions};

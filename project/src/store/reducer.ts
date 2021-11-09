import {DEFAULT_GENRE} from '../const';
import {films} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  films: films,
  currentFilm: films[1],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetGenreFilms:
      return {...state, films: action.payload};
    case ActionType.SetCurrentFilm:
      return {...state, currentFilm: action.payload};
    case ActionType.ResetGenre:
      return {...initialState};
    case ActionType.LoadFilms:
      return {...state, films};
    default:
      return state;
  }
};

export {reducer};

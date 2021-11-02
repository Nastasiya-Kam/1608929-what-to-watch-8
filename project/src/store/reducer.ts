import {films} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

const initialGenre = 'All genres';

const initialState = {
  genre: initialGenre,
  films: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: state.genre};
    case ActionType.GetGenreFilms:
      return {...state, films: action.payload};
    default:
      return state;
  }
};

export {reducer};

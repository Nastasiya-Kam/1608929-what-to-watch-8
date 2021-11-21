import {DEFAULT_GENRE} from '../../const';
import {ActionType, Actions} from '../../types/action';
import {FilmsData} from '../../types/state';

const initialState: FilmsData = {
  currentGenre: DEFAULT_GENRE,
  promoFilm: null,
  films: [],
  isDataLoaded: false,
};

const filmsData = (state = initialState, action: Actions): FilmsData => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetGenreFilms:
      return {...state, films: action.payload};
    case ActionType.LoadFilms: {
      const films = action.payload;
      return {
        ...state,
        films,
        isDataLoaded: true,
      };
    }
    case ActionType.LoadPromo: {
      const promoFilm = action.payload;
      return {...state, promoFilm};
    }
    default:
      return state;
  }
};

export {filmsData};

import {DEFAULT_GENRE, AuthorizationStatus} from '../const';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  films: [],
  promoFilm: [][0],
  currentFilm: [][1],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetGenreFilms:
      return {...state, films: action.payload};
    case ActionType.SetCurrentFilm:
      return {...state, currentFilm: action.payload};
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

      return {
        ...state,
        promoFilm,
      };
    }
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.ResetGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};

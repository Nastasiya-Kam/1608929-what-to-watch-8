import {DEFAULT_GENRE, AuthorizationStatus} from '../const';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  films: [],
  comments: [],
  promoFilm: null,
  currentFilm: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userMail: '',
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

      return {...state, promoFilm};
    }
    case ActionType.LoadComments: {
      const comments = action.payload;
      return {
        ...state,
        comments,
      };
    }
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.SetUserMail:
      return {...state, userMail: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    // TODO где используется?
    case ActionType.ResetGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};

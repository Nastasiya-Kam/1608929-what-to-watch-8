import {FilmData} from '../../types/state';
import {ActionType, Actions} from '../../types/action';

const initialState: FilmData = {
  currentFilm: null,
  isLoading: true,
  similarFilms: [],
  comments: [],
  favoriteFilms: [],
  isFavoriteLoaded: false,
};

const filmData = (state = initialState, action: Actions): FilmData => {
  switch (action.type) {
    case ActionType.LoadFilm: {
      const film = action.payload;
      return {...state, currentFilm: film};
    }
    case ActionType.IsLoading: {
      const isLoading = action.payload;
      return {...state, isLoading: isLoading};
    }
    case ActionType.LoadSimilar: {
      const similarFilms = action.payload;
      return {...state, similarFilms};
    }
    case ActionType.LoadComments: {
      const comments = action.payload;
      return {...state, comments};
    }
    case ActionType.LoadFavorite: {
      const favoriteFilms = action.payload;
      return {...state, favoriteFilms, isFavoriteLoaded: true};
    }
    default:
      return state;
  }
};

export {filmData};

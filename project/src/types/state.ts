import {Film, Films} from './films';
import {Comments} from './comment';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

type FilmsData = {
  currentGenre: string,
  promoFilm: Film | null,
  films: Films,
  isDataLoaded: boolean,
};

type FilmData = {
  currentFilm: Film | null,
  isLoading: boolean,
  similarFilms: Films,
  comments: Comments,
  favoriteFilms: Films,
  isFavoriteLoaded: boolean,
};

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

type State = RootState;

export type {FilmsData, FilmData, UserProcess, State};

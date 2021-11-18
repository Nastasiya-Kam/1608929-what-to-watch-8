import {Film, Films} from './films';
import {Comments} from './comment';
import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Films,
  isDataLoaded: boolean,
  comments: Comments,
  promoFilm: Film | null,
  currentFilm: Film | null,
  authorizationStatus: AuthorizationStatus,
  userMail: string,
  favoriteFilms: Films,
  isFavoriteLoaded: boolean,
  similarFilms: Films,
};

export type {State};

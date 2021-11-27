import {makeFakeFilm, makeFakeFilms, makeFakeGenre} from '../../utils/mocks';
import {changeGenre, getGenreFilms, loadFilms, loadPromo} from '../action';
import {filmsData} from './films-data';
import {DEFAULT_GENRE} from '../../const';
import {adaptToClient} from '../../utils/adapter';

const mockFilm = adaptToClient(makeFakeFilm());
const mockGenre = makeFakeGenre();
const mockFilms = makeFakeFilms().map((film) => adaptToClient(film));

describe('Reducer: films-data', () => {
  const state = {
    currentGenre: DEFAULT_GENRE,
    promoFilm: null,
    films: [],
    isDataLoaded: false,
  };

  it('should set picked genre', () => {
    expect(filmsData(state, changeGenre(mockGenre)))
      .toEqual({...state, currentGenre: mockGenre});
  });

  it('should loaded similar to genre films', () => {
    expect(filmsData(state, getGenreFilms(mockFilms)))
      .toEqual({...state, films: mockFilms});
  });

  it('should loaded films', () => {
    expect(filmsData(state, loadFilms(mockFilms)))
      .toEqual({...state, films: mockFilms, isDataLoaded: true});
  });

  it('should loaded promo film', () => {
    expect(filmsData(state, loadPromo(mockFilm)))
      .toEqual({...state, promoFilm: mockFilm});
  });
});

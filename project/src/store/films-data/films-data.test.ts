import {makeFakeFilm, makeFakeGenre} from '../../utils/mocks';
import {changeGenre, getGenreFilms, loadFilms, loadPromo} from '../action';
import {filmsData} from './films-data';
import {DEFAULT_GENRE} from '../../const';

const mockFilm = makeFakeFilm();
const mockGenre = makeFakeGenre();

enum Count {
  Films = 10,
  Comments = 10,
}

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
    const genreFilms = new Array(Count.Films).fill(undefined).map(() => mockFilm);
    expect(filmsData(state, getGenreFilms(genreFilms)))
      .toEqual({...state, films: genreFilms});
  });

  it('should loaded films', () => {
    const films = new Array(Count.Films).fill(undefined).map(() => mockFilm);
    expect(filmsData(state, loadFilms(films)))
      .toEqual({...state, films: films, isDataLoaded: true});
  });

  it('should loaded promo film', () => {
    expect(filmsData(state, loadPromo(mockFilm)))
      .toEqual({...state, promoFilm: mockFilm});
  });
});

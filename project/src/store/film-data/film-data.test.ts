import {adaptCommentsToClient, adaptToClient} from '../../utils/adapter';
import {makeFakeFilm, makeFakeFilms, makeFakeComments} from '../../utils/mocks';
import {loadComments, loadFavorite, loadFilm, loadSimilar} from '../action';
import {filmData} from './film-data';

const mockFilm = adaptToClient(makeFakeFilm());
const mockComments = makeFakeComments().map((comment) => adaptCommentsToClient(comment));
const mockFilms = makeFakeFilms().map((film) => adaptToClient(film));

describe('Reducer: film-data', () => {
  const state = {
    currentFilm: null,
    isLoading: true,
    similarFilms: [],
    comments: [],
    favoriteFilms: [],
    isFavoriteLoaded: false,
  };

  it('should loaded film', () => {
    expect(filmData(state, loadFilm(mockFilm)))
      .toEqual({...state, currentFilm: mockFilm});
  });

  it('should loaded similar films', () => {
    expect(filmData(state, loadSimilar(mockFilms)))
      .toEqual({...state, similarFilms: mockFilms});
  });

  it('should loaded comments', () => {
    expect(filmData(state, loadComments(mockComments)))
      .toEqual({...state, comments: mockComments});
  });

  it('should loaded favorite films', () => {
    expect(filmData(state, loadFavorite(mockFilms)))
      .toEqual({...state, favoriteFilms: mockFilms, isFavoriteLoaded: true});
  });
});

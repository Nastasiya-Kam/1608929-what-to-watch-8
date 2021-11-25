import {makeFakeFilm, makeFakeComment} from '../../utils/mocks';
import {loadComments, loadFavorite, loadFilm, loadSimilar} from '../action';
import {filmData} from './film-data';

const mockFilm = makeFakeFilm();
const mockComment = makeFakeComment();

enum Count {
  Films = 10,
  Comments = 10,
}

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
    const similarFilms = new Array(Count.Films).fill(undefined).map(() => mockFilm);
    expect(filmData(state, loadSimilar(similarFilms)))
      .toEqual({...state, similarFilms: similarFilms});
  });

  it('should loaded comments', () => {
    const mockComments = new Array(Count.Comments).fill(undefined).map(() => mockComment);
    expect(filmData(state, loadComments(mockComments)))
      .toEqual({...state, comments: mockComments});
  });

  it('should loaded favorite films', () => {
    const favoriteFilms = new Array(Count.Films).fill(undefined).map(() => mockFilm);
    expect(filmData(state, loadFavorite(favoriteFilms)))
      .toEqual({...state, favoriteFilms: favoriteFilms, isFavoriteLoaded: true});
  });
});

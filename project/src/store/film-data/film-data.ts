import {createReducer} from '@reduxjs/toolkit';
import {FilmData} from '../../types/state';
import {isLoading, loadComments, loadFavorite, loadFilm, loadSimilar} from '../action';

const initialState: FilmData = {
  currentFilm: null,
  isLoading: true,
  similarFilms: [],
  comments: [],
  favoriteFilms: [],
  isFavoriteLoaded: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      const film = action.payload;
      state.currentFilm = film;
    })
    .addCase(isLoading, (state, action) => {
      const isLoadingFilm = action.payload;
      state.isLoading = isLoadingFilm;
    })
    .addCase(loadSimilar, (state, action) => {
      const similarFilms = action.payload;
      state.similarFilms = similarFilms;
    })
    .addCase(loadComments, (state, action) => {
      const comments = action.payload;
      state.comments = comments;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteLoaded = true;
    });
});

export {filmData};

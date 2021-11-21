import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../../const';
import {FilmsData} from '../../types/state';
import {changeGenre, getGenreFilms, loadFilms, loadPromo} from '../action';

const initialState: FilmsData = {
  currentGenre: DEFAULT_GENRE,
  promoFilm: null,
  films: [],
  isDataLoaded: false,
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(getGenreFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export {filmsData};

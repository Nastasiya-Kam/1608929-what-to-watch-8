import {DEFAULT_GENRE, Grade} from './const';
import {Film} from './types/films';

const getGrade = (rating: number) => {
  if (rating < Grade.BAD.value) {
    return Grade.BAD.name;
  }

  if (rating < Grade.NORMAL.value && rating >= Grade.BAD.value) {
    return Grade.NORMAL.name;
  }

  if (rating < Grade.GOOD.value && rating >= Grade.NORMAL.value) {
    return Grade.GOOD.name;
  }

  if (rating < Grade.VERY_GOOD.value && rating >= Grade.GOOD.value) {
    return Grade.VERY_GOOD.name;
  }

  if (rating === Grade.AWESOME.value) {
    return Grade.AWESOME.name;
  }
};

const getGenres = (films: Film[]) => [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre.split(' ').map((letter) => letter[0].toUpperCase() + letter.substring(1)).join('')))];

const getGenresFilm = (films: Film[], currentGenre: string) => {
  if (currentGenre !== DEFAULT_GENRE) {
    return films.filter((film) => film.genre === currentGenre);
  }

  return films;

};

export {getGrade, getGenres, getGenresFilm};

import {DEFAULT_GENRE, Grade} from './const';
import {Film} from './types/films';

const getGrade = (rating: number): string | undefined => {
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

  return Grade.AWESOME.name;
};

const getGenres = (films: Film[]): string[] => [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre.split(' ').map((letter) => letter[0].toUpperCase() + letter.substring(1)).join('')))];

const getCurrentGenreFilms = (films: Film[], currentGenre: string): Film[] => {
  if (currentGenre !== DEFAULT_GENRE) {
    return films.filter((film) => film.genre.toUpperCase() === currentGenre.toUpperCase());
  }

  return films;
};

const getSimilarGenreFilms = (films: Film[], genre: string, currentId: number): Film[] => films.filter((element) => (currentId !== element.id) && element.genre === genre);

const getFavoriteFilms = (films: Film[]): Film[] => films.filter((film) => film.isFavorite);

const adaptToClient = (film: any): Film => ({
  id: film['id'],
  genre: film['genre'],
  description: film['description'],
  rating: film['rating'],
  director: film['director'],
  starring: film['starring'],
  title: film['name'],
  release: film['released'],
  posterImage: film['poster_image'],
  previewImage: film['preview_image'],
  backgroundImage: film['background_image'],
  backgroundColor: film['background_color'],
  videoLink: film['video_link'],
  previewVideoLink: film['preview_video_link'],
  scoresCount: film['scores_count'],
  runTime: film['run_time'],
  isFavorite: film['is_favorite'],
});

// const adaptToServer = (film: Film) => {
//   'id': film.id,
//   'comments': film.comments,
//   'film_info': {
//     'title': film.name,
//     'alternative_title': film.original,
//     'poster': film.img,
//     'description': film.description,
//     'total_rating': film.rating,
//     'release': {
//       'date': film.release,
//       'release_country': film.country,
//     },
//     'runtime': film.duration,
//     'genre': film.genres,
//     'director': film.director,
//     'writers': film.writers,
//     'actors': film.actors,
//     'age_rating': film.age,
//   },
//   'user_details': {
//     'watchlist': film.isWatchList,
//     'watching_date': film.watchingDate,
//     'already_watched': film.isWatched,
//     'favorite': film.isFavorite,
//   },
// };

export {getGrade, getGenres, getCurrentGenreFilms, getSimilarGenreFilms, getFavoriteFilms, adaptToClient};

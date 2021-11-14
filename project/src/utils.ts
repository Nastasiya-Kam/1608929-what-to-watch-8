import {AuthorizationStatus, DEFAULT_GENRE, Grade} from './const';
import {Film} from './types/films';
import {Comment} from './types/comment';

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

const getSimilarGenreFilms = (films: Film[], currentId: number): Film[] => films.filter((element) => (currentId !== element.id));

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

const adaptCommentsToClient = (comment: any): Comment => ({
  id: comment['id'],
  userId: comment['user']['id'],
  userName: comment['user']['name'],
  rating: comment['rating'],
  text: comment['comment'],
  date: comment['date'],
});

const adaptCommentsToServer = (comment: Comment): any => ({
  'rating': comment.rating,
  'comment': comment.text,
});

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;

const checkValidText = (text: string): boolean => (text.length >= 50 && text.length <= 400);
const checkValidRating = (rating: number): boolean => (rating !==0);
const checkValidForm = (isValidText: boolean, isValidRating: boolean): boolean => isValidText === true && isValidRating === true;

export {
  getGrade,
  getGenres,
  getCurrentGenreFilms,
  getSimilarGenreFilms,
  getFavoriteFilms,
  adaptToClient,
  adaptCommentsToClient,
  adaptCommentsToServer,
  isCheckedAuth,
  checkValidText,
  checkValidRating,
  checkValidForm
};

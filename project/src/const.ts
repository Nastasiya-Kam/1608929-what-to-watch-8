const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const MINUTES_IN_HOURS = 60;
const SIMILAR_FILMS_COUNT = 4;
const GENRE_FILMS_COUNT = 8;
const COMMENTS_COLUMNS_COUNT = 2;
const DEFAULT_GENRE = 'All genres';
const STARS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const enum AppRouteChangeElement {
  FILM_ID = ':film_id',
  STATUS = ':status',
  ID = ':id',
}

const enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const ScreenTypes = ['Overview', 'Details', 'Reviews'];

const enum ScreenType {
  Details = 'Details',
  Overview = 'Overview',
  Reviews = 'Reviews',
}

const Grade = {
  BAD: {
    value: 3,
    name: 'Bad',
  },
  NORMAL: {
    value: 5,
    name: 'Normal',
  },
  GOOD: {
    value: 8,
    name: 'Good',
  },
  VERY_GOOD: {
    value: 10,
    name: 'Very good',
  },
  AWESOME: {
    value: 10,
    name: 'Awesome',
  },
};

const enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/:film_id/:status',
  Similar = '/films/:id/similar',
  Promo = '/promo',
  Comments = '/comments/:film_id',
  Login = '/login',
  Logout = '/logout',
}

// TODO Д12. Переместить в папку с компонентом
const playerTogglerStyle = {
  left: '30%',
};

const enum FailMessage {
  Auth = 'Не забудьте авторизоваться',
  LoadFavorites = 'Фильмы из избранного доступны только зарегестрированным пользователям',
  PostComment = 'Что-то пошло не так. Комментарий не отправлен',
  AddToFavorite = 'Неавторизованные пользователи не могут добавлять в избранное',
  NotFoundFilm = 'Такого фильма не существует',
}

export {
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  MINUTES_IN_HOURS,
  SIMILAR_FILMS_COUNT,
  GENRE_FILMS_COUNT,
  COMMENTS_COLUMNS_COUNT,
  DEFAULT_GENRE,
  STARS,
  AppRouteChangeElement,
  AppRoute,
  AuthorizationStatus,
  ScreenTypes,
  ScreenType,
  Grade,
  APIRoute,
  playerTogglerStyle,
  FailMessage
};

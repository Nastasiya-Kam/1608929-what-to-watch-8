const MINUTES_IN_HOURS = 60;
const DEFAULT_GENRE = 'All genres';
const stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const screenTypes = ['Overview', 'Details', 'Reviews'];

enum CommentLength {
  Min = 50,
  Max = 400,
}

enum Count {
  SimilarFilms = 4,
  GenreFilms = 8,
  CommentsColumns = 2,
}

enum AppRouteChangeElement {
  FilmId = ':film_id',
  Status = ':status',
  Id = ':id',
}

enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum ScreenType {
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

enum APIRoute {
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

enum FailMessage {
  Auth = 'Не забудьте авторизоваться',
  LoadFavorites = 'Фильмы из избранного доступны только зарегестрированным пользователям',
  PostComment = 'Что-то пошло не так. Комментарий не отправлен',
  AddToFavorite = 'Неавторизованные пользователи не могут добавлять в избранное',
  NotFoundFilm = 'Такого фильма не существует',
}

export {
  MINUTES_IN_HOURS,
  DEFAULT_GENRE,
  stars,
  screenTypes,
  CommentLength,
  Count,
  AppRouteChangeElement,
  AppRoute,
  AuthorizationStatus,
  ScreenType,
  Grade,
  APIRoute,
  FailMessage
};

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

const GenresList = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const GenreType = {
  Comedies: {
    name: 'comedy',
    group: 'Comedies',
  },
  Horror: {
    name: 'horror',
    group: 'Horror',
  },
  Dramas: {
    name: 'drama',
    group: 'Dramas',
  },
  Crime: {
    name: 'crime',
    group: 'Crime',
  },
};

const ScreenTypes = ['Overview', 'Details', 'Reviews'];

const enum ScreenType {
  Details = 'Details',
  Overview = 'Overview',
  Reviews = 'Reviews',
}

const MINUTES_IN_HOURS = 60;

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

const SIMILAR_FILMS_COUNT = 4;
const GENRE_FILMS_COUNT = 8;
const COMMENTS_COLUMNS_COUNT = 2;
const DEFAULT_GENRE = 'All genres';

export {
  AppRoute,
  AuthorizationStatus,
  GenresList,
  GenreType,
  ScreenTypes,
  ScreenType,
  MINUTES_IN_HOURS,
  Grade,
  SIMILAR_FILMS_COUNT,
  GENRE_FILMS_COUNT,
  COMMENTS_COLUMNS_COUNT,
  DEFAULT_GENRE
};

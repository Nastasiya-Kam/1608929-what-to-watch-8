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

const ScreenTypes = ['Overview', 'Details', 'Reviews'];

const enum ScreenType {
  Details = 'Details',
  Overview = 'Overview',
  Reviews = 'Reviews',
}

const MINUTES_IN_HOURS = 60;

export {AppRoute, AuthorizationStatus, GenresList, ScreenTypes, ScreenType, MINUTES_IN_HOURS};

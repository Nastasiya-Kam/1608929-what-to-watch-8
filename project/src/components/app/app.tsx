import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../_screen/main-screen/main-screen';
import SignInScreen from '../_screen/sign-in-screen/sign-in-screen';
import MyListScreen from '../_screen/my-list-screen/my-list-screen';
// import FilmScreen from '../_screen/film-screen/film-screen';
import AddReviewScreen from '../_screen/add-review-screen/add-review-screen';
import PlayerScreen from '../_screen/player-screen/player-screen';
import NotFoundScreen from '../_screen/not-found-screen/not-found-screen';

type AppFilmProps = {
  id: number,
  posterImage: string,
  name: string,
}

type Film = {
  title: string,
  genre: string,
  release: number,
  posterImage: string,
  previewImage: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starrings: string[],
};

type AppScreenProps = {
  title: string,
  genre: string,
  releaseDate: number,
  posterImgage: string,
  previewImage: string,
  films: AppFilmProps[],
  mockFilm: Film,
};

function App({title, genre, releaseDate, posterImgage, previewImage, films, mockFilm}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen
            title = {title}
            genre = {genre}
            releaseDate = {releaseDate}
            previewImage = {previewImage}
            posterImgage = {posterImgage}
            films = {films}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyListScreen
            films = {films}
          />
        </Route>
        <Route exact path={AppRoute.Film}>
          {/* <FilmScreen
            film = {mockFilm}
            films = {films}
          /> */}
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen
            previewImage = {mockFilm.previewImage}
            posterImage = {mockFilm.posterImage}
            name = {mockFilm.title}
          />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

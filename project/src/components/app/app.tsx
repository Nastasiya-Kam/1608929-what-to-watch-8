import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../_screen/main-screen/main-screen';
import SignInScreen from '../_screen/sign-in-screen/sign-in-screen';
import MyListScreen from '../_screen/my-list-screen/my-list-screen';
import FilmScreen from '../_screen/film-screen/film-screen';
import AddReviewScreen from '../_screen/add-review-screen/add-review-screen';
import PlayerScreen from '../_screen/player-screen/player-screen';
import NotFoundScreen from '../_screen/not-found-screen/not-found-screen';
import {films} from '../../mocks/films';
import {CardFilm, PromoFilm, PlayerFilm} from '../../types/films';

const someFilm = films[0];

const promoFilm : PromoFilm = {
  id: someFilm.id,
  title: someFilm.title,
  genre: someFilm.genre,
  releaseDate: someFilm.release,
  posterImage: someFilm.posterImage,
  previewImage: someFilm.previewImage,
};

const cardFilms : CardFilm[] = films.map((film) => ({
  id: film.id,
  name: film.title,
  posterImage: film.posterImage,
  videoLink: film.videoLink,
}));

const playerFilm : PlayerFilm = {
  videoLink: films[0].videoLink,
  playerPoster: films[0].previewImage,
};

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.Root}>
          <MainScreen
            promoFilm = {promoFilm}
            films = {cardFilms}
          />
        </Route>
        <Route exact path = {AppRoute.Login}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.MyList}
          render = {() => <MyListScreen films = {cardFilms} />}
          authorizationStatus = {AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path = {AppRoute.Film}>
          <FilmScreen
            film = {films[0]}
            films = {cardFilms.slice(0, 4)}
          />
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.AddReview}
          render = {() => (
            <AddReviewScreen
              id = {promoFilm.id}
              previewImage = {promoFilm.previewImage}
              posterImage = {promoFilm.posterImage}
              name = {promoFilm.title}
            />
          )}
          authorizationStatus = {AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path = {AppRoute.Player}>
          <PlayerScreen
            videoLink = {playerFilm.videoLink}
            playerPoster = {playerFilm.playerPoster}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../_screen/main-screen/main-screen';
import SignInScreen from '../_screen/sign-in-screen/sign-in-screen';
import MyListScreen from '../_screen/my-list-screen/my-list-screen';
import FilmScreen from '../_screen/film-screen/film-screen';
import AddReviewScreen from '../_screen/add-review-screen/add-review-screen';
// import PlayerScreen from '../_screen/player-screen/player-screen';
import NotFoundScreen from '../_screen/not-found-screen/not-found-screen';
import {State} from '../../types/state';
import {isCheckedAuth} from '../../utils';
import browserHistory from '../../browser-history';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = {AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route
          exact
          path = {AppRoute.Login}
          render = {() => {
            if (!isCheckedAuth(authorizationStatus)) {
              return <SignInScreen />;
            }

            return <MainScreen />;
          }}
        >
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.MyList}
          render = {() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route
          exact
          path = {AppRoute.Film}
          render = {(routerProps) => {
            const id = parseInt(routerProps?.match?.params?.id as string, 10);
            return <FilmScreen currentId = {id} />;
          }}
        >
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.AddReview}
          render = {() => <AddReviewScreen />}
        >
        </PrivateRoute>
        {/* <Route exact path = {AppRoute.Player}>
          <PlayerScreen
            videoLink = {playerFilm.videoLink}
            playerPoster = {playerFilm.playerPoster}
          />
        </Route> */}
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);

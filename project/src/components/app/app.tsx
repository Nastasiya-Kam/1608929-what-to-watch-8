import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../_screen/main-screen/main-screen';
import SignInScreen from '../_screen/sign-in-screen/sign-in-screen';
import MyListScreen from '../_screen/my-list-screen/my-list-screen';
import FilmScreen from '../_screen/film-screen/film-screen';
import AddReviewScreen from '../_screen/add-review-screen/add-review-screen';
import PlayerScreen from '../_screen/player-screen/player-screen';
import NotFoundScreen from '../_screen/not-found-screen/not-found-screen';
import browserHistory from '../../browser-history';
import {isCheckedAuth} from '../../utils';
import LoadingScreen from '../_screen/loading-screen/loading-screen';
import {getAuthoritationStatus} from '../../store/user-process/selectors';
import {getLoadedDataStatus} from '../../store/films-data/selectors';

function App(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const authorizationStatus = useSelector(getAuthoritationStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route
          exact
          path={AppRoute.Login}
          render={() => {
            if (authorizationStatus !== AuthorizationStatus.Auth) {
              return <SignInScreen />;
            }

            return <MainScreen />;
          }}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.Film}
          render={(routerProps) => {
            const id = parseInt(routerProps?.match?.params?.id as string, 10);
            return <FilmScreen currentId={id} />;
          }}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen />}
        >
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.Player}
          render={(routerProps) => {
            const id = parseInt(routerProps?.match?.params?.id as string, 10);
            return <PlayerScreen currentId={id} />;
          }}
        >
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

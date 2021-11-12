import {Switch, Route, BrowserRouter} from 'react-router-dom';
// import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../_screen/main-screen/main-screen';
import SignInScreen from '../_screen/sign-in-screen/sign-in-screen';
import MyListScreen from '../_screen/my-list-screen/my-list-screen';
import FilmScreen from '../_screen/film-screen/film-screen';
import AddReviewScreen from '../_screen/add-review-screen/add-review-screen';
// import PlayerScreen from '../_screen/player-screen/player-screen';
import NotFoundScreen from '../_screen/not-found-screen/not-found-screen';
// import LoadingScreen from '../_screen/loading-screen/loading-screen';
// import {isCheckedAuth} from '../../game';
// import {State} from '../../types/state';
// import LoadingScreen from '../_screen/loading-screen/loading-screen';
// import {isCheckedAuth} from '../../utils';

// const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
//   authorizationStatus,
//   isDataLoaded,
// });

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

function App(): JSX.Element { //props: PropsFromRedux
  // const {authorizationStatus, isDataLoaded} = props;

  // if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route exact path = {AppRoute.Login}>
          <SignInScreen />
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
            return <FilmScreen id = {id} />;
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

// export {App};
// export default connector(App);
export default App;

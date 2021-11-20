import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import Footer from '../../footer/footer';
import FilmList from '../../film-list/film-list';
import {State} from '../../../types/state';
import {ThunkAppDispatch} from '../../../types/action';
import {fetchFavoriteFilmsAction} from '../../../store/api-actions';
import {store} from '../../../index';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {AuthorizationStatus} from '../../../const';

const mapStateToProps = ({favoriteFilms, isFavoriteLoaded, authorizationStatus}: State) => ({
  favoriteFilms,
  isFavoriteLoaded,
  authorizationStatus,
});

const mapDispatchToProps = () => ({
  onLoadFavorites() {
    (store.dispatch as ThunkAppDispatch)(fetchFavoriteFilmsAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListScreen ({favoriteFilms, isFavoriteLoaded, authorizationStatus, onLoadFavorites}: PropsFromRedux): JSX.Element {
  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return;
    }

    onLoadFavorites();
  }, [authorizationStatus]);

  if (!isFavoriteLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <SignOut />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);

import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import Footer from '../../footer/footer';
import FilmList from '../../film-list/film-list';
import {fetchFavoriteFilmsAction} from '../../../store/api-actions';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {AuthorizationStatus} from '../../../const';
import {getFavoriteFilms, getFavoriteLoadedStatus} from '../../../store/film-data/selectors';
import {getAuthoritationStatus} from '../../../store/user-process/selectors';

function MyListScreen(): JSX.Element {
  const favoriteFilms = useSelector(getFavoriteFilms);
  const isFavoriteLoaded = useSelector(getFavoriteLoadedStatus);
  const authorizationStatus = useSelector(getAuthoritationStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return;
    }

    dispatch(fetchFavoriteFilmsAction());
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

export default MyListScreen;

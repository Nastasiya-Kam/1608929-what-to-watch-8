import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import Footer from '../../footer/footer';
import FilmList from '../../film-list/film-list';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getFavoriteFilms} from '../../../utils';

const mapStateToProps = ({films}: State) => {
  const favoriteFilms = getFavoriteFilms(films);

  return ({
    films: favoriteFilms,
  });
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListScreen ({films}: PropsFromRedux): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <SignOut />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films = {films} />
      </section>
      <Footer />
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);

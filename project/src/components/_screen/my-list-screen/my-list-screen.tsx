import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import Footer from '../../footer/footer';
import FilmList from '../../film-list/film-list';
import {Film} from '../../../types/films';
import {State} from '../../../types/state';
import {Actions} from '../../../types/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {setCurrentFilm} from '../../../store/action';
import { getFavoriteFilms } from '../../../utils';


const mapStateToProps = ({films}: State) => ({
  films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCurrentFilmChange(currentFilm: Film) {
    dispatch(setCurrentFilm(currentFilm));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListScreen ({films}: PropsFromRedux): JSX.Element {
  const favoriteFilms = getFavoriteFilms(films);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films = {favoriteFilms} renderedFilmCount = {favoriteFilms.length} />
      </section>

      <Footer />
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);

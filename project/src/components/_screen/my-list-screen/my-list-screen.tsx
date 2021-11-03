import Logo from '../../logo/logo';
import {Film} from '../../../types/films';
import SignOut from '../../sign-out/sign-out';
import Footer from '../../footer/footer';
import FilmList from '../../film-list/film-list';

type Props = {
  films: Film[],
};

function MyListScreen ({films}: Props): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films = {films}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;

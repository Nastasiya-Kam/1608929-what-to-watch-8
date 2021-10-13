import SmallFilmCard from '../../small-film-card/small-film-card';
import Logo from '../../logo/logo';
import {CardFilm} from '../../../types/films';
import SignOut from '../../sign-out/sign-out';

type Props = {
  films: CardFilm[],
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

        <div className="catalog__films-list">
          {films.slice(0, 9).map((film) => <SmallFilmCard key = {film.id} posterImage = {film.posterImage} name = {film.name}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;

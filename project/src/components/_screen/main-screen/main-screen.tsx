import Logo from '../../logo/logo';
import {CardFilm, PromoFilm} from '../../../types/films';
import SignOut from '../../sign-out/sign-out';
import FilmList from '../../film-list/film-list';
import Footer from '../../footer/footer';
import {GenresList, GENRE_FILMS_COUNT, DEFAULT_GENRE} from '../../../const';
import {useState} from 'react';
import {getGenre} from '../../../utils';

type Props = {
  promoFilm: PromoFilm,
  films: CardFilm[],
}

function MainScreen({promoFilm, films}: Props): JSX.Element {
  const {title, genre, releaseDate, previewImage, posterImage} = promoFilm;
  const [currentGenre, setCurrentGenre] = useState<string>(DEFAULT_GENRE);

  let genreFilms = films;

  if (currentGenre !== DEFAULT_GENRE) {
    genreFilms = films.filter((film) => getGenre(film.genre) === currentGenre);
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={previewImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <SignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {GenresList.map((element, index) => {
              const keyGenre = `genre-${index}`;
              return (
                <li
                  key={keyGenre}
                  className={`catalog__genres-item${(element === currentGenre) ? ' catalog__genres-item--active' : ''}`}
                >
                  <a
                    href="#"
                    className="catalog__genres-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setCurrentGenre(element);
                    }}
                  >
                    {element}
                  </a>
                </li>);
            })}
          </ul>

          <FilmList films = {genreFilms.slice(0, GENRE_FILMS_COUNT)} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;

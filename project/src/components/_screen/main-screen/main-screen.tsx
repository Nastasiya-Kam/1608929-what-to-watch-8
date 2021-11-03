import Logo from '../../logo/logo';
import {Film, PromoFilm} from '../../../types/films';
import SignOut from '../../sign-out/sign-out';
import FilmList from '../../film-list/film-list';
import Footer from '../../footer/footer';
import {GENRE_FILMS_COUNT} from '../../../const';
import GenreList from '../../genre-list/genre-list';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';
import {Actions} from '../../../types/action';
import {changeGenre} from '../../../store/action';
import {getGenres, getGenresFilm} from '../../../utils';

type Props = {
  promoFilm: PromoFilm,
  films: Film[],
}

const mapStateToProps = ({currentGenre, films}: State) => {
  const filmsByGenre = getGenresFilm(films, currentGenre);
  const genres = getGenres(films);

  return {
    genres,
    films: filmsByGenre,
    currentGenre,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreChange(element: string) {
    dispatch(changeGenre(element));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Props;

function MainScreen({promoFilm, films, genres, currentGenre, onGenreChange}: ConnectedComponentProps): JSX.Element {
  const {title, genre, releaseDate, previewImage, posterImage} = promoFilm;

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
          <GenreList genres = {genres} currentGenre = {currentGenre} onGenreChange = {onGenreChange} />
          <FilmList films = {films.slice(0, GENRE_FILMS_COUNT)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export {MainScreen};
export default connector(MainScreen);

import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import SignOut from '../../sign-out/sign-out';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import {FilmId} from '../../../types/films';
import {State} from '../../../types/state';
import {AppRoute, ScreenTypes, ScreenType, SIMILAR_FILMS_COUNT} from '../../../const';
import {getSimilarGenreFilms} from '../../../utils';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  id: FilmId,
}

const mapStateToProps = ({films}: State, ownProps: Props) => {
  const {id} = ownProps;
  const currentFilm = films.find((item) => item.id === id);
  const similarFilms = currentFilm ? getSimilarGenreFilms(films, currentFilm.genre, currentFilm.id) : [];

  return ({
    currentFilm,
    films: similarFilms,
  });
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmScreen ({films, currentFilm}: PropsFromRedux): JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<string>(ScreenType.Overview);

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const {id, title, genre, release, posterImage, previewImage} = currentFilm;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={previewImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <SignOut />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{release}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {/* // TODO  to={AppRoute.AddReview.replace(':id', String(id))} */}
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.AddReview.replace(':id', String(id))} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {ScreenTypes.map((type, index) => {
                    const keyType = `type-${index}`;

                    return (
                      <li
                        key={keyType}
                        className={`film-nav__item ${(type === currentScreen) && 'film-nav__item--active'}`}
                      >
                        <a
                          href="#"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setCurrentScreen(type);
                          }}
                          className="film-nav__link"
                        >
                          {type}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <Tabs
                currentScreen = {currentScreen}
                film = {currentFilm}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films = {films.slice(0, SIMILAR_FILMS_COUNT)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export {FilmScreen};
export default connector(FilmScreen);

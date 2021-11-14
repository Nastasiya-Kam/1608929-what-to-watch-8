import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import SignOut from '../../sign-out/sign-out';
import SignIn from '../../sign-in/sign-in';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import InList from '../../in-list/in-list';
import InListNot from '../../in-list-not/in-list-not';
import {FilmId} from '../../../types/films';
import {State} from '../../../types/state';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {ThunkAppDispatch} from '../../../types/action';
import {AppRoute, ScreenTypes, ScreenType, SIMILAR_FILMS_COUNT} from '../../../const';
import {getSimilarGenreFilms, isCheckedAuth} from '../../../utils';
import {store} from '../../../index';
import {fetchCommentsAction, fetchSimilarFilmsAction} from '../../../store/api-actions';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';

type Props = {
  currentId: FilmId,
}

const mapStateToProps = ({films, similarFilms, authorizationStatus}: State, ownProps: Props) => {
  const {currentId} = ownProps;
  const currentFilm = films.find((item) => item.id === currentId);
  const currentSimilarFilms = currentFilm ? getSimilarGenreFilms(similarFilms, currentFilm.id) : [];

  return ({
    currentId,
    currentFilm,
    similarFilms: currentSimilarFilms,
    authorizationStatus,
  });
};

const mapDispatchToProps = () => ({
  onLoadComments(id: FilmId) {
    (store.dispatch as ThunkAppDispatch)(fetchCommentsAction(id));
  },
  onLoadSimilar(id: FilmId) {
    (store.dispatch as ThunkAppDispatch)(fetchSimilarFilmsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmScreen ({currentId, currentFilm, similarFilms, authorizationStatus, onLoadComments, onLoadSimilar}: PropsFromRedux): JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<string>(ScreenType.Overview);

  useEffect(() => {
    if (!currentFilm) {
      return;
    }
    onLoadComments(currentId);
    onLoadSimilar(currentId);
  }, [currentFilm]);

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const {id, title, genre, release, posterImage, previewImage, isFavorite} = currentFilm;

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
            {isCheckedAuth(authorizationStatus)
              ? <SignOut />
              : <SignIn />}
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
                {(isFavorite)
                  ? <InList />
                  : <InListNot />}
                {isCheckedAuth(authorizationStatus) && <Link to={AppRoute.AddReview.replace(':id', String(id))} className="btn film-card__button">Add review</Link>}
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

              <Tabs currentScreen = {currentScreen} />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films = {similarFilms.slice(0, SIMILAR_FILMS_COUNT)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export {FilmScreen};
export default connector(FilmScreen);

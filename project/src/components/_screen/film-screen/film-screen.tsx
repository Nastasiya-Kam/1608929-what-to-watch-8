import Logo from '../../logo/logo';
import Footer from '../../footer/footer';
import SignOut from '../../sign-out/sign-out';
import SignIn from '../../sign-in/sign-in';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import FavoriteButton from '../../favorite-button/favorite-button';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayButton from '../../play-button/play-button';
import {FilmId} from '../../../types/films';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, ScreenTypes, ScreenType, SIMILAR_FILMS_COUNT, AuthorizationStatus, AppRouteChangeElement} from '../../../const';
import {fetchFilmAction, fetchCommentsAction, fetchSimilarFilmsAction, postFavoriteFilmStatusAction} from '../../../store/api-actions';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {getAuthoritationStatus} from '../../../store/user-process/selectors';
import {getCurrentFilm, getCurrentSimilarFilms, getLoadingStatus} from '../../../store/film-data/selectors';

type Props = {
  currentId: FilmId,
}

function FilmScreen({currentId}: Props): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const isLoading = useSelector(getLoadingStatus);
  const similarFilms = useSelector(getCurrentSimilarFilms);
  const authorizationStatus = useSelector(getAuthoritationStatus);
  const dispatch = useDispatch();

  const [currentScreen, setCurrentScreen] = useState<string>(ScreenType.Overview);

  const onStatusFavoriteChange = (id: FilmId, status: number) => {
    dispatch(postFavoriteFilmStatusAction(id, status));
  };

  useEffect(() => {
    dispatch(fetchFilmAction(currentId));
    dispatch(fetchCommentsAction(currentId));
    dispatch(fetchSimilarFilmsAction(currentId));
  }, [currentId, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const {id, title, genre, release, posterImage, backgroundImage, backgroundColor, isFavorite} = currentFilm;

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{backgroundColor: backgroundColor}}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            {(authorizationStatus === AuthorizationStatus.Auth)
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
                <PlayButton id={currentId} />
                <FavoriteButton filmId={id} isFavorite={isFavorite} onClick={onStatusFavoriteChange} />
                {(authorizationStatus === AuthorizationStatus.Auth) && <Link to={AppRoute.AddReview.replace(AppRouteChangeElement.Id, String(id))} className="btn film-card__button">Add review</Link>}
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

              <Tabs currentScreen={currentScreen} currentFilm={currentFilm} />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms.slice(0, SIMILAR_FILMS_COUNT)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;

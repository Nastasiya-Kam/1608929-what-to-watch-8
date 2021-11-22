import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import SignIn from '../../sign-in/sign-in';
import FilmList from '../../film-list/film-list';
import Footer from '../../footer/footer';
import ShowMore from '../../show-more/show-more';
import GenreList from '../../genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteButton from '../../favorite-button/favorite-button';
import PlayButton from '../../play-button/play-button';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FilmId} from '../../../types/films';
import {changeGenre} from '../../../store/action';
import {postFavoriteFilmStatusAction} from '../../../store/api-actions';
import {AuthorizationStatus, Count} from '../../../const';
import {getCurrentGenre, getFilmsByGenre, getGenresFilms, getLoadedDataStatus, getPromoFilm} from '../../../store/films-data/selectors';
import {getAuthoritationStatus} from '../../../store/user-process/selectors';

function MainScreen(): JSX.Element {
  const genres = useSelector(getGenresFilms);
  const films = useSelector(getFilmsByGenre);
  const currentGenre = useSelector(getCurrentGenre);
  const promoFilm = useSelector(getPromoFilm);
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const authorizationStatus = useSelector(getAuthoritationStatus);

  const dispatch = useDispatch();
  const onGenreChange = (element: string) => {
    dispatch(changeGenre(element));
  };
  const onStatusFavoriteChange = (id: FilmId, status: number) => {
    dispatch(postFavoriteFilmStatusAction(id, status));
  };

  const [renderedFilmCount, setRenderedFilmCount] = useState<number>(Count.GenreFilms);

  if (!isDataLoaded || !promoFilm) {
    return <LoadingScreen />;
  }

  const {id, title, genre, release, backgroundImage, posterImage, isFavorite} = promoFilm;

  return (
    <>
      <section className="film-card">
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{release}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={promoFilm.id} />
                <FavoriteButton filmId={id} isFavorite={isFavorite} onClick={onStatusFavoriteChange} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres} currentGenre={currentGenre} onGenreChange={onGenreChange} onRenderedFilm={setRenderedFilmCount} />
          <FilmList films={films.slice(0, renderedFilmCount)} />
          {(films.length > renderedFilmCount) && <ShowMore renderedFilmCount={renderedFilmCount} onClick={setRenderedFilmCount} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;

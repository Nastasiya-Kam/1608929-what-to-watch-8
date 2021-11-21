import {AppRoute, AppRouteChangeElement} from '../../const';
import {Link} from 'react-router-dom';
import {FilmId, Film} from '../../types/films';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import VideoPlayer from '../video-player/video-player';
import {loadFilm} from '../../store/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import browserHistory from '../../browser-history';
import { getCurrentFilm } from '../../store/film-data/selectors';

type Props = {
  film: Film,
  setActiveCardId: (a: FilmId | null) => void;
  isActive: boolean,
}

const mapStateToProps = (state: State) => ({
  currentFilm: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCurrentFilmChange(currentFilm: Film) {
    dispatch(loadFilm(currentFilm));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Props;

function SmallFilmCard({film, setActiveCardId, isActive, onCurrentFilmChange}: ConnectedComponentProps): JSX.Element {
  const {id, title, previewImage, videoLink} = film;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setActiveCardId(id);
      }}
      onMouseLeave={() => {
        setActiveCardId(null);
      }}
    >
      <div
        className="small-film-card__image"
        onClick={() => browserHistory.push(AppRoute.Film.replace(AppRouteChangeElement.ID, String(id)))}
      >
        {
          (isActive)
            ? <VideoPlayer videoLink={videoLink} poster={previewImage} />
            : <img src={previewImage} alt={title} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={AppRoute.Film.replace(AppRouteChangeElement.ID, String(id))}
          onClick={() => {
            onCurrentFilmChange(film);
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export {SmallFilmCard};
export default connector(SmallFilmCard);

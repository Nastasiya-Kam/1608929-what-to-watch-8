import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';
import {FilmId} from '../../../types/films';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {playerTogglerStyle} from '../../../const';
import {useRef} from 'react';

type Props = {
  currentId: FilmId,
}

const mapStateToProps = ({films}: State, ownProps: Props) => {
  const {currentId} = ownProps;
  const currentFilm = films.find((item) => item.id === currentId);

  return ({
    currentFilm,
  });
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerScreen({currentFilm}: PropsFromRedux): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const {videoLink} = currentFilm;

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        autoPlay
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => 'Остановка просмотра. Плеер скрывается.'}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={playerTogglerStyle}>Toggler</div>
          </div>
          {/* //TODO Если продолжительность фильма (dayjs?)
              более часа то -01:45:45
              менее часа, то -53:00 */}
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => 'Остановка/плей'}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => 'выход/вход в полноэкранный режим'}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export {PlayerScreen};
export default connector(PlayerScreen);

import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';
import {FilmId} from '../../../types/films';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {playerTogglerStyle} from '../../../const';
import {useEffect, useRef, useState} from 'react';
import { useHistory } from 'react-router';

const SECONDS_IN_MINUTES = 60;

const minutesToTime = (duration: number) => {
  const hours = Math.floor(duration / (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES));
  const divisorForMinutes = duration % (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES);
  const minutes = Math.floor(divisorForMinutes / SECONDS_IN_MINUTES);
  const divisorForSeconds = divisorForMinutes % SECONDS_IN_MINUTES;
  const seconds = Math.ceil(divisorForSeconds);

  return {
    'h': hours,
    'm': minutes,
    's': seconds,
  };
};

type Props = {
  currentId: FilmId,
}

const mapStateToProps = ({films}: State, ownProps: Props) => {
  const {currentId} = ownProps;
  const currentFilm = films.find((item) => item.id === currentId);
  const currentRunTime = currentFilm?.runTime;

  return ({
    currentFilm,
    currentRunTime,
  });
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerScreen({currentFilm, currentRunTime}: PropsFromRedux): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (currentRunTime !== undefined) {
      setCurrentTime(currentRunTime * 60);
    }
  }, [currentRunTime]);

  useEffect(() => {
    const video: HTMLVideoElement | null = videoRef.current;
    if (video !== null) {
      setIsPlaying(!video.paused);
    }
  }, [videoRef, currentFilm]);

  useEffect(() => {
    if (currentTime === undefined) {
      return;
    }

    const timerID = setInterval(
      () => setCurrentTime((prevTimer) => prevTimer - 1),
      1000,
    );

    return (() => {
      clearInterval(timerID);
    });
  }, [currentTime]);

  useEffect(() => {
    const video: HTMLVideoElement | null = videoRef.current;
    if (!video) {
      return;
    }

    const onPlay = () => {
      setIsPlaying(true);
      setCurrentTime(video.currentTime);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, [videoRef]);

  const onPlay = () => {
    const video: HTMLVideoElement | null = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const history = useHistory();

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const {videoLink, runTime} = currentFilm;
  // eslint-disable-next-line
  console.log('runTime', currentTime);
  const timing = minutesToTime(currentTime);

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
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={playerTogglerStyle}>Toggler</div>
          </div>
          {/* //TODO Если продолжительность фильма
              более часа то -01:45:45
              менее часа, то -53:00 */}
          <div className="player__time-value">
            {/* //TODO магические числа! 60 и 10. Вынести в формулу весь? */}
            {(runTime >= 60)
              ? `-${(timing.h < 10) ? '0' : ''}${timing.h}:${(timing.m < 10) ? '0' : ''}${timing.m}:${(timing.s < 10) ? '0' : ''}${timing.s}`
              : `-${(timing.m < 10) ? '0' : ''}${timing.m}:${(timing.s < 10) ? '0' : ''}${timing.s}`}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => onPlay()}
          >
            {(isPlaying)
              ? <><svg viewBox="0 0 14 21" width="14" height="21"><use xlinkHref="#pause"></use></svg><span>Play</span></>
              : <><svg viewBox="0 0 19 19" width="19" height="19"><use xlinkHref="#play-s"></use></svg><span>Pause</span></>}
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

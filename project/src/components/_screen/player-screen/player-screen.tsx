import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';
import {FilmId} from '../../../types/films';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {getCurrentFilmById} from '../../../store/film-data/selectors';
// import LoadingScreen from '../loading-screen/loading-screen';
dayjs.extend(duration);

const SECONDS_IN_MINUTES = 60;

const getTimeFormat = (currentTime: number) => {
  const timeFormat = currentTime >= (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES) ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(currentTime, 'seconds').format(timeFormat);
};

// const minutesToTime = (duration: number) => {
//   const hours = Math.floor(duration / (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES));
//   const divisorForMinutes = duration % (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES);
//   const minutes = Math.floor(divisorForMinutes / SECONDS_IN_MINUTES);
//   const divisorForSeconds = divisorForMinutes % SECONDS_IN_MINUTES;
//   const seconds = Math.ceil(divisorForSeconds);

//   return {
//     'h': hours,
//     'm': minutes,
//     's': seconds,
//   };
// };

type Props = {
  currentId: FilmId,
}

const mapStateToProps = (state: State, ownProps: Props) => {
  const {currentId} = ownProps;

  return ({
    currentFilm: getCurrentFilmById(state, currentId),
  });
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerScreen({currentFilm}: PropsFromRedux): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [leftTime, setLeftTime] = useState<number>(0);
  // const [playerTogglerStyle, setPlayerTogglerStyle] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // TODO Получаем длину фильма video.duration
  // todo используем счётчик в useEffect, чтобы шли секунды (убывание на 1)
  // todo когда фильм на паузе, счётчик должен перестать идти

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    setLeftTime(videoRef.current?.duration);
  }, [videoRef]);

  useEffect(() => {
    const video: HTMLVideoElement | null = videoRef.current;
    if (video !== null) {
      setIsPlaying(!video.paused);
    }
  }, [videoRef, currentFilm]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const onPlay = () => {
      setIsPlaying(true);
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const timerId = setInterval(
      () => setLeftTime((prevLeftTime) => prevLeftTime - 1),
      1000,
    );

    return  () => {
      clearTimeout(timerId);
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

  const {videoLink} = currentFilm;

  // const durationTime = videoRef?.current?.duration;

  // const playerTogglerStyle = {
  //   left: `${leftTime / durationTime}%`,
  // };

  // eslint-disable-next-line no-console
  console.log(getTimeFormat(leftTime));

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster="img/loading-buffering.gif"
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
            {/* <div className="player__toggler" style={playerTogglerStyle}>Toggler</div> */}
          </div>
          {/* //TODO Если продолжительность фильма
              более часа то -01:45:45
              менее часа, то -53:00 */}
          <div className="player__time-value">{getTimeFormat(leftTime)}
            {/* //TODO магические числа! 60 и 10. Вынести в формулу весь? */}
            {/* {(currentTime >= 60)
              ? `-${(timing.h < 10) ? '0' : ''}${timing.h}:${(timing.m < 10) ? '0' : ''}${timing.m}:${(timing.s < 10) ? '0' : ''}${timing.s}`
              : `-${(timing.m < 10) ? '0' : ''}${timing.m}:${(timing.s < 10) ? '0' : ''}${timing.s}`} */}
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

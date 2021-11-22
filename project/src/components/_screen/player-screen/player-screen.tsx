import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../../types/state';
import {FilmId} from '../../../types/films';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router';
import {getCurrentFilmById} from '../../../store/film-data/selectors';
import {getTimeFormat} from './player-screen-style';

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

const calculateProgress = (totalTime: number, currentTime: number) => {
  if (!totalTime || !currentTime) {
    return 0;
  }

  return currentTime / totalTime * 100;
};

function PlayerScreen({currentFilm}: PropsFromRedux): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [leftTime, setLeftTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    setLeftTime(videoRef.current.duration);
  }, [videoRef]);

  useEffect(() => {
    if (videoRef.current !== null) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, [videoRef, currentFilm]);

  useEffect(() => {
    const video: HTMLVideoElement | null = videoRef.current;
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
    const video: HTMLVideoElement | null = videoRef.current;
    if (!video) {
      return;
    }

    const timerId = setInterval(
      () => {
        const videoDuration = video.duration;
        const currentTime = video.currentTime;
        const timeLeft = videoDuration - currentTime;
        setLeftTime(timeLeft);
        setProgress(calculateProgress(videoDuration, currentTime));
      },
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
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeFormat(leftTime)}</div>
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
            onClick={() => videoRef.current?.requestFullscreen()}
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

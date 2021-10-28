import {useEffect, useRef, useState} from 'react';

type Props = {
  poster: string,
  videoLink: string,
  isActive: boolean,
}

function VideoPlayer({poster, videoLink, isActive}: Props): JSX.Element {
  const [activeFilmId, setActiveCardId] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        if (videoRef.current === null) {
          return;
        }

        videoRef.current.play();
      }, 1000,
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [activeFilmId]);

  return (
    <video
      onMouseEnter = {() => {
        setActiveCardId(true);
      }}
      onMouseLeave = {() => {
        setActiveCardId(false);
      }}

      ref = {videoRef}
      poster = {poster}
      src = {videoLink}
      width = "280"
      height = "175"
      preload = "none"
      muted
    >
    </video>
  );
}

export default VideoPlayer;

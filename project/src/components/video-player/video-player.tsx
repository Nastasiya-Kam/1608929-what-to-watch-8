import {useEffect, useRef} from 'react';

type Props = {
  poster: string,
  videoLink: string,
}

function VideoPlayer({poster, videoLink}: Props): JSX.Element {
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
  });

  return (
    <video
      ref={videoRef}
      poster={poster}
      src={videoLink}
      width="280"
      height="175"
      preload="none"
      muted
    >
    </video>
  );
}

export default VideoPlayer;

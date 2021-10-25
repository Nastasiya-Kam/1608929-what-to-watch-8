// Все необходимые данные компонент должен принимать через props.
// Предусмотрите возможность воспроизведения видео без звука.

type Props = {
  poster: string,
  videoLink: string,
  isPlaying: boolean,
}

function VideoPlayer({poster, videoLink, isPlaying}: Props): JSX.Element {
  // eslint-disable-next-line
  console.log(poster, isPlaying);

  return (
    <video
      poster = {poster}
      src = {videoLink}
      width = "280"
      height = "175"
      muted
      autoPlay = {isPlaying}
    >
    </video>
  );
}

export default VideoPlayer;

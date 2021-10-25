type Props = {
  poster: string,
  videoLink: string,
}

function VideoPlayer({poster, videoLink}: Props): JSX.Element {

  return (
    <video
      poster = {poster}
      src = {videoLink}
      width = "280"
      height = "175"
      muted
      autoPlay
    >
    </video>
  );
}

export default VideoPlayer;

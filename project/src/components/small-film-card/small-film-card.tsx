import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {FilmId} from '../../types/films';
import {useEffect, useRef, useState} from 'react';
import VideoPlayer from '../video-player/video-player';

type Film = {
  id: FilmId,
  image: string,
  videoLink: string,
  name: string,
  setActiveCardId: (a: FilmId | null) => void;
}

function SmallFilmCard({id, image, videoLink, name, setActiveCardId}: Film): JSX.Element {
  // const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   if (videoRef.current !== null) {
  //     videoRef.current.onloadeddata = () => setIsLoading(false);
  //   }

  //   return () => {
  //     if (videoRef.current !== null) {
  //       videoRef.current.onloadeddata = null;
  //       videoRef.current = null;
  //     }
  //   };
  // }, [id]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.pause();
        videoRef.current = null;
      }
    };
  }, [isPlaying]);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => {
        setActiveCardId(id);
        setIsPlaying(true);
        // eslint-disable-next-line
        // console.log(isPlaying);
      }}
      onMouseLeave = {() => {
        setActiveCardId(null);
        setIsPlaying(false);
        // eslint-disable-next-line
        // console.log(isPlaying);
      }}
    >
      <div className="small-film-card__image">
        <VideoPlayer videoLink={videoLink} poster={image} isPlaying = {isPlaying} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;

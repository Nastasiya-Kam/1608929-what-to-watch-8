import {useSelector} from 'react-redux';
import React from 'react';
import {ScreenType, MINUTES_IN_HOURS, Count} from '../../const';
import {getGrade} from '../../utils/utils';
import {Film} from '../../types/films';
import Comment from '../comment/comment';
import LoadingScreen from '../_screen/loading-screen/loading-screen';
import {getComments} from '../../store/film-data/selectors';

type Props = {
  currentScreen: string,
  currentFilm: Film,
}

function Tabs({currentScreen, currentFilm}: Props): JSX.Element {
  const comments = useSelector(getComments);

  if (!currentFilm) {
    return (
      <LoadingScreen />
    );
  }

  const {genre, release, description, rating, scoresCount, director, starring, runTime} = currentFilm;

  const commentsLength = comments.length;
  const middleCommentsLength = commentsLength / Count.CommentsColumns;

  switch (currentScreen) {
    case ScreenType.Details:
      return (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {starring.map((element, index) => {
                  if (index === starring.length - 1) {
                    return (element);
                  }

                  const key = `index-${element}`;

                  return (
                    <React.Fragment key={key} >
                      {element}, <br/>
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{`${Math.trunc(runTime/MINUTES_IN_HOURS)}h ${runTime % MINUTES_IN_HOURS}m`}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{release}</span>
            </p>
          </div>
        </div>
      );
    case ScreenType.Reviews:
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {comments.slice(0, middleCommentsLength + 1).map((comment) => (
              <Comment
                key={comment.id}
                userName={comment.userName}
                rating={comment.rating}
                text={comment.text}
                date={comment.date}
              />
            ))}
          </div>
          <div className="film-card__reviews-col">
            {comments.slice(middleCommentsLength + 1, commentsLength).map((comment) => (
              <Comment
                key={comment.id}
                userName={comment.userName}
                rating={comment.rating}
                text={comment.text}
                date={comment.date}
              />
            ))}
          </div>
        </div>
      );

    default:
      return (
        <>
          <div className="film-rating">
            <div className="film-rating__score">{rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{getGrade(rating)}</span>
              <span className="film-rating__count">{scoresCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{description}</p>
            <p className="film-card__director"><strong>Director: {director}</strong></p>

            <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
          </div>
        </>
      );
  }
}

export default Tabs;

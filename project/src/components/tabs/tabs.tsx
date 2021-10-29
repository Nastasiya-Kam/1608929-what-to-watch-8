import {ScreenType, MINUTES_IN_HOURS, Grade} from '../../const';
import {Film} from '../../types/films';

type Props = {
  currentScreen: string,
  film: Film,
}

const getGrade = (rating: number) => {
  if (rating < Grade.BAD.value) {
    return Grade.BAD.name;
  }

  if (rating < Grade.NORMAL.value && rating >= Grade.BAD.value) {
    return Grade.NORMAL.name;
  }

  if (rating < Grade.GOOD.value && rating >= Grade.NORMAL.value) {
    return Grade.GOOD.name;
  }

  if (rating < Grade.VERY_GOOD.value && rating >= Grade.GOOD.value) {
    return Grade.VERY_GOOD.name;
  }

  if (rating === Grade.AWESOME.value) {
    return Grade.AWESOME.name;
  }
};

function Tabs({currentScreen, film}: Props): JSX.Element {
  const {genre, release, description, rating, scoresCount, director, starring, runTime} = film;

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

                  return (
                    <>
                      {element}, <br/>
                    </>
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
      // TODO Каким образом деляться комментарии по колонкам? Пополам?
      // TODO Как комментарии "прикрепляются" к своему фильму?
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.</p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                <footer className="review__details">
                  <cite className="review__author">Bill Goodykoontz</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.</p>

                <footer className="review__details">
                  <cite className="review__author">Amanda Greever</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>
          </div>
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,2</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,6</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,0</div>
            </div>
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
            {/* // TODO Пока не очень ясно, как будет приходить description, чтобы его отрисовать тут */}
            <p>{description}</p>

            <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p className="film-card__director"><strong>Director: {director}</strong></p>

            <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
          </div>
        </>
      );
  }
}

export default Tabs;

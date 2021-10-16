type Film = {
  id: number,
  image: string,
  name: string,
  setActiveCardId: (a: number) => void;
}

function SmallFilmCard({id, image, name, setActiveCardId}: Film): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver = {() => setActiveCardId(id)}
    >
      <div className="small-film-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;

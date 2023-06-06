import style from "./Card.module.css";

const Card = ({ id, name, image, genres, rating }) => {
  return (
    <div className={style.card}>
      <div>
        <img className={style.imageCard} src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div className={style.genre}>
        {genres.map((genre, index) => {
          return <li key={index}>{genre.name}</li>;
        })}
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Card;

import style from "./CardsContainer.module.css";
import Card from "../Card/Card";

const CardsContainer = ({ showVideoGames }) => {
  return (
    <div className={style.container}>
      {showVideoGames.map((videoGame) => {
        return (
          <Card
            key={videoGame.id}
            id={videoGame.id}
            name={videoGame.name}
            image={videoGame.background_image}
            genres={videoGame.Genres}
            rating={videoGame.rating}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;

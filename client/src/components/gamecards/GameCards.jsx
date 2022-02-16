import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../../redux/actions/actions";
import GameCard from "./GameCard";
import "./gamecards.scss";

const GameCards = () => {
  let videogames = useSelector((state) => state.videogames);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGames());
  }, []);

  return (
    <div className="cardContainer">
      <div className="filters"></div>
      <div className="gameList">
        {videogames.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            img={game.img}
            genres={game.genres}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCards;

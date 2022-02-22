import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../../redux/actions/actions";
import Order from "../order/Order";
import GameCard from "./GameCard";
import "./gamecards.scss";

const GameCards = () => {
  let videogames = useSelector((state) => state.videogames);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  const [state, setState] = useState({
    paginaActual: 0,
  });

  const handlePrev = (event) => {
    if (state.paginaActual !== 0) {
      setState({ paginaActual: state.paginaActual - event.target.value });
    }
  };

  const handleNext = (event) => {
    if (state.paginaActual !== final.length - 1) {
      setState({
        paginaActual:
          parseInt(state.paginaActual) + parseInt(event.target.value),
      });
    }
  };

  let page1, page2, page3, page4, page5, page6, page7;
  page1 = videogames.slice(0, 15);
  page2 = videogames.slice(15, 30);
  page3 = videogames.slice(30, 45);
  page4 = videogames.slice(45, 60);
  page5 = videogames.slice(60, 75);
  page6 = videogames.slice(75, 80);
  page6 = videogames.slice(75, 80);
  page7 = videogames.slice(80, 100);
  let final = [page1, page2, page3, page4, page5, page6, page7];

  for (let i = final.length - 1; i > 0; i--) {
    if (!final[i].length) {
      final.pop();
    }
  }
  return (
    <div className="cardContainer">
      <div className="filters">
        <div className="pagination">
          <button value={1} onClick={handlePrev}>
            PREV
          </button>
          <button value={1} onClick={handleNext}>
            NEXT
          </button>
        </div>
      </div>
      <div className="order"></div>
      <div className="gameList">
        {final[state.paginaActual] &&
          final[state.paginaActual].map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              rating={game.rating}
              img={game.image}
              genres={
                game.Genres
                  ? game.Genres.map((g) => g.name)
                  : game.genres.map((g) => {
                      return g.name;
                    })
              }
            />
          ))}
      </div>
    </div>
  );
};

export default GameCards;

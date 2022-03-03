import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../../redux/actions/actions";
import Loading from "../loading/Loading";
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

  const handleOnclick = (e) => {
    if (e.target.value === "0") {
      setState({
        paginaActual: 0,
      });
    } else if (e.target.value === "1") {
      setState({
        paginaActual: 1,
      });
    } else if (e.target.value === "2") {
      setState({
        paginaActual: 2,
      });
    } else if (e.target.value === "3") {
      setState({
        paginaActual: 3,
      });
    } else if (e.target.value === "4") {
      setState({
        paginaActual: 4,
      });
    } else if (e.target.value === "5") {
      setState({
        paginaActual: 5,
      });
    } else if (e.target.value === "6") {
      setState({
        paginaActual: 6,
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

  console.log(final[state.paginaActual]);

  return (
    <div className="cardContainer">
      <div className="pagination">
        <button className="prev" value={1} onClick={handlePrev}>
          PREV
        </button>
        <button value="0" onClick={handleOnclick}>
          0
        </button>
        <button value="1" onClick={handleOnclick}>
          1
        </button>
        <button value="2" onClick={handleOnclick}>
          2
        </button>
        <button value="3" onClick={handleOnclick}>
          3
        </button>
        <button value="4" onClick={handleOnclick}>
          4
        </button>
        <button value="5" onClick={handleOnclick}>
          5
        </button>
        <button value="6" onClick={handleOnclick}>
          6
        </button>
        <button className="next" value={1} onClick={handleNext}>
          NEXT
        </button>
      </div>
      <div className="order"></div>
      <div className="gameList">
        {final[state.paginaActual].length === 0 ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
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
          ))
        )}
      </div>
    </div>
  );
};

export default GameCards;

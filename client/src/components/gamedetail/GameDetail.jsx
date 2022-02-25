import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import "./gamedetail.scss";
import webimg from "../../assets/web.png";
import redditimg from "../../assets/reddit-logo-16.png";

const DetailPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/home");
  };

  const game = useSelector((state) => state.gameDetail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  /*  console.log(game); */

  return (
    <div className="Container">
      <div className="imgbanner">
        <img className="imgAltern" src={game.additionalImg} alt="" />
        <h1>{game.name}</h1>

        <div className="moreInfo">
          <div className="released">
            <span>Released: {game.released}</span>
          </div>
          <div className="rating">
            <span>
              Rating:
              {game.rating < 1
                ? "⭐"
                : game.rating < 2
                ? "⭐⭐"
                : game.rating < 3
                ? "⭐⭐⭐"
                : game.rating < 4
                ? "⭐⭐⭐⭐"
                : "⭐⭐⭐⭐⭐"}
            </span>
          </div>
          <div className="metacritic">
            <span>Metacritics: {game.metacritic}</span>
          </div>
          <div className="platforms">
            <span>Platforms: {game.platforms?.map((p) => p).join(", ")}</span>{" "}
          </div>
          <div className="genres">
            <span>
              Genres:
              {game.Genres
                ? game.Genres?.map((e, i) => <div key={i}>{e.name}</div>)
                : game.genres?.map((e, i) => <div key={i}>{e}</div>)}
            </span>
          </div>
        </div>
      </div>

      <div className="ContainerBox">
        <div className="containerImg">
          <img
            src={game.image ? game.image : game.background_image}
            alt="img not found"
          />
        </div>
        <div className="containerDescr">
          <h1>Description</h1>
          <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
          <a className="website" href={game.website} target="_blank">
            Check their website!
            <img src={webimg} alt="" />
          </a>
          <a className="reddit" href={game.reddit} target="_blank">
            Check their Reddit!
            <img src={redditimg} alt="" />
          </a>
          <button onClick={handleOnClick}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";

const DetailPage = () => {
  /* let [apiData, updateapiData] = useState([]); */
  let { id } = useParams();
  const dispatch = useDispatch();
  /*  let api = `http://localhost:3001/videogames/${id}`;
  let { name, description, background_image } = apiData; */
  /*   let dispatch = useDispatch(); */
  /*   const regex = /<(?:.|\n)*?>/gm;*/

  /*   useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateapiData(data); // wait a little bit, untill our data it's fetch
    })();
  }, [api]);
 */
  /* const result = data.description.replace(reg  ex, ""); */
  let game = useSelector((state) => state.gameDetail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  console.log(game);

  return (
    <div>
      <h5>{game.name}</h5>
      <div className="container">{game.description}</div>
      <img src={game.background_image} alt="" />
    </div>
  );
};

export default DetailPage;

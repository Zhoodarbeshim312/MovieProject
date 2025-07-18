import { useDispatch } from "react-redux";
import "./TopRated.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { api_key } from "../../../API";
import Card from "../../ui/card/Card";
import { getMovie } from "../../../redux/productSlice";
const TopRated = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((s) => s.productApp);

  const getTopRated = (key) => {
    return async (dispatch) => {
      let get = await axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
      );
      let { results } = get.data;
      dispatch(getMovie(results));
    };
  };
  useEffect(() => {
    dispatch(getTopRated(api_key));
  }, []);
  return (
    <section id="topRated">
      <div className="container">
        <div className="topRated">
          {movie.map((el) => (
            <Card el={el} key={el.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;

import axios from "axios";
import "./Popular.scss";
import { useEffect } from "react";
import { getMovie } from "../../../redux/productSlice";
import { useDispatch } from "react-redux";
import { api_key } from "../../../API";
import { useSelector } from "react-redux";
import Card from "../../ui/card/Card";
const Popular = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((s) => s.productApp);
  const getPopular = (key) => {
    return async (dispatch) => {
      let get = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
      );
      let { results } = get.data;
      dispatch(getMovie(results));
    };
  };
  useEffect(() => {
    dispatch(getPopular(api_key));
  }, []);
  return (
    <section id="popular">
      <div className="container">
        <div className="popular">
          {movie.map((el) => (
            <Card el={el} key={el.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;

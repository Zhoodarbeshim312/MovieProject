import axios from "axios";
import "./Actors.scss";
import { getActor } from "../../../redux/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_key } from "../../../API";
import { useSelector } from "react-redux";
import user from "../../../assets/images/user.png";
const Actors = ({ kinoId }) => {
  const { actor } = useSelector((s) => s.productApp);

  const dispatch = useDispatch();
  const getActors = (key) => {
    return async (dispatch) => {
      let getActors = await axios(
        `https://api.themoviedb.org/3/movie/${kinoId}/credits?api_key=${key}&language=en-US`
      );
      let { cast } = getActors.data;
      dispatch(getActor(cast));
      console.log(cast);
    };
  };
  useEffect(() => {
    dispatch(getActors(api_key));
  }, []);
  return (
    <section id="actors">
      <div className="container">
        <h1>Starring</h1>
        <div className="actors">
          {actor.map((el) => (
            <div className="actors--card">
              {el.profile_path ? (
                <img
                  src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`}
                  alt="img"
                />
              ) : (
                <img src={user} alt="img" />
              )}
              <h2>{el.name}</h2>
              <p>{el.character}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actors;
//

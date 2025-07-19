import axios from "axios";
import "./Actors.scss";
import { getActor } from "../../../redux/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_key } from "../../../API";
import { useSelector } from "react-redux";
import user from "../../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
const Actors = ({ kinoId }) => {
  const { actor } = useSelector((s) => s.productApp);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const getActors = (key) => {
    return async (dispatch) => {
      let getActors = await axios(
        `https://api.themoviedb.org/3/movie/${kinoId}/credits?api_key=${key}&language=en-US`
      );
      let { cast } = getActors.data;
      dispatch(getActor(cast));
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
            <div key={el.id} className="actors--card">
              {el.profile_path ? (
                <img
                  onClick={() => nav(`/movieDetails/actorDetails/${el.id}`)}
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

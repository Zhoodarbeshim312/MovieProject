import axios from "axios";
import "./ActorsDetails.scss";
import { useDispatch } from "react-redux";
import { getActorDetails } from "../../../redux/productSlice";
import { useEffect } from "react";
import { api_key } from "../../../API";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ActorsDetails = () => {
  const { actorId } = useParams();
  const { actorDetails } = useSelector((s) => s.productApp);
  console.log(actorId);

  const dispatch = useDispatch();
  const getActors = (key) => {
    return async (dispatch) => {
      let get = await axios(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`
      );
      let { data } = get;
      dispatch(getActorDetails(data));
      console.log(data);
    };
  };
  useEffect(() => {
    dispatch(getActors(api_key));
  }, []);
  return (
    <section id="actorsDetails">
      <div className="container">
        <div className="actorsDetails">
          <img
            src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${actorDetails.profile_path}`}
            alt="img"
          />
          <div className="actorsDetails--text">
            <h1>{actorDetails.name}</h1>
            <p>{actorDetails.biography}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorsDetails;

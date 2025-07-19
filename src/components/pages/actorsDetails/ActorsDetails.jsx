import axios from "axios";
import "./ActorsDetails.scss";
import { useDispatch } from "react-redux";
import { getActorDetails } from "../../../redux/productSlice";
import { useEffect } from "react";
import { api_key } from "../../../API";
import { useParams } from "react-router-dom";
const ActorsDetails = () => {
  const { actorId } = useParams();
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
        <div className="actorsDetails"></div>
      </div>
    </section>
  );
};

export default ActorsDetails;

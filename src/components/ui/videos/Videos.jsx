import axios from "axios";
import "./Videos.scss";
import { getVidoe } from "../../../redux/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_key } from "../../../API";
import { useSelector } from "react-redux";
const Videos = ({ videoId }) => {
  const { video } = useSelector((s) => s.productApp);
  const dispatch = useDispatch();
  const getVideos = (key) => {
    return async (dispatch) => {
      let get = await axios(
        `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${key}&language=en-US`
      );
      let { results } = get.data;
      dispatch(getVidoe(results));
    };
  };
  useEffect(() => {
    dispatch(getVideos(api_key));
  }, []);
  return (
    <section id="videos">
      <div className="container">
        <div className="videos">
          {video.map((el, idx) => (
            <div key={el.id || idx} className="videos--card">
              <iframe
                src={`https://www.youtube.com/embed/${el.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h1>
                {" "}
                {el.name.length > 25
                  ? el.name.slice(0, 25) + "..."
                  : el.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;

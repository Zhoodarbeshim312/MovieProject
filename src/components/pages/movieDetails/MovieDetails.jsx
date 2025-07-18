import { useSelector } from "react-redux";
import "./MovieDetails.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getDetails } from "../../../redux/productSlice";
import { useEffect } from "react";
import { api_key } from "../../../API";
import { useParams } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdFavorite } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import Actors from "../../ui/actors/Actors";
const MovieDetails = () => {
  const getColor = (percentage) => {
    if (percentage >= 70) return "#21d07a";
    if (percentage >= 40) return "#d2d531";
    return "#db2360";
  };
  const { details } = useSelector((s) => s.productApp);
  let { movieId } = useParams();
  const dispatch = useDispatch();
  const getMovieDEtails = (key) => {
    return async (dispatch) => {
      let get = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
      );
      let { data } = get;
      dispatch(getDetails(data));
    };
  };
  useEffect(() => {
    dispatch(getMovieDEtails(api_key));
  }, []);
  return (
    <>
      <section
        style={{
          minHeight: "78vh",
          backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0.3) 80%),
      url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})
    `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        id="movieDetails"
      >
        <div className="container">
          <div className="movieDetails">
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${details.poster_path}`}
              alt="img"
            />
            <div className="movieDetails--text">
              <h1>
                {details.title} <span>({details.release_date})</span>
              </h1>
              <div className="movieDetails--text__links">
                <p>
                  {details.release_date} ({details.origin_country})
                </p>
                <RxDotFilled />
                <p>
                  {Math.floor(details.runtime / 60)}h {details.runtime % 60}min
                </p>
              </div>
              <div className="movieDetails--text__rating">
                <h4>
                  <CircularProgressbar
                    value={Math.round(details.vote_average * 10)}
                    text={`${Math.round(details.vote_average * 10)}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: getColor(
                        Math.round(details.vote_average * 10)
                      ),
                      trailColor: "#204529",
                      textSize: "30px",
                    })}
                  />
                </h4>
                <button>
                  <MdFavorite />
                </button>
                <button>
                  <IoBookmark />
                </button>
              </div>
              <h3>« {details.tagline} »</h3>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </section>
      <Actors kinoId={movieId} />
    </>
  );
};

export default MovieDetails;

import "./Card.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Card = ({ el }) => {
  const getColor = (percentage) => {
    if (percentage >= 70) return "#21d07a";
    if (percentage >= 40) return "#d2d531";
    return "#db2360";
  };
  const nav = useNavigate();
  return (
    <div className="card">
      <img
        onClick={() => nav(`/movieDetails/${el.id}`)}
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
        alt="img"
      />
      <div className="card--text">
        <div className="card--text__info">
          <h1>
            {el.title.length > 12 ? el.title.slice(0, 12) + "..." : el.title}
          </h1>
          <p>{el.release_date}</p>
        </div>
        <span>
          <CircularProgressbar
            value={Math.round(el.vote_average * 10)}
            text={`${Math.round(el.vote_average * 10)}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: getColor(Math.round(el.vote_average * 10)),
              trailColor: "#204529",
              textSize: "30px",
            })}
          />
        </span>
      </div>
    </div>
  );
};

export default Card;

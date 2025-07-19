import "./Card.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ el }) => {
  const getColor = (percentage) => {
    if (percentage >= 70) return "#21d07a";
    if (percentage >= 40) return "#d2d531";
    return "#db2360";
  };
  const { theme } = useSelector((s) => s.productApp);
  const nav = useNavigate();
  return (
    <div
      style={{
        background: theme === "dark" ? "#121212" : "white",
      }}
      className="card"
    >
      <img
        onClick={() => nav(`/movieDetails/${el.id}`)}
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
        alt="img"
      />
      <div className="card--text">
        <div className="card--text__info">
          <h1
            style={{
              color: theme === "dark" ? "white" : "#121212",
            }}
          >
            {el.title.length > 12 ? el.title.slice(0, 11) + "..." : el.title}
          </h1>
          <p>{el.release_date}</p>
        </div>
        <div className="card--text__btns">
          <span>
            <CircularProgressbar
              value={Math.round(el.vote_average * 10)}
              text={`${Math.round(el.vote_average * 10)}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: getColor(Math.round(el.vote_average * 10)),
                trailColor: "#204529",
                textSize: "35px",
              })}
            />
          </span>
          <button>
            <MdFavorite />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

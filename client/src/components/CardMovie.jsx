import {
  faCalendarDays,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveFilm, toggleTrailer } from "../reducers/modalTrailer";
import { convertMinutesToHoursAndMinutes } from "../utils/functionCommon";
import { fetchFilmDetail } from "../reducers/apiFilmDetail";

const CardMovie = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="item-container">
      <div className="item-img">
        <img className="img-card" src={item.image} />
      </div>
      <div className="item-name-rating">
        <p className="item-name">{item.nameFilm.toUpperCase()}</p>
        {/* <p className="item-rating">
                    <FontAwesomeIcon className="card-icon" icon={faStar} /> 
                    9.5
                </p> */}
      </div>
      <div className="item-typeof">{item.nameTypeFilm}</div>
      <div className="item-date-duration">
        <p>
          <FontAwesomeIcon className="card-icon" icon={faCalendarDays} />
          {item.releaseDate}
        </p>
        <p>
          <FontAwesomeIcon className="card-icon" icon={faClock} />
          {convertMinutesToHoursAndMinutes(item.time)}
        </p>
      </div>
      <button
        className="book-btn"
        onClick={() => {
          navigate(`/moviesDetail?id=${item.id}`);
          dispatch(fetchFilmDetail());
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Chi tiết
      </button>
      <button
        className="book-btn book-btn-traler"
        onClick={() => {
          dispatch(toggleTrailer());
          dispatch(saveFilm(item));
        }}
      >
        Trailer
      </button>
    </div>
  );
};

export default CardMovie;

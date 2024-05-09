import {
  faCalendarDays,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertMinutesToHoursAndMinutes } from "../../../utils/functionCommon";

const AdminCardMovie = ({ item }) => {
  return (
    <div className="item-container item-admin">
      <div className="item-img">
        <img className="img-card" src={item.image} />
      </div>
      <div className="item-name-rating">
        <p className="item-name">{item.nameFilm}</p>
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
      <button className="book-btn">Sửa</button>
      <button className="book-btn book-btn-traler">Xoá</button>
    </div>
  );
};

export default AdminCardMovie;

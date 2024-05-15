import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertMinutesToHoursAndMinutes } from "../../../utils/functionCommon";
import { useDispatch, useSelector } from "react-redux";
import { deleteFilms } from "../../../reducers/apiFilms";
import { showDialog } from "../../../reducers/dialogAlert";
import { useEffect, useState } from "react";

const AdminCardMovie = ({ item, onEdit }) => {
  const dispatch = useDispatch();
  const [deleteFilm, setDeleteFilm] = useState();
  const confirm = useSelector((state) => state.dialogAlert.confirm);

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteFilms({ id: deleteFilm }));
    }
  }, [confirm]);

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
      <button
        className="book-btn"
        onClick={() => {
          onEdit(item);
        }}
      >
        Sửa
      </button>
      <button
        className="book-btn book-btn-traler"
        onClick={() => {
          dispatch(showDialog());
          setDeleteFilm(item.id);
        }}
      >
        Xoá
      </button>
    </div>
  );
};

export default AdminCardMovie;

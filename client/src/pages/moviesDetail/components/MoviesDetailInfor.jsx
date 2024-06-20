import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  faCalendarDays,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollectionTime from "../../../components/CollectionTime";
import { useDispatch, useSelector } from "react-redux";
import { saveFilm, toggleTrailer } from "../../../reducers/modalTrailer";
import { useEffect, useState } from "react";
import { convertMinutesToHoursAndMinutes } from "../../../utils/functionCommon";
import { fetchFilmDetail } from "../../../reducers/apiFilmDetail";
import { fetchCrWithFilm } from "../../../reducers/apiCrWithFilm";
import Loading from "../../../components/Loading";
import axios from "axios";

const MoviesDetailInfor = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFilmDetail());
  }, [dispatch]);

  const apiFilmDetail = useSelector((state) => state.apiFilmDetail.films);
  const statusFilmDetail = useSelector((state) => state.apiFilmDetail.status);
  const [grouped, setGrouped] = useState({});

  useEffect(() => {
    dispatch(fetchCrWithFilm(apiFilmDetail.id));
  }, [apiFilmDetail]);

  const crWithFilm = useSelector((state) => state.apiCrWithFilm.CrWithFilm);
  const statusCrWithFilm = useSelector((state) => state.apiCrWithFilm.status);
  
  // gôm nhóm các giờ chiếu cho các phòng chiếu
  const getNameCinemaRoom = async (idCinemaRoom) => {
    const res = await axios.get(
      `http://localhost:8000/api/cinemaRoom/getDetail?id=${idCinemaRoom}`
    );
    return res.data.data.nameCinemaRoom;
  };
  
  useEffect(() => {
    if (crWithFilm.length > 0) {
      const groupByCinemaRoomId = async (array) => {
        let grouped = {};
        // Sử dụng Promise.all để chờ cho tất cả các cuộc gọi API hoàn thành
        await Promise.all(
          array.map(async (item) => {
            const detail = await getNameCinemaRoom(item.cinemaRoomId);
            const key = `Phòng ${detail} ${item.dateWatch}`;
            if (!grouped[key]) {
              grouped[key] = [];
            }
            grouped[key].push(item);
          })
        );
        setGrouped(grouped);
      };
      groupByCinemaRoomId(crWithFilm);
    } else {
      setGrouped({});
    }
  }, [crWithFilm]);

  return (
    <Container>
      {statusFilmDetail == "loading" && (
        <div className="loading-data">
          <Loading />
        </div>
      )}

      <Row>
        {statusFilmDetail == "succeeded" && (
          <Col className="infor-img-general">
            <img className="infor-img" src={apiFilmDetail.image} />
            <div className="infor-general">
              <div className="general-title-rating">
                <p className="general-title">
                  {apiFilmDetail.nameFilm.toUpperCase()}
                </p>
              </div>
              <div className="general-showtime-time">
                <p>
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faCalendarDays}
                  />
                  {apiFilmDetail.releaseDate} -&nbsp;
                  <FontAwesomeIcon className="card-icon" icon={faClock} />
                  {convertMinutesToHoursAndMinutes(apiFilmDetail.time)}
                </p>
              </div>
              <p className="general-content">
                <span>Thể loại: &nbsp;</span>
                {apiFilmDetail.nameTypeFilm}
              </p>
              <p className="general-content">
                <span>Tác giả: &nbsp;</span>
                {apiFilmDetail.author}
              </p>
              <p className="general-content">
                <span>Diễn viên chính: &nbsp;</span>
                {apiFilmDetail.actor}
              </p>
              <button
                className="general-trailer-btn"
                onClick={() => {
                  dispatch(toggleTrailer());
                  dispatch(saveFilm(apiFilmDetail));
                }}
              >
                Trailer
              </button>
            </div>
          </Col>
        )}
      </Row>
      <Row>
        <p className="infor-descri-title">Tóm tắt</p>
        {statusFilmDetail == "loading" && (
          <div className="loading-data">
            <Loading />
          </div>
        )}
        {statusFilmDetail == "succeeded" && (
          <p className="infor-descri">{apiFilmDetail.description}</p>
        )}
      </Row>
      <CollectionTime
        filmDetail={apiFilmDetail}
        grouped={grouped}
        statusCrWithFilm={statusCrWithFilm}
      />
    </Container>
  );
};

export default MoviesDetailInfor;

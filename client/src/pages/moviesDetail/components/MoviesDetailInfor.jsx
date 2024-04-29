import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faCalendarDays, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollectionTime from '../../../components/CollectionTime';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilm, toggleTrailer } from '../../../reducers/modalTrailer';
import { useEffect, useState } from 'react';
import { convertMinutesToHoursAndMinutes } from '../../../utils/functionCommon';
import { fetchFilmDetail } from '../../../reducers/apiFilmDetail';
import { fetchCrWithFilm } from '../../../reducers/apiCrWithFilm';
import Loading from '../../../components/Loading';
import axios from 'axios';

const MoviesDetailInfor = () => {
    const dispatch = useDispatch();
    const filmDetail = useSelector((state) => state.filmDetail.films);
    const statusFilmDetail = useSelector((state) => state.filmDetail.status);
    const [grouped, setGrouped] = useState({});

    useEffect(() => {
        dispatch(fetchFilmDetail());
    }, [dispatch]);

    const crWithFilm = useSelector((state) => state.apiCrWithFilm.CrWithFilm);
    const statusCrWithFilm = useSelector((state) => state.apiCrWithFilm.status);
    
    useEffect(() => {
        dispatch(fetchCrWithFilm(filmDetail.id));
    }, [filmDetail]);

    // gôm nhóm các giờ chiếu cho các phòng chiếu
    const getNameCinemaRoom = async (idCinemaRoom) => {
        const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getDetail?id=${idCinemaRoom}`);
        return res.data.data.nameCinemaRoom;
    }

    useEffect(() => {
        if(crWithFilm.length > 0) {
            const groupByCinemaRoomId = async (array) => {
                let grouped = {};
                // Sử dụng Promise.all để chờ cho tất cả các cuộc gọi API hoàn thành
                await Promise.all(array.map(async (item) => {
                    const detail = await getNameCinemaRoom(item.cinemaRoomId);
                    const key = `Phòng ${detail} ${item.dateWatch}`;
                    if (!grouped[key]) {
                        grouped[key] = [];
                    }
                    grouped[key].push(item);
                }));
                setGrouped(grouped);
            }
            groupByCinemaRoomId(crWithFilm);
        } else {
            setGrouped({});
        }
    }, [crWithFilm]);
        
    return(
        <Container>
            {statusFilmDetail == "loading" && (
                <div className="loading-data">
                    <Loading/>
                </div>
            )}

            <Row>
                {statusFilmDetail == "succeeded" && (
                    <Col className='infor-img-general'>
                        <img
                            className="infor-img"
                            src={filmDetail.image}
                        />
                        <div className='infor-general'>
                            <div className='general-title-rating'>
                                <p className='general-title'>{filmDetail.nameFilm}</p>
                                {/* <p className="general-rating">
                                    <FontAwesomeIcon className="card-icon" icon={faStar} /> 
                                    9.5
                                </p> */}
                            </div>
                            <div className='general-showtime-time'>
                                <p>
                                    <FontAwesomeIcon className="card-icon" icon={faCalendarDays} />
                                    {filmDetail.releaseDate} -&nbsp;
                                    <FontAwesomeIcon className="card-icon" icon={faClock} />
                                    {convertMinutesToHoursAndMinutes(filmDetail.time)}
                                </p>
                            </div>
                            <p className='general-content'>
                                <span>
                                    Thể loại: &nbsp;
                                </span>
                                {filmDetail.nameTypeFilm}
                            </p>
                            <p className='general-content'>
                                <span>
                                    Tác giả: &nbsp;
                                </span>
                                {filmDetail.author}
                            </p>
                            <p className='general-content'>
                                <span>
                                    Diễn viên chính: &nbsp;
                                </span>
                                {filmDetail.actor}
                            </p>
                            <button className='general-trailer-btn'
                                onClick={() => {
                                    dispatch(toggleTrailer());
                                    dispatch(saveFilm(filmDetail));
                                }}
                            >
                                Trailer
                            </button>
                        </div>
                    </Col>
                )
                }
            </Row>
            <Row>
                <p className='infor-descri-title'>
                    Tóm tắt
                </p>
                {statusFilmDetail == "loading" && (
                    <div className="loading-data">
                        <Loading/>
                    </div>
                )}
                {statusFilmDetail == "succeeded" && (
                    <p className='infor-descri'> 
                        {filmDetail.description}
                    </p>
                )}
            </Row>
            <CollectionTime filmDetail={filmDetail} grouped={grouped} statusCrWithFilm={statusCrWithFilm} />
        </Container>
    )
}

export default MoviesDetailInfor;
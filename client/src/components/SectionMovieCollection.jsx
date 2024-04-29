import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import CollectionTime from './CollectionTime';
import { useDispatch } from "react-redux";
import { saveFilm, toggleTrailer } from "../reducers/modalTrailer";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SectionMovieCollection = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // cách xử lý giống hàm reducer apiCrWithFilm, vì đây fetch calendarRelease cho từng films nên không dùng reducer được , vì reducer là để dùng chung 
    const [grouped, setGrouped] = useState({});
    const [crWithFilm, setCrWithFilm] = useState({});
    const [statusCrWithFilm, setStatusCrWithFilm] = useState("loading");

    useEffect(() => {
        const getEachCrWithFim = async () => {
            const res = await axios.get(`http://localhost:8000/api/calendarRelease/getAllWithFilmId?filmId=${item.id}`);
            setCrWithFilm(res.data.all);
            setStatusCrWithFilm("succeeded");
        }
        getEachCrWithFim();
    }, []);
    //======================================

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
        <Row className='movies-collection-item'>
            <Col sm={12} md={4} className='collection-item-card'>
                <div className='collection-item-container'>
                    <img 
                        src={item.image}
                    />
                    <p className='collection-item-title'>
                        {item.nameFilm}
                    </p>
                    <div className='collection-item-btn-container'>
                        <button className='collection-item-btn'
                            onClick={() => navigate(`/moviesDetail?id=${item.id}`)}
                        >
                            Chi tiết
                        </button>
                        <button className='collection-item-btn'
                            onClick={() => {
                                dispatch(toggleTrailer());
                                dispatch(saveFilm(item));
                            }}
                        >
                            Trailer
                        </button>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={8}>
                <CollectionTime filmDetail={item} grouped={grouped} statusCrWithFilm={statusCrWithFilm} />
            </Col>
        </Row>
    )
}

export default SectionMovieCollection;
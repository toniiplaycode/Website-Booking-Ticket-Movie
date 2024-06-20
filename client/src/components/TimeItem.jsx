import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hanleSelectedCrWithFilm } from "../reducers/selectedCrWithFilm";
import { hanleSelectedFilm } from "../reducers/selectedPurchaseFilm";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleClearSelectedSeats } from "../reducers/selectedSeats";

const TimeItem = ({ name, item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filmDetail, setFilmDetail] = useState();

    const selectedCrWithFilm = useSelector((state) => state.selectedCrWithFilm.selectedCrWithFilm);

    useEffect(()=>{
        const getFilmDetail = async () => {
            const res = await axios.get(`http://localhost:8000/api/film/getDetail?id=${item[0].filmId}`);
            setFilmDetail(res.data.data[0]);
        }
        getFilmDetail();
    }, [])

    const isNotRoutePurchase = () => {
        return !window.location.pathname.endsWith("/purchase");
    }
    
    return(
        <div className='time-movie-container'>
            <p className='each-date'>{name}</p>
            {item.map((item, index) =>
                {
                    let isActive = selectedCrWithFilm.filmId == item.filmId && selectedCrWithFilm.cinemaRoomId == item.cinemaRoomId && selectedCrWithFilm.dateWatch == item.dateWatch && selectedCrWithFilm.showTimeStart == item.showTimeStart ? "each-btn-common active" : "each-btn-common";
                    return <button className={isActive}
                            onClick={()=>{
                                dispatch(hanleSelectedCrWithFilm(item));
                                isNotRoutePurchase() && dispatch(hanleSelectedFilm(filmDetail));
                                dispatch(handleClearSelectedSeats());   
                                navigate("/purchase");
                             }
                            }
                        >
                            {item.showTimeStart}
                        </button>
                }
            )}
        </div>
    )
}

export default TimeItem;
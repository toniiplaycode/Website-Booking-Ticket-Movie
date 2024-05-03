import { useEffect } from "react";
import { formatMoney } from "../../../utils/functionCommon";
import axios from "axios";
import { useState } from "react";

const PurchasedTicket = ({ item }) => {
    const [filmDetail, setFilmDetail] = useState();

    console.log(item)

    useEffect(()=>{
        const getFilmDetail = async () => {
            const res = await axios.get(`http://localhost:8000/api/film/getDetail?id=${item.filmId}`);
            setFilmDetail(res.data.data[0]);
        }
        getFilmDetail();
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        
        const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
        
        return formattedDate;
    }

    // console.log(item);

    return(
        <div className="purchased-ticket-container">
            <div className="purchased-ticket-infor">
                <p className="ticket-infor-item">
                    <span>Phim: </span> {filmDetail && <>{filmDetail.nameFilm}</>}
                </p>
                <p className="ticket-infor-item">
                    <span>Mã vé: </span> {item.id}
                </p>
                <p className="ticket-infor-item">
                    <span>Ghế: </span> {item.seat}
                </p>
                <p className="ticket-infor-item">
                    <span>Rạp: </span> {item.nameCinema}    
                </p>
                <p className="ticket-infor-item">
                    <span>Địa điểm: </span> {item.address}
                </p>
                <p className="ticket-infor-item">
                    <span>Phòng chiếu: </span> {item.nameCinemaRoom}
                </p>
                <p className="ticket-infor-item">
                    <span>Ngày chiếu: </span> {item.dateWatch}
                </p>
                <p className="ticket-infor-item">
                    <span>Giờ chiếu: </span> {item.showTimeStart}
                </p>
                <p className="ticket-infor-item">
                    <span>Ngày mua vé: </span> {formatDate(item.createdAt)}
                </p>
                <p className="ticket-infor-item">
                    <span>Thanh toán: </span> {item.namePaymentMethod}
                </p>
                <p className="ticket-infor-item">
                    <span>Tổng giá: </span> {formatMoney(item.total)}
                </p>
            </div>
            <div className="ticket-infor-item-img-container">
                <img 
                    className="ticket-infor-item-img"
                    src={filmDetail && `${filmDetail.image}`}
                />
            </div>
        </div>
    )
}

export default PurchasedTicket;
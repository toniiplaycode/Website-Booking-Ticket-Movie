import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendarDays, faClock, faCouch, faCreditCard, faDollar, faLocationDot, faMoneyBill1Wave, faTicket, faTv } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { convertMinutesToHoursAndMinutes, formatMoney } from "../../../utils/functionCommon";
import { fetchCinemaRoomDetail } from "../../../reducers/apiCinemaRoomDetail";
import { useEffect } from "react";
import { fetchCinemaDetail } from "../../../reducers/apiCinemaDetail";

const TicketBill = ({ selectedPayment }) => {
    const dispatch = useDispatch();
    let selectedFilm = useSelector((state) => state.selectedPurchaseFilm.selectedFilm);

    const selectedCrWithFilm = useSelector((state) => state.selectedCrWithFilm.selectedCrWithFilm);
    const selectedSeats = useSelector((state) => state.selectedSeats.selectedSeats);
    const selectedCinemaRoomDetail = useSelector((state) => state.apiCinemaRoomDetail.CinemaRoomDetail);
    const selectedCinemaDetail = useSelector((state) => state.apiCinemaDetail.CinemaDetail);

    useEffect(()=>{
        dispatch(fetchCinemaRoomDetail(selectedCrWithFilm.cinemaRoomId))
    }, [selectedCrWithFilm]);
    
    useEffect(()=>{
        if(selectedCinemaRoomDetail) dispatch(fetchCinemaDetail(selectedCinemaRoomDetail.CinemaId));
    }, [selectedCinemaRoomDetail])

    return(
        <div className="purchase-ticket-summary">
            <div className="ticket-summary-img-nametime">
                {selectedFilm.image && (
                    <img 
                        src={selectedFilm.image}
                    />
                )}
                <div className="summary-nametime">
                    <p className="summary-name">
                        {selectedFilm.nameFilm}
                    </p>
                    <p className="summary-time">
                        {selectedFilm.time && (
                            <>
                                <FontAwesomeIcon className="ticket-summary-icon" icon={faClock} /> &nbsp;
                                {convertMinutesToHoursAndMinutes(selectedFilm.time)}
                            </>
                        )
                        }
                    </p>
                </div>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faBuilding} />
                    Rạp
                </p>
                {selectedCinemaDetail && Object.keys(selectedCinemaDetail).length !== 0 ? (
                    <p className="summary-content">{selectedCinemaDetail.nameCinema}</p>
                ) :  "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faLocationDot} />
                    Địa chỉ
                </p>
                {selectedCinemaDetail && Object.keys(selectedCinemaDetail).length !== 0 ? (
                    <p className="summary-content">{selectedCinemaDetail.address}</p>
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCalendarDays} />
                    Ngày chiếu
                </p>
                {selectedCrWithFilm.dateWatch ? (
                    <p className="summary-content">{selectedCrWithFilm.dateWatch}</p>
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faClock} />
                    Giờ chiếu
                </p>
                {selectedCrWithFilm.showTimeStart ? (
                    <p className="summary-content">{selectedCrWithFilm.showTimeStart}</p>
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faTv} />
                    Phòng chiếu
                </p>
                {selectedCinemaRoomDetail ? (
                    <p className="summary-content">{selectedCinemaRoomDetail.nameCinemaRoom}</p>
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faMoneyBill1Wave} />
                    Giá vé
                </p>
                <p className="summary-content">{selectedFilm.price > 0 ? formatMoney(selectedFilm.price) : "..."}</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faTicket} />
                    Số lượng vé
                </p>
                {selectedSeats.length > 0 ? (
                    <p className="summary-content">{selectedSeats.length}</p>   
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCouch} />
                    Số ghế
                </p>
                {selectedSeats.length > 0 ? (
                    <p className="summary-content">{selectedSeats.join(", ")}</p>   
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCreditCard} />
                    Phương thức thanh toán
                </p>
                {selectedPayment ? (
                    <p className="summary-content">{selectedPayment.namePaymentMethod}</p>
                ) : "..."}
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faDollar} />
                    Tổng giá
                </p>
                <p className="summary-content">{(selectedFilm.price > 0 && selectedSeats.length > 0) ? formatMoney(selectedFilm.price * selectedSeats.length) : "..."}</p>
            </div>
            <div className="ticket-summary-btn-container">
                <button>
                    MUA VÉ
                </button>
            </div>
        </div>
    )
}

export default TicketBill;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faCouch, faCreditCard, faDollar, faLocationDot, faMoneyBill1Wave, faTicket, faTv } from "@fortawesome/free-solid-svg-icons";

const TicketBill = () => {
    return(
        <div className="purchase-ticket-summary">
            <div className="ticket-summary-img-nametime">
                <img 
                    src="./images/imgCard.jpg"
                />
                <div className="summary-nametime">
                    <p className="summary-name">
                        Kẻ ẩn danh
                    </p>
                    <p className="summary-time">
                        2h 45m
                    </p>
                </div>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faLocationDot} />
                    Đại điểm
                </p>
                <p className="summary-content">Cần Thơ</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCalendarDays} />
                    Ngày chiếu
                </p>
                <p className="summary-content">10 tháng 4, 2024</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faClock} />
                    Giờ chiếu
                </p>
                <p className="summary-content">2h30 PM</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faTv} />
                    Phòng chiếu
                </p>
                <p className="summary-content">Phòng 1</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faMoneyBill1Wave} />
                    Giá vé
                </p>
                <p className="summary-content">60.000đ</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faTicket} />
                    Số lượng vé
                </p>
                <p className="summary-content">2</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCouch} />
                    Số ghế
                </p>
                <p className="summary-content">A1, A2</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faCreditCard} />
                    Phương thức thanh toán
                </p>
                <p className="summary-content">Momo</p>
            </div>
            <div className="ticket-summary-content">
                <p className="summary-content-title">
                    <FontAwesomeIcon className="ticket-summary-icon" icon={faDollar} />
                    Tổng giá
                </p>
                <p className="summary-content">120.000đ</p>
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
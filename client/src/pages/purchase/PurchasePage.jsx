import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import LocationSelect from "../../components/LocationSelect";
import CollectionTime from "../../components/CollectionTime";
import CardMovieCollection from "../../components/CardMovieCollection";
import CardMovie from "../../components/CardMovie";
import PurchaseFilmCard from "./components/PurchaseFilmCard";
import { faCalendarDays, faClock, faCouch, faCreditCard, faDollar, faLocationDot, faMoneyBill1Wave, faTicket, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeatSelect from "./components/SeatSelect";

const PurchasePage = () => {
    const selected = true;    

    return(
        <Container>
            <Row>
                <Col lg={8}>
                    <LocationSelect/>
                    <CollectionTime/>
                    <p className="purchase-select-film-title">Chọn phim</p>
                    <div className="purchase-select-film">
                        <PurchaseFilmCard selected={selected}/>
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                    </div>
                    <p className="purchase-select-film-title">Chọn ghế</p>
                    <SeatSelect/>
                </Col>
                <Col lg={4}>
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
                </Col>
            </Row>
        </Container>
    )
}

export default PurchasePage;
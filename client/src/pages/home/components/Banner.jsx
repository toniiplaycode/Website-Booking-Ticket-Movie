import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <Row className="banner-container">
                <Col xl="6" className="banner-text text-center text-xl-start">
                    <h1 className="banner-title">
                        Đặt mua vé xem phim tại <span className="name-cinema">FANSTATIC</span>
                    </h1>
                    <p>
                        Mua vé online, trải nghiệm phim hay
                    </p>
                    <p>
                        Đặt vé an toàn trên FANTASTIC
                    </p>
                    <p>                    
                        Tha hồ chọn chỗ ngồi.
                    </p>
                    <p> 
                        Lịch sử đặt vé được lưu lại ngay
                    </p>
                    <button className="banner-btn-order"
                        onClick={() => navigate('/purchase')}
                    >
                        Đặt vé ngay
                    </button>
                </Col>
                <Col xl="6" className="banner-img">
                    <img 
                        src="/images/banner.jpg"
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default Banner;
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

const Introduce = () => {
    return(
        <Container className="introduce-container"> 
            <Row>
                <Col className="introduce-title-container">
                    <p className="introduce-question">
                        Tại <span className="name-cinema">FANTASTIC</span> có gì ?
                    </p>
                </Col>
            </Row>
            <Row className="introduce-content">
                <Col lg={6}>
                    <img 
                        className="introduce-img"
                        src="./images/imgIntroduce1.jpg"
                    />
                </Col>
                <Col lg={6} className="introduce-text">
                    <p className="introduce-icon-container">
                        <FontAwesomeIcon className="introduce-icon" icon={faVideo} />
                    </p>
                    <p className="introduce-text-title">
                        Trải nghiệm điện ảnh tuyệt vời
                    </p>
                    <p className="introduce-text-content">
                        Đắm chìm trong hình ảnh tuyệt đẹp và âm thanh trong trẻo, khi công nghệ IMAX tiên tiến của chúng tôi đưa bạn trực tiếp vào trung tâm của hành động. Với màn hình vượt ra ngoài tầm nhìn ngoại vi của bạn, mọi khung hình đều trở nên sống động với độ sáng tuyệt vời.
                    </p>
                </Col>
            </Row>
            <Row className="introduce-content reverse">
                <Col lg={6} className="introduce-text">
                    <p className="introduce-icon-container">
                        <FontAwesomeIcon className="introduce-icon" icon={faMusic} />
                    </p>
                    <p className="introduce-text-title">
                        Tận hưởng FANTASTIC
                    </p>
                    <p className="introduce-text-content">
                        Trải nghiệm âm thanh chưa từng có với FANTASTIC, công nghệ âm thanh chuẩn mực đưa bạn vào một hành trình âm thanh đắm chìm. Với các vật thể âm thanh di chuyển liền mạch quanh rạp, bạn sẽ được hòa vào trung tâm của mọi khung cảnh, khiến bạn trở thành một phần không thể thiếu của rạp.
                    </p>
                </Col>
                <Col lg={6}>
                    <img 
                        className="introduce-img"
                        src="./images/imgIntroduce2.jpg"
                    />
                </Col>
            </Row>
            <Row className="introduce-content">
                <Col lg={6}>
                    <img 
                        className="introduce-img"
                        src="./images/imgIntroduce3.jpg"
                    />
                </Col>
                <Col lg={6} className="introduce-text">
                    <p className="introduce-icon-container">
                        <FontAwesomeIcon className="introduce-icon" icon={faBurger} />
                    </p>
                    <p className="introduce-text-title">
                        Các món ăn ngon 
                    </p>
                    <p className="introduce-text-content">
                        Tại rạp chiếu phim của chúng tôi, chúng tôi mang trải nghiệm xem phim của bạn ra ngoài màn hình bằng cách cung cấp một loạt các món ăn ngon tại quầy giảm giá của chúng tôi. Từ bỏng ngô tươi phết bơ, món burger với sốt phô mai thơm ngon, cho đến món hotdog sành điệu và nhiều loại đồ uống giải khát, quầy nhượng quyền của chúng tôi là thiên đường ẩm thực cho những người đam mê điện ảnh.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Introduce;
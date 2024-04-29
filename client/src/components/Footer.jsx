import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
        <Container>
            <Row className='footer-container'>
                <Col lg={2}  className='footer-logo'>
                    <img 
                        src="/images/DNC.png"
                        className="logo"
                    />
                </Col>
                <Col lg={3} className='footer-conent'>
                    <p className='conent-title'>
                        Giảng viên hướng dẫn
                    </p>
                    <p>
                        Thầy Đoàn Hoà Minh
                    </p>
                </Col>
                <Col lg={3} className='footer-conent'>
                    <p className='conent-title'>
                        Giảng viên phản biện
                    </p>
                    <p>
                        Thầy Trương Hùng Chen
                    </p>
                </Col>
                <Col lg={4} className='footer-conent footer-flex-more'>
                    <p className='conent-title'>
                        Sinh viên thực hiện đồ án
                    </p>
                    <p>
                        Lê Thanh Toàn 
                        Huỳnh Khánh Trân
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
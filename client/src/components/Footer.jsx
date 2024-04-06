import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
        <Container>
            <Row className='footer-container'>
                <Col lg={4}  className='footer-logo'>
                    <img 
                        src="/images/logo.png"
                        className="logo"
                    />
                    <span className="text-logo">
                            FANTASTIC
                    </span>
                </Col>
                <Col lg={4} className='footer-conent'>
                    <p className='conent-title'>
                        Các địa chỉ rạp phim
                    </p>
                    <p>
                        123/5 Nguyễn Văn Cừ, Ninh Kiều, Cần thơ
                    </p>
                    <p>
                        345/6 Hoàng Sa, Quận 1, HCM
                    </p>
                </Col>
                <Col lg={4} className='footer-conent'>
                    <p className='conent-title'>
                        Sinh viên thực hiện đồ án
                    </p>
                    <p>
                        Lê Thanh Toàn
                    </p>
                    <p>
                        Huỳnh Khánh Trân
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
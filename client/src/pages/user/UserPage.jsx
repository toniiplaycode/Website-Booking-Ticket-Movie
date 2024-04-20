import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PurchasedTicket from './components/PurchasedTicket';

const UserPage = () => {
    return(
        <Container>
            <Row className="userpage-container">
                <Col className='infor-container'>
                    <p className="userpage-info-title">Thông tin khách hàng</p>
                    <p className="userpage-info"><span>Họ tên: </span> Lê Thanh Toàn</p>
                    <p className="userpage-info"><span>Địa chỉ: </span> Ninh Kiều, Cần Thơ</p>
                    <p className="userpage-info"><span>Email: </span> toan@gmail.com</p>
                    <p className="userpage-info"><span>SĐT: </span> 077123123123</p>
                </Col>
                <Col className='infor-container'>
                    <p className="userpage-info-title">Vé đã mua</p>
                    <PurchasedTicket/>
                    <PurchasedTicket/>
                    <PurchasedTicket/>
                </Col>
            </Row>
        </Container>
    )
}
export default UserPage;
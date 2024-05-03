import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFoundPage = () => {
    return(
        <Container>
            <Row>
                <Col className='notfound'>
                    Không tìm thấy trang !
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage;
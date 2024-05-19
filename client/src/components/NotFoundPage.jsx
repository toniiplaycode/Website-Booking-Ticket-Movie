import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFoundPage = () => {
  return (
    <Container>
      <Row>
        <Col className="notfound">
          Không tìm thấy trang !
          <div>
            <img src="/images/error-404.png" className="img-notfound" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;

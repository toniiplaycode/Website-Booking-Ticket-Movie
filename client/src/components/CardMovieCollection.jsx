import Container from "react-bootstrap/esm/Container";
import CardMovie from "./CardMovie";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const CardMovieCollection = ({ titleCardCollection }) => {
    const img="./images/imgCard.jpg";
    const img2="./images/imgCard2.jpg";

    return(
        <section className="newmovie-container">
            <p className="newmovie-title">{titleCardCollection}</p>

            <Container className="newmovie-container-mobile-pc">
                <Row>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img}/>
                    </Col>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img2}/>
                    </Col>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img}/>
                    </Col>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img2}/>
                    </Col>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img}/>
                    </Col>
                    <Col xxl={2} xl={3} sm={4}>
                        <CardMovie img={img2}/>
                    </Col>
                </Row>
            </Container>

            <div className="newmovie-container-mobile">
                <CardMovie img={img}/>  
                <CardMovie img={img2}/>  
                <CardMovie img={img}/>  
                <CardMovie img={img2}/>  
                <CardMovie img={img2}/>  
                <CardMovie img={img}/>  
                <CardMovie img={img2}/>  
            </div>

        </section>
    )
}
export default CardMovieCollection;


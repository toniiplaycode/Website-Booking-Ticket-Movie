import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MoviesCollection = () => {
    return(
        <div className="movies-backdrop">
            <Container>
                <Row className='movies-collection-item'>
                    <Col sm={12} md={4} className='collection-item-card'>
                        <div className='collection-item-container'>
                            <img 
                                src='./images/imgCard.jpg'
                            />
                            <p className='collection-item-title'>
                                Kẻ ẩn danh 
                            </p>
                            <div className='collection-item-btn-container'>
                                <button className='collection-item-btn'>
                                    Trailer
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={8} className='collection-item-time'>
                        <div className='collection-item-title'>
                            <p className='title-type-movies'>3D</p>
                            <div className='time-date-container'>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='collection-item-title'>
                            <p className='title-type-movies'>2D</p>
                            <div className='time-date-container'>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='movies-collection-item'>
                    <Col sm={12} md={4} className='collection-item-card'>
                        <div className='collection-item-container'>
                            <img 
                                src='./images/imgCard2.jpg'
                            />
                            <p className='collection-item-title'>
                                DUNE
                            </p>
                            <div className='collection-item-btn-container'>
                                <button className='collection-item-btn'>
                                    Trailer
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={8} className='collection-item-time'>
                        <div className='collection-item-title'>
                            <p className='title-type-movies'>3D</p>
                            <div className='time-date-container'>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                                <div className='time-movie-container'>
                                    <p className='each-date'>10 tháng 4, 2024</p>
                                    <button className='each-time-btn'>
                                        2:30 pm
                                    </button>
                                    <button className='each-time-btn'>
                                        4:30 pm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MoviesCollection;
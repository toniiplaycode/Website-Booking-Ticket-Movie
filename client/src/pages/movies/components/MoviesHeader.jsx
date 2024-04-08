import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MoviesHeader = () => {
    return(
        <Container className='movies-header-container'>
            <Row>
                <Col className='location-select-container'>
                    <select className='location-selector'>
                        <option>Cần Thơ</option>
                        <option>Hồ Chí Minh</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col className='location-select-container'>
                    <p className="selected-location">
                        Địa điểm: <span>Cần Thơ</span>
                    </p>
                    <p className="selected-theatre">
                        Rạp: <span>Fanstatic</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='movies-header-search-container'>
                    <input
                        placeholder='Phim bạn muốn tìm...' 
                    />
                </Col>
            </Row>
            <Row>
               <Col className='typeof-container'>
                    <div className="typeof-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="typeof-icon"
                            viewBox="0 0 512 512"
                        >
                        <path
                            d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        </svg>
                    </div>
                    <div className='typof-movies-container'>
                        <button className='typof-movies-item active'>
                            Tất cả
                        </button>
                        <button className='typof-movies-item'>
                            Hành Động
                        </button>
                        <button className='typof-movies-item'>
                            Phiêu lưu
                        </button>
                        <button className='typof-movies-item'>
                            Hoạt hình
                        </button>
                        <button className='typof-movies-item'>
                            Gây cấn
                        </button>
                        <button className='typof-movies-item'>
                            Hài hước
                        </button>
                        <button className='typof-movies-item'>
                            Tình cảm
                        </button>
                        <button className='typof-movies-item'>
                            Drama
                        </button>
                        <button className='typof-movies-item'>
                            Kinh dị
                        </button>
                        <button className='typof-movies-item'>
                            Giả tưởng
                        </button>
                    </div>
               </Col>
            </Row>
        </Container>
    )
}

export default MoviesHeader;
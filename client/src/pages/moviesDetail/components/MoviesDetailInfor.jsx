import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faCalendarDays, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationSelect from '../../../components/LocationSelect';
import MoviesCollection from '../../movies/components/MoviesCollection';
import CollectionTime from '../../../components/CollectionTime';
import { useDispatch } from 'react-redux';
import { toggleTrailer } from '../../../reducers/modalTrailer';

const MoviesDetailInfor = () => {
    const dispath = useDispatch();

    return(
        <Container>
            <Row>
                <Col className='infor-img-general'>
                    <img
                        className="infor-img"
                        src="./images/imgCard.jpg"
                    />
                    <div className='infor-general'>
                        <div className='general-title-rating'>
                            <p className='general-title'>Kẻ ẩn danh</p>
                            <p className="general-rating">
                                <FontAwesomeIcon className="card-icon" icon={faStar} /> 
                                9.5
                            </p>
                        </div>
                        <div className='general-showtime-time'>
                            <p>
                                <FontAwesomeIcon className="card-icon" icon={faCalendarDays} />
                                10/4/2024
                            </p>
                            <p>
                                <FontAwesomeIcon className="card-icon" icon={faClock} />
                                2h 45m
                            </p>
                        </div>
                        <p className='general-content'>
                            <span>
                                Thể loại: &nbsp;
                            </span>
                            Hành động, tình cảm
                        </p>
                        <p className='general-content'>
                            <span>
                                Tác giả: &nbsp;
                            </span>
                            Lý Hải
                        </p>
                        <p className='general-content'>
                            <span>
                                Diễn viên chính: &nbsp;
                            </span>
                            Kiều Minh Tuấn, Hiếu Thứ Hai
                        </p>
                        <button className='general-trailer-btn'
                            onClick={() => {
                                dispath(toggleTrailer());
                            }}
                        >
                            Trailer
                        </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <p className='infor-descri-title'>
                    Tóm tắt
                </p>
                <p className='infor-descri'> 
                    Khiêm tốn và từng là giang hồ, người đàn ông nọ đối mặt với quá khứ rắc rối của mình và trở lại thế giới ngầm sau khi một băng tội phạm bắt cóc con gái riêng của vợ anh.
                </p>
            </Row>
            <LocationSelect />
            <CollectionTime />
        </Container>
    )
}

export default MoviesDetailInfor;
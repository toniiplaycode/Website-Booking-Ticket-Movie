import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import CollectionTime from './CollectionTime';
import { useDispatch } from "react-redux";
import { toggleTrailer } from "../reducers/modalTrailer";

const SectionMovieCollection = ({ img, name }) => {
    const dispath = useDispatch();
    const navigate = useNavigate();

    return(
        <Row className='movies-collection-item'>
            <Col sm={12} md={4} className='collection-item-card'>
                <div className='collection-item-container'>
                    <img 
                        src={img}
                    />
                    <p className='collection-item-title'>
                        {name}
                    </p>
                    <div className='collection-item-btn-container'>
                        <button className='collection-item-btn'
                            onClick={() => navigate('/moviesDetail')}
                        >
                            Chi tiết
                        </button>
                        <button className='collection-item-btn'
                            onClick={() => {
                                dispath(toggleTrailer());
                            }}
                        >
                            Trailer
                        </button>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={8}>
                <CollectionTime />
            </Col>
        </Row>
    )
}

export default SectionMovieCollection;
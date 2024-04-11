import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

const LocationSelect = () => {
    return(
        <>
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
        </>
    )
}

export default LocationSelect;
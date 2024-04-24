import axios from 'axios';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

const LocationSelect = () => {
    const [cinema, setCinema] = useState();
    const [cinemaId, setCinemaId] = useState();
    const [addressCinema, setAddressCinema] = useState();
    const [cinemaRoom, setCinemaRoom] = useState();
    const [nameCinemaRoom, setNameCinemaRoom] = useState();

    useEffect(()=>{
        const getCinemas = async () => {
            try{
                const res = await axios.get("http://localhost:8000/api/cinema/getAll");
                setCinema(res.data.all);
                setCinemaId(res.data.all[0].id);
            }catch(error) {
                console.log("eror from fetch cinema !!!: ", error);
            }
        }
        getCinemas();
    }, [])
    
    useEffect(()=>{
        const getCinemaRooms = async () => {
            try{
                const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getAllWithCanema?CinemaId=${cinemaId}`);
                setCinemaRoom(res.data.all);
            }catch(error) {
                console.log("eror from fetch cinema room!!!: ", error);
            }
        }
        getCinemaRooms();
    }, [cinemaId])

    useEffect(() => {
        if(cinema && cinema.length > 0) {
            setAddressCinema(cinema[0].address);
        }
    }, [cinema]);

    useEffect(() => {
        if(cinemaRoom && cinemaRoom.length > 0) {
            setNameCinemaRoom(cinemaRoom[0].nameCinemaRoom);
        }
    }, [cinemaRoom]);

    const handleAddressCinema = (event) => {
        const selectedCinemaName = event.target.value;
        const selectedCinema = cinema.find(item => item.nameCinema === selectedCinemaName);
        setAddressCinema(selectedCinema.address);
        setCinemaId(selectedCinema.id);
    };

    const handleNameCinemaRoom = (event) => {
        const selectedNameCinemaRoom = event.target.value;
        const selectedRoom = cinemaRoom.find(item => item.nameCinemaRoom === selectedNameCinemaRoom);
        setNameCinemaRoom(selectedRoom.nameCinemaRoom);
    };

    return(
        <>
            <Row>
                <Col className='location-select-container'>
                    <select className='location-selector' onChange={handleAddressCinema}>
                        {cinema && cinema.map((item, index) => 
                            <option key={index}>
                                {item.nameCinema}
                            </option>
                        )}
                    </select>
                    <p className="selected-location">
                        Địa chỉ: <span>{addressCinema}</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='location-select-container'>
                    <select className='location-selector' onChange={handleNameCinemaRoom}>
                        {cinemaRoom && cinemaRoom.map((item, index) => 
                            <option key={index}>
                                {item.nameCinemaRoom}
                            </option>
                        )}
                    </select>
                    <p className="selected-location">
                        Phòng chiếu: <span>{nameCinemaRoom}</span>
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default LocationSelect;
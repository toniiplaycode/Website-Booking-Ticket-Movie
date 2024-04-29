import { useEffect, useState } from "react";
import Seat from "./Seat";
import axios from "axios";
import { useSelector } from "react-redux";

const SeatSelect = () => {
    const [seatNotEmpty, setSeatNotEmpty] = useState([]);
    const [listSeats, setListSeats] = useState([]);

    const selectedCrWithFilm = useSelector((state) => state.selectedCrWithFilm.selectedCrWithFilm);
    const [seats, setSeats] = useState();
    const [nameRoom, setNameRoom] = useState();
    
    
    useEffect(() => {
      const getSeatNotEmpty = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/ticket/notEmptySeat?calendarReleaseId=${selectedCrWithFilm.id}`);
          setSeatNotEmpty(res.data.all);
        } catch (error) {
          console.error("Error fetching notEmptySeat data:", error);
        }
      }
      getSeatNotEmpty();
    }, [selectedCrWithFilm]);
    
    useEffect(()=>{
      const getDetailCinemaRoom = async () => {
        try{
          const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getDetail?id=${selectedCrWithFilm.cinemaRoomId}`);
          setSeats(res.data.data.numberOfSeats);
          setNameRoom(res.data.data.nameCinemaRoom);
        }catch(error) {
          console.log("eror from fetch cinema room!!!: ", error);
        }
      }
      getDetailCinemaRoom();
    }, [selectedCrWithFilm])
    
    useEffect(()=>{
      if(seats > 0) {
        let arraySeats = [];
        for (let i = 1; i <= seats; i++) {
          arraySeats.push(i);
        }
        setListSeats(arraySeats);
      }
    }, [seats])

    return(
        <>
          <div className="seat-cinemaroom">
            Phòng {(nameRoom && Object.keys(selectedCrWithFilm).length != 0) ? nameRoom : "..."}
          </div>
          <div className="seat-guide-container">
            <div className="seat-available-demo"></div>
            <p className="seat-status-details">Sẵn</p>
            <div className="seat-booked-demo"></div>
            <p className="seat-status-details">Đã đặt</p>
            <div className="seat-selected-demo"></div>
            <p className="seat-status-details">Chọn</p>
          </div>
          <div className="theatre-screen">
            <div className="screen-1"></div>
            <div className="screen-2"></div>
          </div>
          <div className="theatre-screen-heading">Màn hình chiếu</div>
          <div className="seat-container-center">
            <div className="seat-container">
              {(listSeats && selectedCrWithFilm.cinemaRoomId) && listSeats.map((item, index) => {
                    const isBooked = seatNotEmpty.includes(item);
                    return isBooked ? 
                      <Seat key={index} numberSeat={item} status={"booked"} /> : 
                      <Seat key={index} numberSeat={item} />;
                  })
              } 
              {(listSeats.length == 0 || !selectedCrWithFilm.cinemaRoomId) && (
                <div>
                  ...
                </div> 
              )
              }
            </div>
          </div>
        </>
    )
}

export default SeatSelect; 
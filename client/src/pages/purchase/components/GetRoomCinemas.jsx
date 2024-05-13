import axios from "axios";
import { useEffect, useState } from "react";

const GetRoomCinemas = ({ cinemaId }) => {
  const [cinemaRoom, setCinemaRoom] = useState();

  // lấy tất cả phòng chiếu theo từng rạp
  useEffect(() => {
    const getCinemaRooms = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/cinemaRoom/getAllWithCanema?CinemaId=${cinemaId}`
        );
        setCinemaRoom(res.data.all);
      } catch (error) {
        console.log("eror from fetch cinema room!!!: ", error);
      }
    };
    getCinemaRooms();
  }, [cinemaId]);

  return (
    <>
      {cinemaRoom &&
        cinemaRoom.map((item, index) => <div>{item.nameCinemaRoom}</div>)}
    </>
  );
};

export default GetRoomCinemas;

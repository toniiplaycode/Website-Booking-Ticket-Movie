import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCr } from "../../../reducers/apiAdminCr";
import { showDialog } from "../../../reducers/dialogAlert";

const AdminCrItem = ({ item }) => {
  const dispatch = useDispatch();
  const [dataCinemaRoom, setDataCinemaRoom] = useState();
  const [dataCinema, setDataCinema] = useState();
  const [idDeleteCr, setIdDeleteCr] = useState();
  useEffect(() => {
    const getNameCinemaRoom = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/cinemaRoom/getDetail?id=${item.cinemaRoomId}`
      );
      setDataCinemaRoom(res.data.data);
    };
    getNameCinemaRoom();
  }, [item]);

  useEffect(() => {
    const getNameCinemaRoom = async () => {
      if (dataCinemaRoom) {
        const res = await axios.get(
          `http://localhost:8000/api/cinema/getDetail?id=${dataCinemaRoom.CinemaId}`
        );
        setDataCinema(res.data.data);
      }
    };
    getNameCinemaRoom();
  }, [dataCinemaRoom]);

  const confirm = useSelector((state) => state.dialogAlert.confirm);

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteCr({ id: idDeleteCr }));
    }
  }, [confirm]);

  return (
    <div className="admin-table-container">
      <div className="admin-table-parent">
        <div className="admin-table-item table-item-time">
          {item.dateWatch}
          <span>{item.showTimeStart}</span>
        </div>
        <div className="admin-table-item">
          {dataCinemaRoom && dataCinemaRoom.nameCinemaRoom}
        </div>
        <div className="admin-table-item">
          {dataCinema && dataCinema.nameCinema}
        </div>
        <div className="admin-table-handle">
          <button
            onClick={() => {
              dispatch(showDialog());
              setIdDeleteCr(item.id);
            }}
          >
            Xoá
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCrItem;

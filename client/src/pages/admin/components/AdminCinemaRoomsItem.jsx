import axios from "axios";
import { useEffect, useState } from "react";
import { showDialog } from "../../../reducers/dialogAlert";
import { useDispatch, useSelector } from "react-redux";
import { deleteCinemaRoom } from "../../../reducers/apiCinemaRoom";

const AdminCinemaRoomsItem = ({ item, setItemEdit }) => {
  const dispatch = useDispatch();
  const [dataCinema, setDataCinema] = useState();
  const confirm = useSelector((state) => state.dialogAlert.confirm);
  const [cinemaRoomDelete, setCinemaRoomDelete] = useState();

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteCinemaRoom({ id: cinemaRoomDelete }));
    }
  }, [confirm]);

  useEffect(() => {
    const getNameCinemaRoom = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/cinema/getDetail?id=${item.CinemaId}`
      );
      setDataCinema(res.data.data);
    };
    getNameCinemaRoom();
  }, [item]);

  return (
    <>
      <div className="admin-table-parent">
        <div className="admin-table-item admin-table-item-child">
          <div>Mã {item.id}</div>
          <div>Phòng {item.nameCinemaRoom}</div>
        </div>
        <div className="admin-table-item">{item.numberOfSeats} ghế</div>
        <div className="admin-table-item">
          {dataCinema && dataCinema.nameCinema}
        </div>
        <div className="admin-table-handle">
          <button
            onClick={() => {
              setItemEdit(item);
            }}
          >
            Sửa
          </button>
          <button
            onClick={() => {
              dispatch(showDialog());
              setCinemaRoomDelete(item.id);
            }}
          >
            Xoá
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminCinemaRoomsItem;

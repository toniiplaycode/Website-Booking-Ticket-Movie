import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  postAddCinemaRoom,
  putUpdateCinemaRoom,
} from "../../../reducers/apiCinemaRoom";

const InputAddCinemaRooms = ({ itemEdit, setItemEdit }) => {
  const dispatch = useDispatch();
  const listAllCinema = useSelector((state) => state.apiCinema.listAllCinema);
  const statusPostCinemaRoom = useSelector(
    (state) => state.apiCinemaRoom.statusPostCinemaRoom
  );

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [seats, setSeats] = useState();
  const [cinemaId, setCinemaId] = useState();

  useEffect(() => {
    if (itemEdit) {
      setId(itemEdit.id);
      setName(itemEdit.nameCinemaRoom);
      setSeats(itemEdit.numberOfSeats);
      setCinemaId(itemEdit.CinemaId);
    }
  }, [itemEdit]);

  const handleAdd = () => {
    if (!id || !name || !seats || !cinemaId) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    const obj = {
      id,
      CinemaId: cinemaId,
      nameCinemaRoom: name,
      numberOfSeats: seats,
    };

    dispatch(postAddCinemaRoom(obj));
  };

  useEffect(() => {
    if (statusPostCinemaRoom == "succeeded") {
      setId("");
      setName("");
      setSeats("");
      setCinemaId("");
    }
  }, [statusPostCinemaRoom]);

  const handleUpdate = () => {
    if (!id || !name || !seats || !cinemaId) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    const obj = {
      id,
      CinemaId: cinemaId,
      nameCinemaRoom: name,
      numberOfSeats: seats,
    };

    dispatch(putUpdateCinemaRoom(obj));
    setId("");
    setName("");
    setSeats("");
    setCinemaId("");
    setItemEdit(undefined);
  };

  return (
    <div className="add-input-container">
      {itemEdit == undefined ? (
        <>
          <input
            placeholder="Mã phòng chiếu"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className="add-input-edit">Mã phòng chiếu: {id}</div>
        </>
      )}
      <input
        placeholder="Tên phòng chiếu"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số lượng ghế"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />
      <select
        className="admin-select-type select-exception"
        onChange={(e) => {
          setCinemaId(e.target.value);
        }}
        value={cinemaId}
      >
        <option value="" disabled selected>
          Thuộc rạp chiếu
        </option>
        {listAllCinema &&
          listAllCinema.map((item, index) => (
            <option key={index} value={item.id}>
              {item.nameCinema}
            </option>
          ))}
      </select>

      {itemEdit == undefined ? (
        <button className="btn-admin" onClick={handleAdd}>
          Thêm phòng chiếu
        </button>
      ) : (
        <button className="btn-admin" onClick={handleUpdate}>
          Sửa phòng chiếu
        </button>
      )}
    </div>
  );
};

export default InputAddCinemaRooms;

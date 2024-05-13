import { useDispatch, useSelector } from "react-redux";
import InputAddCinemaRooms from "../components/InputAddCinemaRooms";
import { fetchAllCinemaRoom } from "../../../reducers/apiCinemaRoom";
import { useEffect, useState } from "react";
import AdminCinemaRoomsItem from "../components/AdminCinemaRoomsItem";
import Loading from "../../../components/Loading";
import AlertDialog from "../../../components/AlertDialog";

const AdminCinemaRooms = () => {
  const dispatch = useDispatch();
  const [itemEdit, setItemEdit] = useState();

  useEffect(() => {
    dispatch(fetchAllCinemaRoom());
  }, []);

  const listAllCinemaRoom = useSelector(
    (state) => state.apiCinemaRoom.listAllCinemaRoom
  );
  const statusAllCinemaRoom = useSelector(
    (state) => state.apiCinemaRoom.statusAllCinemaRoom
  );

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Phòng chiếu</p>
      <div className="admin-table-container">
        {statusAllCinemaRoom == "loading" && <Loading />}
        {listAllCinemaRoom &&
          listAllCinemaRoom.map((item, index) => (
            <AdminCinemaRoomsItem
              key={index}
              item={item}
              setItemEdit={setItemEdit}
            />
          ))}
      </div>
      <InputAddCinemaRooms itemEdit={itemEdit} setItemEdit={setItemEdit} />
    </>
  );
};

export default AdminCinemaRooms;

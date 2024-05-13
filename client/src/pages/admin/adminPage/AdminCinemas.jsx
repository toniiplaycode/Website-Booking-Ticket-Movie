import { useEffect, useState } from "react";
import InputAddCinemas from "../components/InputAddCinemas";
import { useDispatch, useSelector } from "react-redux";
import { deleteCinema, fetchAllCinema } from "../../../reducers/apiCinema";
import Loading from "../../../components/Loading";
import AlertDialog from "../../../components/AlertDialog";
import { showDialog } from "../../../reducers/dialogAlert";

const AdminCinemas = () => {
  const dispatch = useDispatch();
  const listAllCinema = useSelector((state) => state.apiCinema.listAllCinema);
  const confirm = useSelector((state) => state.dialogAlert.confirm);
  const statusListAllCinema = useSelector(
    (state) => state.apiCinema.statusListAllCinema
  );

  const [deleteId, setDeleteId] = useState();
  const [nameCinemaEdit, setNameCinemaEdit] = useState();
  const [addressEdit, setAddressEdit] = useState();
  const [idEdit, setIdEdit] = useState();

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteCinema({ id: deleteId }));
    }
  }, [confirm]);

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Rạp</p>
      <div className="admin-table-container">
        {statusListAllCinema == "loading" && <Loading />}
        {listAllCinema &&
          listAllCinema.map((item, index) => (
            <div className="admin-table-parent" key={index}>
              <div className="admin-table-item">{item.id}</div>
              <div className="admin-table-item">{item.nameCinema}</div>
              <div className="admin-table-item">{item.address}</div>
              <div className="admin-table-handle">
                <button
                  onClick={() => {
                    setNameCinemaEdit(item.nameCinema);
                    setAddressEdit(item.address);
                    setIdEdit(item.id);
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => {
                    dispatch(showDialog());
                    setDeleteId(item.id);
                  }}
                >
                  Xoá
                </button>
              </div>
            </div>
          ))}
      </div>
      <InputAddCinemas
        idEdit={idEdit}
        nameCinemaEdit={nameCinemaEdit}
        setNameCinemaEdit={setNameCinemaEdit}
        addressEdit={addressEdit}
        setAddressEdit={setAddressEdit}
      />
    </>
  );
};
export default AdminCinemas;

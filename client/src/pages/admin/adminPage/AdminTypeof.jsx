import { useEffect, useState } from "react";
import InputAddTypeof from "../components/InputAddTypeof";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypeof, fetchAllTypeof } from "../../../reducers/apiAdminTypeof";
import AlertDialog from "../../../components/AlertDialog";
import { showDialog } from "../../../reducers/dialogAlert";
import Loading from "../../../components/Loading";

const AdminTypeof = () => {
  const dispatch = useDispatch();
  const listTypeof = useSelector((state) => state.apiAdminTypeof.listTypeof);
  const statusFetchAllTypeof = useSelector(
    (state) => state.apiAdminTypeof.statusFetchAllTypeof
  );
  const confirm = useSelector((state) => state.dialogAlert.confirm);
  const [nameTypeFilmDelete, setNameTypeFilmDelete] = useState();
  const [nameTypeFilmEdit, setNameTypeFilmEdit] = useState();
  const [descTypeFilmEdit, setDescTypeFilmEdit] = useState();

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteTypeof(nameTypeFilmDelete));
    }
  }, [confirm]);

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Thể loại phim</p>
      <div className="admin-table-container">
        {statusFetchAllTypeof == "loading" && <Loading />}
        {listTypeof.length > 0 &&
          listTypeof.map((item, index) => (
            <div className="admin-table-parent" key={index}>
              <div className="admin-table-item">{item.nameTypeFilm}</div>
              <div className="admin-table-item description-type">
                {item.descriptionType}
              </div>
              <div className="admin-table-handle">
                <button
                  onClick={() => {
                    setNameTypeFilmEdit(item.nameTypeFilm);
                    setDescTypeFilmEdit(item.descriptionType);
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => {
                    dispatch(showDialog());
                    setNameTypeFilmDelete({
                      nameTypeFilm: item.nameTypeFilm,
                    });
                  }}
                >
                  Xoá
                </button>
              </div>
            </div>
          ))}
      </div>
      <InputAddTypeof
        nameTypeFilmEdit={nameTypeFilmEdit}
        setNameTypeFilmEdit={setNameTypeFilmEdit}
        descTypeFilmEdit={descTypeFilmEdit}
        setDescTypeFilmEdit={setDescTypeFilmEdit}
      />
    </>
  );
};

export default AdminTypeof;

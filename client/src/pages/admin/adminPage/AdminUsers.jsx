import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUser } from "../../../reducers/apiAdminUser";
import { showDialog } from "../../../reducers/dialogAlert";
import AlertDialog from "../../../components/AlertDialog";
import Loading from "../../../components/Loading";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const listAllUser = useSelector((state) => state.apiAdminUser.listAllUser);
  const statusFetchAllUser = useSelector(
    (state) => state.apiAdminUser.statusFetchAllUser
  );
  const confirm = useSelector((state) => state.dialogAlert.confirm);
  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);
  const [userDelete, setUserDelete] = useState();

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteUser({ id: userDelete }));
    }
  }, [confirm]);

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Thông tin các khách hàng</p>
      {statusFetchAllUser == "loading" && <Loading />}
      {listAllUser &&
        listAllUser.map((item, index) => {
          if (item.roleId == "R3") {
            return (
              <div className="admin-table-container">
                <div className="admin-table-parent">
                  <div className="admin-table-item">
                    {item.firstName + " " + item.lastName}
                  </div>
                  <div className="admin-table-item">{item.address}</div>
                  <div className="admin-table-item">
                    <div>{item.email}</div>
                    <div>{item.phoneNumber}</div>
                  </div>
                  <div className="admin-table-handle">
                    <button
                      onClick={() => {
                        dispatch(showDialog());
                        setUserDelete(item.id);
                      }}
                    >
                      Xoá
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default AdminUsers;

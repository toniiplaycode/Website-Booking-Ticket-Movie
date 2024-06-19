import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUser } from "../../../reducers/apiAdminUser";
import { showDialog } from "../../../reducers/dialogAlert";
import AlertDialog from "../../../components/AlertDialog";
import Loading from "../../../components/Loading";
import { fetchAllRole, putRole } from "../../../reducers/apiAdminRole";

const AdminRole = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUser());
    dispatch(fetchAllRole());
  }, []);

  let listAllUser = useSelector((state) => state.apiAdminUser.listAllUser);
  const statusFetchAllUser = useSelector(
    (state) => state.apiAdminUser.statusFetchAllUser
  );
  const confirm = useSelector((state) => state.dialogAlert.confirm);
  const [userDelete, setUserDelete] = useState();

  const listAllRoles = useSelector((state) => state.apiAdminRole.listAllRoles);

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deleteUser({ id: userDelete }));
    }
  }, [confirm]);

  const sortedUsers = listAllUser.slice().sort((a, b) => {
    const order = { R2: 1, R3: 2, R1: 3 };
    return order[a.roleId] - order[b.roleId];
  });

  const handleUpdate = (obj) => {
    dispatch(putRole(obj));
  };

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Thông tin chức vụ các tài khoản</p>
      {statusFetchAllUser == "loading" && <Loading />}
      {sortedUsers &&
        sortedUsers.map((item, index) => {
          if (item.roleId != "R1") {
            return (
              <div className="admin-table-container" key={index}>
                <div className="admin-table-parent">
                  <div className="admin-table-item">
                    {item.firstName + " " + item.lastName}
                  </div>
                  <div className="admin-table-item">
                    <div>{item.email}</div>
                    <div>{item.phoneNumber}</div>
                  </div>
                  <div className="admin-table-handle">
                    <select
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        const [selectedRoleId, userId] =
                          selectedValue.split("-");
                        handleUpdate({ id: userId, roleId: selectedRoleId });
                      }}
                    >
                      {listAllRoles.length > 0 &&
                        listAllRoles.map((i, idx) => {
                          if (i.id == item.roleId) {
                            return (
                              <option
                                value={`${i.id}-${item.id}`}
                                selected
                                disabled
                              >
                                {i.id == "R2"
                                  ? "Nhân viên"
                                  : i.id == "R3"
                                  ? "Khách hàng"
                                  : ""}
                              </option>
                            );
                          }
                          if (i.id !== "R1") {
                            return (
                              <option value={`${i.id}-${item.id}`}>
                                {i.id == "R2"
                                  ? "Nhân viên"
                                  : i.id == "R3"
                                  ? "Khách hàng"
                                  : ""}
                              </option>
                            );
                          }
                        })}
                    </select>
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

export default AdminRole;

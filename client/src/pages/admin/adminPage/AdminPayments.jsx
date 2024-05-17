import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../../../components/AlertDialog";
import { showDialog } from "../../../reducers/dialogAlert";
import Loading from "../../../components/Loading";
import { toast } from "react-toastify";
import {
  deletePayment,
  postAddPayment,
  putPayment,
} from "../../../reducers/apiAdminPayment";

const AdminPayments = () => {
  const dispatch = useDispatch();
  const listAllPayment = useSelector(
    (state) => state.apiAdminPayment.listAllPayment
  );
  const statusFetchAllPayment = useSelector(
    (state) => state.apiAdminPayment.statusFetchAllPayment
  );
  const [isEdit, setIsEdit] = useState(false);
  const [nameMethod, setNameMethod] = useState("");
  const [idMethod, setIdMethod] = useState("");

  const confirm = useSelector((state) => state.dialogAlert.confirm);

  useEffect(() => {
    if (confirm.payload == true) {
      dispatch(deletePayment({ id: idMethod }));
    }
  }, [confirm]);

  const handleAdd = () => {
    if (nameMethod.length == 0) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    if (isEdit) {
      dispatch(putPayment({ id: idMethod, namePaymentMethod: nameMethod }));
      setIsEdit(false);
      setNameMethod("");
    } else {
      dispatch(postAddPayment({ namePaymentMethod: nameMethod }));
      setNameMethod("");
    }
  };

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Phương thức thanh toán</p>
      <div className="admin-table-container">
        {statusFetchAllPayment == "loading" && <Loading />}
        {listAllPayment.length > 0 &&
          listAllPayment.map((item, index) => (
            <div className="admin-table-parent" key={index}>
              <div className="admin-table-item">{item.namePaymentMethod}</div>
              <div className="admin-table-handle">
                <button
                  onClick={() => {
                    setNameMethod(item.namePaymentMethod);
                    setIsEdit(true);
                    setIdMethod(item.id);
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => {
                    dispatch(showDialog());
                    setIdMethod(item.id);
                  }}
                >
                  Xoá
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="add-input-container">
        <input
          value={nameMethod}
          onChange={(e) => {
            setNameMethod(e.target.value);
          }}
          placeholder="Thêm phương thức thanh toán"
        />
        {isEdit ? (
          <>
            <button
              className="btn-admin"
              onClick={() => {
                handleAdd();
              }}
            >
              Sửa
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-admin"
              onClick={() => {
                handleAdd();
              }}
            >
              Thêm
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AdminPayments;

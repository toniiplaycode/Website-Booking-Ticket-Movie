import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminTicketItem = ({ id }) => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.apiLoginLogout.token);
  const [detailUser, setDetailUser] = useState();

  useEffect(() => {
    const getDetailUser = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/user/getDetailUser?id=${id}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      setDetailUser(res.data.data[0]);
    };
    getDetailUser();
  }, [id]);

  return (
    <>
      <div className="admin-table-parent">
        <div className="admin-table-item">
          {detailUser && detailUser.firstName + " " + detailUser.lastName}
        </div>
        <div className="admin-table-item">{detailUser && detailUser.email}</div>
        <div className="admin-table-handle">
          <button
            onClick={() =>
              navigate("/admin/adminTicketDetail", {
                state: detailUser,
              })
            }
          >
            Chi tiết
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminTicketItem;

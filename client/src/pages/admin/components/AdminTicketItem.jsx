import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminTicketItem = ({ id, listAllTicket }) => {
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

  const countBookedTickets = (userId) => {
    return listAllTicket.filter(
      (ticket) => ticket.userId === userId && ticket.nameStatus === "Booked"
    ).length;
  };

  return (
    <>
      <div className="admin-table-parent">
        <div className="admin-table-item">
          <div>
            {detailUser && detailUser.firstName + " " + detailUser.lastName}
          </div>
          <div>{detailUser && detailUser.email}</div>
        </div>
        <div className="admin-table-item">
          {detailUser && `Vé mới đặt: ${countBookedTickets(detailUser.id)}`}
        </div>
        <div className="admin-table-handle">
          <button
            className="btn-detail"
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

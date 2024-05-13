import { useLocation } from "react-router-dom";
import PurchasedTicket from "../../user/components/PurchasedTicket";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AdminTicketDetail = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const detailUser = location.state;

  const [listTicketEachUser, setListTicketEachUser] = useState([]);
  const [sortedListTicketEachUser, setSortedListTicketEachUser] = useState([]);
  const token = useSelector((state) => state.apiLoginLogout.token);
  const statusApproveTicket = useSelector(
    (state) => state.apiAdminTicket.statusApproveTicket
  );

  useEffect(() => {
    const getTicketEachUser = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/ticket/getDetailWithUser?userId=${detailUser.id}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      setListTicketEachUser(res.data.all);
    };
    getTicketEachUser();
  }, [detailUser, statusApproveTicket]);

  // sắp xếp theo vé mới đặt và từ lớn đến nhỏ theo id của vé của từng user
  useEffect(() => {
    if (listTicketEachUser.length > 0) {
      const sortedList = [...listTicketEachUser].sort((a, b) => {
        if (a.nameStatus === "Booked" && b.nameStatus !== "Booked") {
          return -1; // a lên trước nếu là "Booked" và b không phải "Booked"
        } else if (a.nameStatus !== "Booked" && b.nameStatus === "Booked") {
          return 1; // b lên trước nếu là "Booked" và a không phải "Booked"
        } else {
          // Nếu cả hai đều là "Booked" hoặc không phải "Booked", sắp xếp theo id giảm dần
          return b.id - a.id;
        }
      });
      setSortedListTicketEachUser(sortedList);
    }
  }, [listTicketEachUser]);

  return (
    <>
      <p className="adminpage-title">
        {detailUser && detailUser.firstName + " " + detailUser.lastName}
        {detailUser && detailUser.email}
      </p>
      {sortedListTicketEachUser.length > 0 &&
        sortedListTicketEachUser.map((item, index) => {
          return (
            <>
              <PurchasedTicket item={item} key={index} />
            </>
          );
        })}
    </>
  );
};
export default AdminTicketDetail;

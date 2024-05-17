import { useDispatch, useSelector } from "react-redux";
import { fetchAllTicket } from "../../../reducers/apiAdminTicket";
import { useEffect, useState } from "react";
import AdminTicketItem from "../components/AdminTicketItem";
import Loading from "../../../components/Loading";

const AdminTickets = () => {
  const dispatch = useDispatch();
  const [listUserId, setListUserId] = useState();

  const listAllTicket = useSelector(
    (state) => state.apiAdminTicket.listAllTicket
  );

  useEffect(() => {
    dispatch(fetchAllTicket());
  }, []);

  // Lấy các đối tượng không trùng userId
  const uniqueUserIdArray = (data) => {
    return [...new Set(data.map((obj) => obj.userId))];
  };

  useEffect(() => {
    setListUserId(uniqueUserIdArray(listAllTicket));
  }, [listAllTicket]);

  return (
    <>
      <p className="adminpage-title">Vé của khách hàng đã mua</p>
      <div className="admin-table-container">
        {!listUserId && <Loading />}
        {listUserId &&
          listUserId.map((item, index) => (
            <AdminTicketItem
              key={index}
              id={item}
              listAllTicket={listAllTicket}
            />
          ))}
      </div>
    </>
  );
};

export default AdminTickets;

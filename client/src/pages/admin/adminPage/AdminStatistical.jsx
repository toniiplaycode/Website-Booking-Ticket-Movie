import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminTicketPurchasedCard from "../components/AdminTicketPurchasedCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTicket } from "../../../reducers/apiAdminTicket";
import { formatMoney } from "../../../utils/functionCommon";
import { fetchAllUser } from "../../../reducers/apiAdminUser";

const AdminStatistical = () => {
  const dispatch = useDispatch();

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);
  const listAllTicket = useSelector(
    (state) => state.apiAdminTicket.listAllTicket
  );
  const listAllUser = useSelector((state) => state.apiAdminUser.listAllUser);
  let films = useSelector((state) => state.films.films.all);

  useEffect(() => {
    if (inforUser.roleId == "R1" || inforUser.roleId == "R2") {
      dispatch(fetchAllTicket());
      dispatch(fetchAllUser());
    }
  }, [inforUser]);

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return (
    <>
      <p className="adminpage-title">Tóm tắt</p>
      <Row className="adminpage-container">
        <Col className="adminpage-summary">
          <p className="adminpage-summary-statistical">
            {listAllTicket.length}
          </p>
          <p className="adminpage-summary-title">Số vé bán được</p>
        </Col>
        <Col className="adminpage-summary">
          <p className="adminpage-summary-statistical">
            {formatMoney(calculateTotal(listAllTicket))}
          </p>
          <p className="adminpage-summary-title">Tổng số tiền đã thanh toán</p>
        </Col>
        <Col className="adminpage-summary">
          <p className="adminpage-summary-statistical">{listAllUser.length}</p>
          <p className="adminpage-summary-title">Tổng số khách hàng</p>
        </Col>
      </Row>
      <p className="adminpage-title">Số vé bán của mỗi phim</p>
      <Row className="adminpage-ticket-container">
        {films.length > 0 &&
          films.map((item, index) => (
            <AdminTicketPurchasedCard item={item} key={index} />
          ))}
      </Row>
    </>
  );
};

export default AdminStatistical;

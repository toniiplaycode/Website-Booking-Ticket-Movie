import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { formatMoney } from "../../../utils/functionCommon";

const AdminTicketPurchasedCard = ({ item }) => {
  const [quantityTotal, setQuantityTotal] = useState();
  const token = useSelector((state) => state.apiLoginLogout.token);
  useEffect(() => {
    const getQuantityTotal = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/film/getAllTicketWithFilm?filmId=${item.id}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      setQuantityTotal(res.data);
    };
    getQuantityTotal();
  }, [item]);

  return (
    <Col className="adminpage-ticket">
      <p className="adminpage-ticket-statistical">
        {quantityTotal && quantityTotal.All[0].quantity} vé
      </p>
      <p className="adminpage-ticket-statistical">
        {quantityTotal && formatMoney(quantityTotal.All[0].total)}
      </p>
      <img className="adminpage-ticket-img" src={item.image} />
      <p className="adminpage-ticket-title">{item.nameFilm.toUpperCase()}</p>
    </Col>
  );
};

export default AdminTicketPurchasedCard;

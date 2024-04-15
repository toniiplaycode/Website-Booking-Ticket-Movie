import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import LocationSelect from "../../components/LocationSelect";
import CollectionTime from "../../components/CollectionTime";
import PurchaseFilmCard from "./components/PurchaseFilmCard";
import SeatSelect from "./components/SeatSelect";
import TicketBill from "./components/TicketBill";
import SelectPayment from "./components/SelectPayment";

const PurchasePage = () => {
    const selected = true;    

    return(
        <Container>
            <Row>
                <Col lg={8}>
                    <LocationSelect/>
                    <p className="purchase-select-film-title">Chọn phim</p>
                    <div className="purchase-select-film">
                        <PurchaseFilmCard selected={selected}/>
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                        <PurchaseFilmCard />
                    </div>
                    <CollectionTime/>
                    <p className="purchase-select-film-title">Chọn ghế</p>
                    <SeatSelect/>
                    <p className="purchase-select-film-title">Chọn phương thức thanh toán</p>
                    <SelectPayment/>
                </Col>
                <Col lg={4}>
                    <TicketBill/>
                </Col>
            </Row>
        </Container>
    )
}

export default PurchasePage;
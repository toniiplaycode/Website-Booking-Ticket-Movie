import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminTicketPurchasedCard from '../components/AdminTicketPurchasedCard';
import NavbarAdmin from '../../../components/NavbarAdmin';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminStatistical = () => {
    const [tickets, setTickets] = useState();

    // useEffect(()=>{
    //     const getAllCr = async () => {
    //       const res = await axios.get("http://localhost:8000/api/ticket/getAll");
    //       setTickets(res.data.all)
    //     }
    //     getAllCr();
    //   }, []);

    return(
        <>
            <p className='adminpage-title'>
                Tóm tắt
            </p>
            <Row className='adminpage-container'>
                <Col className='adminpage-summary'>
                    <p className='adminpage-summary-statistical'>99</p>
                    <p className='adminpage-summary-title'>Số vé bán được</p>
                </Col>
                <Col className='adminpage-summary'>
                    <p className='adminpage-summary-statistical'>5.940.000đ</p>
                    <p className='adminpage-summary-title'>Tổng số tiền đã thanh toán</p>
                </Col>
                <Col className='adminpage-summary'>
                    <p className='adminpage-summary-statistical'>20</p>
                    <p className='adminpage-summary-title'>Tổng số khách hàng</p>
                </Col>
            </Row>
            <p className='adminpage-title'>
                Số vé bán của mỗi phim
            </p>
            <Row className='adminpage-ticket-container'>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
                <AdminTicketPurchasedCard/>
            </Row>
        </>
    )
}

export default AdminStatistical;
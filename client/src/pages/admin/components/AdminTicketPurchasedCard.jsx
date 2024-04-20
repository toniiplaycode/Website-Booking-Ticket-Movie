import Col from 'react-bootstrap/Col';

const AdminTicketPurchasedCard = () => {
    return(
        <Col className='adminpage-ticket'>
            <p className='adminpage-ticket-statistical'>99</p>
            <img 
                className='adminpage-ticket-img'
                src='./images/imgCard.jpg'
            />
            <p className='adminpage-ticket-title'>Kẻ ẩn danh</p>
        </Col>
    )
}

export default AdminTicketPurchasedCard;
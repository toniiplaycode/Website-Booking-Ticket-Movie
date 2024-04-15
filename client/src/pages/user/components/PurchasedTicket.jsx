const PurchasedTicket = () => {
    return(
        <div className="purchased-ticket-container">
            <div className="purchased-ticket-infor">
                <p className="ticket-infor-item">
                    <span>Phim: </span> Kẻ ẩn danh
                </p>
                <p className="ticket-infor-item">
                    <span>Mã vé: </span> 100, 101
                </p>
                <p className="ticket-infor-item">
                    <span>Ghế: </span> A1, A2
                </p>
                <p className="ticket-infor-item">
                    <span>Rạp: </span> Fantastic    
                </p>
                <p className="ticket-infor-item">
                    <span>Địa điểm: </span> Cần Thơ
                </p>
                <p className="ticket-infor-item">
                    <span>Phòng chiếu: </span> Phòng 1
                </p>
                <p className="ticket-infor-item">
                    <span>Thời gian chiếu: </span> 10/4/2024
                </p>
                <p className="ticket-infor-item">
                    <span>Bắt đầu chiếu: </span> 2:30 pm
                </p>
                <p className="ticket-infor-item">
                    <span>Ngày mua vé: </span> 2/4/2024
                </p>
                <p className="ticket-infor-item">
                    <span>Tổng giá: </span> 120.000đ
                </p>
            </div>
            <div className="ticket-infor-item-img-container">
                <img 
                    className="ticket-infor-item-img"
                    src="./images/imgCard.jpg"
                />
            </div>
        </div>
    )
}

export default PurchasedTicket;
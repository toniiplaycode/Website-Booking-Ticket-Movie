import { useNavigate } from "react-router-dom";

const AdminTickets = () => {
    const navigate = useNavigate();

    return(
        <>
            <p className='adminpage-title'>
                Vé của khách hàng đã mua
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Lê Thanh Toàn
                        <p>toan@gmail.com</p> 
                    </div>
                    <div className="admin-table-item">
                        Kẻ ẩn danh 
                    </div>
                    <div className="admin-table-item">
                        Đã mua 
                    </div>
                    <div className="admin-table-handle">
                        <button
                            onClick={()=>navigate("/admin/adminTicketDetail")}
                        >
                            Chi tiết
                        </button>
                    </div>
                </div>
            </div>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Lê Thanh Toàn
                        <p>toan@gmail.com</p> 
                    </div>
                    <div className="admin-table-item">
                        Kẻ ẩn danh 
                    </div>
                    <div className="admin-table-item">
                        Đã sử dụng
                    </div>
                    <div className="admin-table-handle">
                        <button
                            onClick={()=>navigate("/admin/adminTicketDetail")}
                        >
                            Chi tiết
                        </button>
                    </div>
                </div>
            </div>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Lê Thanh Toàn
                        <p>toan@gmail.com</p> 
                    </div>
                    <div className="admin-table-item">
                        Kẻ ẩn danh 
                    </div>
                    <div className="admin-table-item">
                        Hết hạn
                    </div>
                    <div className="admin-table-handle">
                        <button
                            onClick={()=>navigate("/admin/adminTicketDetail")}
                        >
                            Chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminTickets;
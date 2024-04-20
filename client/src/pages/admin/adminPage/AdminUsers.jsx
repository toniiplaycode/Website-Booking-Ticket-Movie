const AdminUsers = () => {
    return(
        <>
            <p className='adminpage-title'>
                Thông tin các khách hàng
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Lê Thanh Toàn
                    </div>
                    <div className="admin-table-item">
                        Ninh Kiều, Cần Thơ
                    </div>
                    <div className="admin-table-item">
                        toan@gmail.com
                    </div>
                    <div className="admin-table-item">
                        0775844073
                    </div>
                </div>
            </div>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Huỳnh Khánh Trân
                    </div>
                    <div className="admin-table-item">
                        Hà Tiên, Kiên Giang
                    </div>
                    <div className="admin-table-item">
                        tran@gmail.com
                    </div>
                    <div className="admin-table-item">
                        0775844073
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers;
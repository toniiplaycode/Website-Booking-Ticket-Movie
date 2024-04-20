import InputAddCinemas from "../components/InputAddCinemas";

const AdminCenimas =  () => {
    return(
        <>
            <p className='adminpage-title'>
                Rạp
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Rạp phim Cần Thơ
                    </div>
                    <div className="admin-table-item">
                        Đường Nguyễn Văn Cừ, Cần Thơ
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Sửa
                        </button>
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Rạp phim HCM
                    </div>
                    <div className="admin-table-item">
                        Hoàng Sa, Quận 1, HCM
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Sửa
                        </button>
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
            <InputAddCinemas/>
        </>
    )
}
export default AdminCenimas;
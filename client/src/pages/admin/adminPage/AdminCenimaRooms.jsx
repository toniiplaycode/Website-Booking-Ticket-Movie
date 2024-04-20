import InputAddCinemaRooms from "../components/InputAddCinemaRooms";

const AdminCenimaRooms = () => {
    return(
        <>  
            <p className='adminpage-title'>
                Phòng chiếu
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Phòng CT1
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
                        Phòng CT2
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
            <InputAddCinemaRooms/>
        </>
    )
}

export default AdminCenimaRooms;
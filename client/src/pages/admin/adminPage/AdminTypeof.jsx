import TypeofMovie from "../../../components/TypeofMovie";
import InputAddTypeof from "../components/InputAddTypeof";

const AdminTypeof = () => {
    return(
        <>
            <p className='adminpage-title'>
                Thể loại phim
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Hành động
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
                        Hành động
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
            <InputAddTypeof/>
        </>
    )
}

export default AdminTypeof;
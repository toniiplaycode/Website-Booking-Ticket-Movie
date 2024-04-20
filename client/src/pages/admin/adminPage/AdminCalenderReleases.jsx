const AdminCalenderReleases = () => {
    return(
        <>
            <p className='adminpage-title'>
                Suất chiếu hiện có
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Kẻ ẩn danh
                    </div>
                    <div className="admin-table-item table-item-time">
                        10/4/2024
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                    </div>
                    <div className="admin-table-item">
                        Rạp phim Cần Thơ
                    </div>
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
            </div>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        DUNE
                    </div>
                    <div className="admin-table-item table-item-time">
                        12/4/2024
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                        <span>6:30 PM</span>
                    </div>
                    <div className="admin-table-item">
                        Rạp phim HCM
                    </div>
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
            <p className='adminpage-title'>
                Thêm suất chiếu
            </p>
            <div className="form-heading-container">
                <div
                    className="form-movie-add"
                    onSubmit={(e) => {
                    }}
                >
                    <div>
                        <p>Phim:</p>
                        <select className="admin-select-type">
                            <option>
                                Kẻ ẩn danh
                            </option>
                            <option>
                                DUNE
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Lịch chiếu:</p>
                        <select className="admin-select-type">
                            <option>
                                10/4/2024
                            </option>
                            <option>
                                11/4/2024
                            </option>
                            <option>
                                12/4/2024
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Rạp:</p>
                        <select className="admin-select-type">
                            <option>
                               Rạp phim Cần Thơ
                            </option>
                            <option>
                               Rạp phim HCM
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Phòng chiếu:</p>
                        <select className="admin-select-type">
                            <option>
                               CT1
                            </option>
                            <option>
                               CT2
                            </option>
                        </select>
                    </div>
                    <button type="submit" className="btn-admin">
                        Thêm suất
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminCalenderReleases 
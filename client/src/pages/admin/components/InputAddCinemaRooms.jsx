const InputAddCinemaRooms = () => {
    return(
        <div className="add-input-container">
            <input 
                placeholder="Tên Phòng chiếu"
            />
            <input 
                type="number"
                placeholder="Số lượng ghế"
            />
            <button className="btn-admin">
                Thêm phòng chiếu 
            </button>
        </div>
    )
}

export default InputAddCinemaRooms;
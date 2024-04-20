const InputAddCinemas = () => {
    return(
        <div className="add-input-container">
            <input 
                placeholder="Tên rạp phim"
            />
            <input 
                placeholder="Địa chỉ rạp phim"
            />
            <button className="btn-admin">
                Thêm rạp 
            </button>
        </div>
    )
}

export default InputAddCinemas;
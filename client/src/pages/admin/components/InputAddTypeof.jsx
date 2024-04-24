const InputAddTypeof = () => {
    return(
        <div className="add-input-container">
            <input 
                placeholder="Thêm thể loại phim"
            />
            <textarea 
                placeholder="Thêm mô tả"
            />
            <button className="btn-admin">
                Thêm thể loại
            </button>
        </div>
    )
}

export default InputAddTypeof;
import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminCardMovie from "../components/AdminCardMovie";

const AdminFilms = () => {
    const [file, setFile] = useState();
    const handlePreviewImg = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const img="../images/imgCard.jpg";
    const img2="../images/imgCard2.jpg";

    return(
        <>
            <p className='adminpage-title'>
                Thêm - sửa phim
            </p>
            <div className='search-movies-container'>
                <input
                    placeholder='Phim bạn muốn tìm...' 
                />
            </div>
            <div className="newmovie-container">
                <div className="newmovie-container-mobile-pc">
                    <Row>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img}/>
                        </Col>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img2}/>
                        </Col>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img}/>
                        </Col>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img2}/>
                        </Col>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img}/>
                        </Col>
                        <Col xxl={2} xl={3} sm={4}>
                            <AdminCardMovie img={img2}/>
                        </Col>
                    </Row>
                </div>

                <div className="newmovie-container-mobile">
                    <AdminCardMovie img={img}/>  
                    <AdminCardMovie img={img2}/>  
                    <AdminCardMovie img={img}/>  
                    <AdminCardMovie img={img2}/>  
                    <AdminCardMovie img={img2}/>  
                    <AdminCardMovie img={img}/>  
                    <AdminCardMovie img={img2}/>  
                </div>
            </div>
            <div className="form-heading-container">
                <div
                    className="form-movie-add"
                    onSubmit={(e) => {
                    }}
                >
                    <div>
                        <p>Tên phim:</p>
                        <input
                            name="movieName"
                            type="text"
                            placeholder="Nhập tên phim"
                        />
                    </div>

                    <div>
                        <p>Ảnh banner:</p>
                        <input
                            type="file"
                            onChange={(e)=>handlePreviewImg(e)}
                        />
                    </div>
                    {file && (
                        <div className="img-preview-container">
                            <img className="img-preview" src={file} />
                        </div>
                    )}

                    <div>
                        <p>Tóm tắt nội dung phim:</p>
                    <textarea
                        name="description"
                        placeholder="Nhập tóm tắt của nội dung phim"
                    />
                    </div>

                    <div>
                        <p>Thời lượng:</p>
                        <input
                            name="duration"
                            type="number"
                            placeholder="Nhập thời lượng phim (phút)"
                        />
                    </div>

                    <div>
                        <p>Diễn viên chính:</p>
                        <input
                            name="cast"
                            type="text"
                            placeholder="Nhập tên diễn viên chính"
                        />
                    </div>

                    <div>
                        <p>Tác giả:</p>
                        <input
                            name="relDate"
                            type="text"
                            placeholder="Nhập tác giả phim"
                        />
                    </div>

                    <div>
                        <p>Giá:</p>
                        <input
                            name="relDate"
                            type="number"
                            placeholder="Nhập giá vé phim"
                        />
                    </div>

                    <div>
                        <p>Link trailer yotube:</p>
                        <input
                            type="text"
                            placeholder="Vd: https://www.youtube.com/watch?v=9yVmRrrxoOc"
                        />
                        </div>

                    <div>
                        <p>Thể loại phim:</p>
                        <select className="admin-select-type">
                            <option>
                                Hành động
                            </option>
                            <option>
                                Tình cảm
                            </option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn-admin">
                        Thêm phim
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminFilms;
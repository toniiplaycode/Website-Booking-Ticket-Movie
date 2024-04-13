import { useDispatch } from "react-redux";
import { toggleTrailer } from "../reducers/modalTrailer";

const TrailerModal = () => {
  const dispath = useDispatch();

    return(
        <div className="trailer-container">
            <iframe src="https://www.youtube.com/embed/9yVmRrrxoOc?autoplay=1" allow='autoplay' />
            <div className="trailer-infor">
                <img 
                    className="trailer-img"
                    src="./images/imgCard.jpg"
                />
                <div className="trailer-infor-content">
                    <p className="trailer-infor-title"> 
                        Kẻ ẩn danh 
                        <span className="trailer-infor-type"> - Hành động, tình cảm </span>
                    </p>
                    <p className="trailer-infor-descri"> 
                        Khiêm tốn và từng là giang hồ, người đàn ông nọ đối mặt với quá khứ rắc rối của mình và trở lại thế giới ngầm sau khi một băng tội phạm bắt cóc con gái riêng của vợ anh. 
                    </p>
                    <div className="trailer-infor-btn">
                        <button>
                            Đặt vé
                        </button>
                        <button
                            onClick={() => {
                                dispath(toggleTrailer());
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrailerModal;
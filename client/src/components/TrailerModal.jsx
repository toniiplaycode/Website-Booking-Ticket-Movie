import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTrailer } from "../reducers/modalTrailer";

const TrailerModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const film = useSelector((state) => state.modalTrailer.film);

    const youtubeVideoID = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?#]+)/);
        if (match && match[1]) {
        return match[1];
        } else {
        return null;
        }
    }

    const src = `https://www.youtube.com/embed/${youtubeVideoID(film.trailer)}?autoplay=1`;

    return(
        <div className="trailer-container">
            <iframe src={src} allow='autoplay' />
            <div className="trailer-infor">
                <img 
                    className="trailer-img"
                    src={film.image}
                />
                <div className="trailer-infor-content">
                    <p className="trailer-infor-title"> 
                        {film.nameFilm} 
                    </p>
                    <p className="trailer-infor-descri"> 
                        {film.description}
                    </p>
                    <div className="trailer-infor-btn">
                        <button
                            onClick={() => {
                                navigate('/purchase')
                                dispatch(toggleTrailer());
                            }}
                        >
                            Đặt vé
                        </button>
                        <button
                            onClick={() => {
                                dispatch(toggleTrailer());
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
import { faCalendarDays, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardMovie = ({ img }) => {
    return(
        <div className="item-container"> 
            <div className="item-img">
                <img
                    className="img-card"
                    src={img}
                />
            </div>
            <div className="item-name-rating">
                <p className="item-name">
                    Kẻ ẩn danh
                </p>
                <p className="item-rating">
                    <FontAwesomeIcon className="card-icon" icon={faStar} /> 
                    9.5
                </p>
            </div>
            <div className="item-typeof">
                Hành động, tình cảm
            </div>
            <div className="item-date-duration">
                <p>
                    <FontAwesomeIcon className="card-icon" icon={faCalendarDays} />
                    10/4/2024
                </p>
                <p>
                    <FontAwesomeIcon className="card-icon" icon={faClock} />
                    2h 45m
                </p>
            </div>
        </div>
    )
}

export default CardMovie;
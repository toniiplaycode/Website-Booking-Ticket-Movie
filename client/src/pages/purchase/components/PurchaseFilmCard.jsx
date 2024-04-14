import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PurchaseFilmCard = ({ selected }) => {
    return(
        <div className="purchase-film-item">
            {
                selected && <FontAwesomeIcon icon={faCircleCheck} className="purchase-film-item-ticked" />
            }
            <img 
                className={selected && "active"}
                src="./images/imgCard.jpg"
            />
            <p className="purchase-film-item-title">
                Kẻ ẩn danh
            </p>
        </div>
    )
}

export default PurchaseFilmCard;
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { hanleSelectedFilm } from "../../../reducers/selectedPurchaseFilm";
import { handleClearSelectedCrWithFilm } from "../../../reducers/selectedCrWithFilm";
import { handleClearSelectedSeats } from "../../../reducers/selectedSeats";
import { handleClearSelectedCinemaDetail } from "../../../reducers/apiCinema";

const PurchaseFilmCard = ({ item }) => {
  const dispatch = useDispatch();
  let selectedFilm = useSelector(
    (state) => state.selectedPurchaseFilm.selectedFilm
  );

  return (
    <div
      className="purchase-film-item"
      onClick={() => {
        dispatch(hanleSelectedFilm(item));
        dispatch(handleClearSelectedCrWithFilm());
        dispatch(handleClearSelectedSeats());
        dispatch(handleClearSelectedCinemaDetail());
      }}
    >
      {selectedFilm.id == item.id && (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="purchase-film-item-ticked"
        />
      )}
      <img
        className={selectedFilm.id == item.id && "active"}
        src={item.image}
      />
      <p className="purchase-film-item-title">{item.nameFilm.toUpperCase()}</p>
    </div>
  );
};

export default PurchaseFilmCard;

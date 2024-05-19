import CollectionTimeItem from "./CollectionTimeItem";
import { formatMoney } from "../utils/functionCommon";

const CollectionTime = ({ filmDetail, grouped, statusCrWithFilm }) => {
  const price =
    (filmDetail && filmDetail.price && formatMoney(filmDetail.price)) || "...";

  return (
    <div className="collection-item-time">
      <div className="collection-item-title">
        <p className="title-time-movies">Chọn thời gian chiếu</p>
        {statusCrWithFilm == "succeeded" && (
          <CollectionTimeItem grouped={grouped} />
        )}
        <div className="collection-item-price">
          <p className="item-price-title">Giá vé</p>
          <p className="item-price">{price}</p>
        </div>
      </div>
    </div>
  );
};
export default CollectionTime;

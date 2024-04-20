import CollectionTimeItem from "./CollectionTimeItem";

const CollectionTime = () => {
    
    return(
        <div className="collection-item-time">  
            <div className='collection-item-title'>
                <p className='title-time-movies'>Thời gian chiếu</p>
                <CollectionTimeItem/>
                <div className="collection-item-price">
                    <p className="item-price-title">Giá vé</p>
                    <p className="item-price">60.000đ</p>
                </div>
            </div>
        </div>
    )
}
export default CollectionTime;
import TimeItem from "./TimeItem";

const CollectionTimeItem = ({ grouped }) => {
    
    return(
        <div className='time-date-container'>
            {grouped && 
                 Object.entries(grouped).map(([key, value]) => {
                    return <TimeItem name={key} item={value}/>
            })
            }
        </div>
    )
}

export default CollectionTimeItem;
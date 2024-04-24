import { useNavigate } from "react-router-dom";

const TimeItem = ({ name, item }) => {
    const navigate = useNavigate();

    return(
        <div className='time-movie-container'>
            <p className='each-date'>{name}</p>
            {item.map((item, index) =>
                <button className='each-btn-common'
                    onClick={() => 
                        navigate("/purchase")
                    }
                >
                    {item.showTimeStart}
                </button>
            )}
        </div>
    )
}

export default TimeItem;
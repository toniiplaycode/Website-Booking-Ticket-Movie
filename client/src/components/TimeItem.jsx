import { useNavigate } from "react-router-dom";

const TimeItem = () => {
    const navigate = useNavigate();

    return(
        <div className='time-movie-container'>
            <p className='each-date'>10 tháng 4, 2024</p>
            <button className='each-btn-common'
                onClick={() => 
                    navigate("/purchase")
                }
            >
                2:30 pm
            </button>
            <button className='each-btn-common'
                onClick={() => 
                    navigate("/purchase")
                }
            >
                4:30 pm
            </button>
        </div>
    )
}

export default TimeItem;
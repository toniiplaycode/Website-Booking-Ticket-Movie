import { useNavigate } from "react-router-dom";

const CollectionTime = () => {
    const navigate = useNavigate();
    
    return(
        <div className="collection-item-time">  
            <div className='collection-item-title'>
                <p className='title-time-movies'>Thời gian chiếu</p>
                <div className='time-date-container'>
                    <div className='time-movie-container'>
                        <p className='each-date'>10 tháng 4, 2024</p>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            2:30 pm
                        </button>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            4:30 pm
                        </button>
                    </div>
                    <div className='time-movie-container'>
                        <p className='each-date'>10 tháng 4, 2024</p>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            2:30 pm
                        </button>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            4:30 pm
                        </button>
                    </div>
                    <div className='time-movie-container'>
                        <p className='each-date'>10 tháng 4, 2024</p>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            2:30 pm
                        </button>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            4:30 pm
                        </button>
                    </div>
                    <div className='time-movie-container'>
                        <p className='each-date'>10 tháng 4, 2024</p>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            2:30 pm
                        </button>
                        <button className='each-time-btn'
                            onClick={() => 
                                navigate("/purchase")
                            }
                        >
                            4:30 pm
                        </button>
                    </div>
                </div>
                <div className="collection-item-price">
                    <p className="item-price-title">Giá vé</p>
                    <p className="item-price">60.000đ</p>
                </div>
            </div>
        </div>
    )
}
export default CollectionTime;
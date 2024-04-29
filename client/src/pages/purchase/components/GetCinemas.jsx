import axios from "axios";
import { useEffect, useState } from "react";
import GetRoomCinemas from "./GetRoomCinemas";

const GetCinemas = () => {
    const [cinema, setCinema] = useState();

    // lấy tất cả rạp chiếu
    useEffect(()=>{
        const getCinemas = async () => {
            try{
                const res = await axios.get("http://localhost:8000/api/cinema/getAll");
                setCinema(res.data.all);
            }catch(error) {
                console.log("eror from fetch cinema !!!: ", error);
            }
        }
        getCinemas();
    }, [])

    return(
        <>
            <div className="admin-table-container">
                {cinema && cinema.map((item, index) => (
                    <div className="admin-table-parent admin-table-parent-use-client" key={index}>
                        <div className="admin-table-item admin-table-use-client">
                            {item.nameCinema}
                        </div>
                        <div className="admin-table-item admin-table-use-client">
                            {item.address}
                        </div>
                        <div className="admin-table-item admin-table-use-client room-flex-more">
                            <GetRoomCinemas cinemaId={item.id}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GetCinemas;
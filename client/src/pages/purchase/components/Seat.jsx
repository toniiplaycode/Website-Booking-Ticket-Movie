import { useDispatch, useSelector } from "react-redux";
import { handleSelectedSeats } from "../../../reducers/selectedSeats";

const Seat = ({ numberSeat, status }) => {
    const dispatch = useDispatch();
    
    const selectedSeats = useSelector((state) => state.selectedSeats.selectedSeats);
    
    let isSelected = selectedSeats.includes(numberSeat);

    if(isSelected) {
        status = "selected";
    } 
        
    return(
        <div 
            className={
                status == "selected" ? "seat-item selected" 
                : status == "booked" ? "seat-item booked" : "seat-item"
            }
            onClick={()=>{
                !(status == "booked") && dispatch(handleSelectedSeats(numberSeat));
            }}
        >
          {numberSeat}
        </div>
    )
}

export default Seat;    
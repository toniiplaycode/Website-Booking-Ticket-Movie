const Seat = ({ numberSeat, status }) => {
    return(
        <div 
            className={
                status == "selected" ? "seat-item selected" 
                : status == "booked" ? "seat-item booked" : "seat-item"
            }
        >
          {numberSeat}
        </div>
    )
}

export default Seat;    
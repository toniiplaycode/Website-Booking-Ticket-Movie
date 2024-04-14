import Seat from "./Seat";

const SeatSelect = () => {
    // khi nào có BE thì xoá này
    var alphabet = ["A", "B", "C", "D", "E"];
    var hardCodeSeat = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < 50) {
      if(j < 10) {
        hardCodeSeat[i] = alphabet[k] + (j+1);
        j++;
        i++;
      } else if(k<5) {
        k++;
        j=0;
      }
    }
    //


    return(
        <>
          <div className="seat-guide-container">
            <div className="seat-available-demo"></div>
            <p className="seat-status-details">Sẵn</p>
            <div className="seat-booked-demo"></div>
            <p className="seat-status-details">Đã đặt</p>
            <div className="seat-selected-demo"></div>
            <p className="seat-status-details">Chọn</p>
          </div>
          <div className="theatre-screen">
            <div className="screen-1"></div>
            <div className="screen-2"></div>
          </div>
          <div className="theatre-screen-heading">Màn hình chiếu</div>
          <div className="seat-container-center">
            <div className="seat-container">
              {
                hardCodeSeat.map((item, index) => {
                    if (item == "A2") 
                    return <Seat numberSeat={item} status={"selected"} />
                    if (item == "A1") 
                    return <Seat numberSeat={item} status={"selected"} />
                    else if (item == "A3")
                    return <Seat numberSeat={item} status={"booked"} />
                    else
                    return <Seat numberSeat={item} />
                } )
              }
            </div>
          </div>
        </>
    )
}

export default SeatSelect;
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import CollectionTimeItem from "../../../components/CollectionTimeItem";

const AdminShowtimes = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const fullDate = (`${date.$D}/${date.$M + 1}/${date.$y}`);
        console.log(fullDate);
    };

    const [selectedTime, setSelectedTime] = useState(null);
    const handleTimeChange = (time) => {
        setSelectedTime(time);
        // Check if time is not null before logging
        if (time) {
          const hours = time.$H;
          const minutes = time.$m;
          const formattedHours = hours % 12 || 12;
          const ampm = hours >= 12 ? 'PM' : 'AM';
          console.log(`${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`);
        }
    };

    return(
        <>
            <p className='adminpage-title'>
                Lịch chiếu phim hiện có
            </p>
            
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        10/4/2024
                    </div>
                    <div className="admin-table-item table-item-time">
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        11/4/2024
                    </div>
                    <div className="admin-table-item table-item-time">
                        <span>2:30 PM</span>
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        12/4/2024
                    </div>
                    <div className="admin-table-item table-item-time">
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                        <span>6:30 PM</span>
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
            </div>

            <div className='admin-picker'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Chọn ngày"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className='admin-picker-item'
                    />
                    <TimePicker label="Chọn giờ" 
                        value={selectedTime}
                        onChange={handleTimeChange}
                        className='admin-picker-item'
                    />
                </LocalizationProvider>
            </div>
            
            <button type="submit" className="btn-admin">
                Thêm lịch
            </button>
        </>
    )
}

export default AdminShowtimes;
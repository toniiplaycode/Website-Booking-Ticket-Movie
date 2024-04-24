import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";

const AdminCalenderReleases = () => {
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
                Suất chiếu hiện có
            </p>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        Kẻ ẩn danh
                    </div>
                    <div className="admin-table-item table-item-time">
                        10/4/2024
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                    </div>
                    <div className="admin-table-item">
                        Rạp phim Cần Thơ
                    </div>
                    <div className="admin-table-item">
                        Phòng CT1
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Sửa
                        </button>
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
            <div className="admin-table-container">
                <div className="admin-table-parent">
                    <div className="admin-table-item">
                        DUNE
                    </div>
                    <div className="admin-table-item table-item-time">
                        12/4/2024
                        <span>2:30 PM</span>
                        <span>4:30 PM</span>
                        <span>6:30 PM</span>
                    </div>
                    <div className="admin-table-item">
                        Rạp phim HCM
                    </div>
                    <div className="admin-table-item">
                        Phòng CT2
                    </div>
                    <div className="admin-table-handle">
                        <button>
                            Sửa
                        </button>
                        <button>
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
            <p className='adminpage-title'>
                Thêm suất chiếu
            </p>
            <div className="form-heading-container">
                <div
                    className="form-movie-add"
                    onSubmit={(e) => {
                    }}
                >
                    <div>
                        <p>Phim:</p>
                        <select className="admin-select-type">
                            <option>
                                Kẻ ẩn danh
                            </option>
                            <option>
                                DUNE
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Ngày và giờ:</p>
                        
                        <div className='admin-picker-film'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Chọn ngày"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    className='admin-picker-film-item'
                                />
                                <TimePicker label="Chọn giờ" 
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    className='admin-picker-film-item'
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div>
                        <p>Rạp:</p>
                        <select className="admin-select-type">
                            <option>
                               Rạp phim Cần Thơ
                            </option>
                            <option>
                               Rạp phim HCM
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Phòng chiếu:</p>
                        <select className="admin-select-type">
                            <option>
                               CT1
                            </option>
                            <option>
                               CT2
                            </option>
                        </select>
                    </div>
                    <button type="submit" className="btn-admin">
                        Thêm suất
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminCalenderReleases 
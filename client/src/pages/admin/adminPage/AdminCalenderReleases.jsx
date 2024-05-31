import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCr, postAddCr } from "../../../reducers/apiAdminCr";
import axios from "axios";
import AdminCrItem from "../components/AdminCrItem";
import { fetchCinemaDetail } from "../../../reducers/apiCinema";
import { toast } from "react-toastify";
import AlertDialog from "../../../components/AlertDialog";
import Loading from "../../../components/Loading";
import { fetchAllCinemaRoom } from "../../../reducers/apiCinemaRoom";

const AdminCalenderReleases = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [selectDate, setSelectDate] = useState(null);
  const handleDateChange = (date) => {
    setDate(date);
    setSelectDate(`${date.$D}/${date.$M + 1}/${date.$y}`);
  };

  const [time, setTime] = useState(null);
  const [selectTime, setSelectTime] = useState(null);
  const handleTimeChange = (time) => {
    setTime(time);
    // Check if time is not null before logging
    if (time) {
      const hours = time.$H;
      const minutes = time.$m;
      setSelectTime(
        `${hours < 10 ? "0" + hours : hours}:${
          minutes < 10 ? "0" + minutes : minutes
        }`
      );
    }
  };

  const listAllCinemaRoom = useSelector(
    (state) => state.apiCinemaRoom.listAllCinemaRoom
  );
  const [groupCr, setGroupCr] = useState();
  const listAllCr = useSelector((state) => state.apiAdminCr.listAllCr);
  const statuslistAllCr = useSelector(
    (state) => state.apiAdminCr.statuslistAllCr
  );
  let films = useSelector((state) => state.films.films.all);
  let CinemaDetail = useSelector((state) => state.apiCinema.CinemaDetail);
  let statusPostAddCr = useSelector(
    (state) => state.apiAdminCr.statusPostAddCr
  );
  const [selectedRoomCinema, setSelectedRoomCinema] = useState();
  const [selectedIdFilm, setSelectedIdFilm] = useState();

  useEffect(() => {
    dispatch(fetchAllCr());
  }, []);

  useEffect(() => {
    // nhóm các lịch chiếu phim theo từng phim
    const groupElementsByFilmId = async (data) => {
      let groupedData = {};
      const axiosPromises = data.map(async (element) => {
        try {
          const res = await axios.get(
            `http://localhost:8000/api/film/getDetail?id=${element.filmId}`
          );
          const filmName = res.data.data[0].nameFilm;
          if (!groupedData[filmName]) {
            groupedData[filmName] = [];
          }
          groupedData[filmName].push(element);
        } catch (error) {
          console.error(
            `Error fetching film details for filmId ${element.filmId}:`,
            error
          );
        }
      });

      // Đợi cho tất cả các promise hoàn thành
      await Promise.all(axiosPromises);
      setGroupCr(groupedData);
      return groupedData;
    };

    groupElementsByFilmId(listAllCr);
  }, [listAllCr]);

  useEffect(() => {
    dispatch(fetchAllCinemaRoom());
  }, []);

  useEffect(() => {
    if (selectedRoomCinema) {
      dispatch(fetchCinemaDetail(selectedRoomCinema.CinemaId));
    }
  }, [selectedRoomCinema]);

  const handleAddCr = () => {
    if (
      !selectedRoomCinema ||
      !selectedRoomCinema.id ||
      !selectedIdFilm ||
      !selectTime ||
      !selectDate
    ) {
      toast.warning("Vui lòng điền đủ thông tin !");
      return;
    }

    const obj = {
      nameCalendarRelease: "...",
      cinemaRoomId: selectedRoomCinema.id,
      filmId: selectedIdFilm,
      showTimeStart: selectTime,
      dateWatch: selectDate,
    };

    dispatch(postAddCr(obj));
  };

  useEffect(() => {
    if (statusPostAddCr == "succeeded") {
      setSelectedRoomCinema("");
      setSelectedIdFilm("");
      setTime(null);
      setDate(null);
    }
  }, [statusPostAddCr]);

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Suất chiếu hiện có</p>
      {statuslistAllCr == "loading" && <Loading />}
      {groupCr &&
        Object.entries(groupCr).map(([filmName, schedules], index) => (
          <div key={index}>
            <p className="admin-table-group-tile">{filmName.toUpperCase()}</p>
            {schedules.map((item, subIndex) => (
              <AdminCrItem item={item} key={subIndex} />
            ))}
          </div>
        ))}
      <p className="adminpage-title">Thêm suất chiếu</p>
      <div className="form-heading-container">
        <div className="form-movie-add" onSubmit={(e) => {}}>
          <div>
            <p>Phim:</p>
            <select
              className="admin-select-type"
              onChange={(e) => setSelectedIdFilm(e.target.value)}
              value={selectedIdFilm}
            >
              <option value=""></option>
              {films &&
                films.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nameFilm.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <p>Ngày và giờ:</p>

            <div className="admin-picker-film">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Chọn ngày"
                  value={date}
                  onChange={handleDateChange}
                  className="admin-picker-film-item"
                />
                <TimePicker
                  label="Chọn giờ"
                  value={time}
                  ampm={false}
                  onChange={handleTimeChange}
                  className="admin-picker-film-item"
                />
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <p>Phòng chiếu:</p>
            <select
              className="admin-select-type"
              onChange={(e) => {
                setSelectedRoomCinema(JSON.parse(e.target.value));
              }}
              value={selectedRoomCinema ? selectedRoomCinema.nameCinema : ""}
            >
              <option value="" disabled></option>
              {listAllCinemaRoom &&
                listAllCinemaRoom.map((item, index) => (
                  <option key={index} value={JSON.stringify(item)}>
                    {item.nameCinemaRoom}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <p>Rạp:</p>
            <input
              value={
                selectedRoomCinema && CinemaDetail
                  ? CinemaDetail.nameCinema
                  : ""
              }
              readonly
            />
          </div>
          <button
            type="submit"
            className="btn-admin"
            onClick={() => handleAddCr()}
          >
            Thêm suất
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminCalenderReleases;

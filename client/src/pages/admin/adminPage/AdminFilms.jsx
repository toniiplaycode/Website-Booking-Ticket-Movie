import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminCardMovie from "../components/AdminCardMovie";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { fetchFilms, postFilms, putFilms } from "../../../reducers/apiFilms";
import AlertDialog from "../../../components/AlertDialog";
import dayjs from "dayjs";

const AdminFilms = () => {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState(null);
  const [selectedReleaseDate, setSelectedReleaseDate] = useState("");
  const [cast, setCast] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [genre, setGenre] = useState("Hành động");
  const [language, setLanguage] = useState("Phụ đề tiếng Việt");
  const [errors, setErrors] = useState({
    file: "",
    movieName: "",
    description: "",
    duration: "",
    releaseDate: "",
    cast: "",
    author: "",
    price: "",
    trailerLink: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState(null);

  const statusPost = useSelector((state) => state.films.statusPost);
  const statusPut = useSelector((state) => state.films.statusPut);
  const listTypeof = useSelector((state) => state.apiAdminTypeof.listTypeof);

  const handlePreviewImg = (e) => {
    e && setFile(URL.createObjectURL(e.target.files[0]));

    if (errors.file) {
      setErrors({ ...errors, file: "" });
    }
  };

  const handleDateChange = (date) => {
    setReleaseDate(date);
    const fullDate = `${date.$D}/${date.$M + 1}/${date.$y}`;
    setSelectedReleaseDate(fullDate);

    if (errors.releaseDate) {
      setErrors({ ...errors, releaseDate: "" });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!file) newErrors.file = "Vui lòng thêm ảnh";
    if (!movieName) newErrors.movieName = "Vui lòng nhập tên phim";
    if (!description)
      newErrors.description = "Vui lòng nhập tóm tắt nội dung phim";
    if (!duration) newErrors.duration = "Vui lòng nhập thời lượng phim";
    if (!releaseDate) newErrors.releaseDate = "Vui lòng chọn ngày công chiếu";
    if (!cast) newErrors.cast = "Vui lòng nhập tên diễn viên chính";
    if (!author) newErrors.author = "Vui lòng nhập tác giả phim";
    if (!price) newErrors.price = "Vui lòng nhập giá vé phim";
    if (!trailerLink) newErrors.trailerLink = "Vui lòng nhập link trailer";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData();
      formData.append("nameFilm", movieName);
      formData.append("description", description);
      formData.append("nameTypeFilm", genre);
      formData.append("time", duration);
      formData.append("author", author);
      formData.append("actor", cast);
      formData.append("trailer", trailerLink);
      formData.append("price", price);
      formData.append("language", language);
      formData.append("releaseDate", selectedReleaseDate);
      formData.append("image", image);
      if (isEditing) {
        formData.append("id", editingFilmId);
        dispatch(putFilms(formData));
        setIsEditing(false);
      } else {
        dispatch(postFilms(formData));
      }
    }
  };

  // check thêm các format ngày
  const parseDate = (dateStr) => {
    const date1 = dayjs(dateStr, "DD/MM/YYYY", true);
    if (date1.isValid()) {
      return date1;
    }
    const date2 = dayjs(dateStr, "D/M/YYYY", true);
    if (date2.isValid()) {
      return date2;
    }
    const date3 = dayjs(dateStr, "DD/M/YYYY", true);
    if (date3.isValid()) {
      return date3;
    }
    const date4 = dayjs(dateStr, "D/MM/YYYY", true);
    if (date4.isValid()) {
      return date4;
    }
    return null;
  };

  const handleEdit = (film) => {
    const validDate = parseDate(film.releaseDate);

    setReleaseDate(validDate);
    setSelectedReleaseDate(film.releaseDate);
    setMovieName(film.nameFilm);
    setDescription(film.description);
    setDuration(film.time);
    setCast(film.actor);
    setAuthor(film.author);
    setPrice(film.price);
    setTrailerLink(film.trailer);
    setGenre(film.nameTypeFilm);
    setLanguage(film.language);
    setFile(film.image);
    setEditingFilmId(film.id);
    setIsEditing(true);
  };

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  let films = useSelector((state) => state.films.films.all);
  const status = useSelector((state) => state.films.status);
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (films) {
      const filtered = films.filter((item) => {
        if (search === "") {
          return true;
        }
        return (
          !search || item.nameFilm.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFilteredFilms(filtered);
    }
  }, [films, search]);

  useEffect(() => {
    if (statusPost == "succeeded" || statusPut == "succeeded") {
      setFile("");
      setImage("");
      setMovieName("");
      setDescription("");
      setDuration("");
      setReleaseDate(null);
      setSelectedReleaseDate("");
      setCast("");
      setAuthor("");
      setPrice("");
      setTrailerLink("");
      setGenre("Hành động");
      setLanguage("Phụ đề tiếng Việt");
      setEditingFilmId(null);
      setIsEditing(false);
    }
  }, [statusPost, statusPut]);

  return (
    <>
      <AlertDialog />
      <p className="adminpage-title">Thêm - sửa phim</p>
      <div className="search-movies-container">
        <input
          placeholder="Phim bạn muốn tìm..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="newmovie-container">
        <div className="newmovie-container-mobile-pc">
          <Row>
            {status == "loading" && <Loading />}
            {status == "succeeded" &&
              search.length == 0 &&
              filteredFilms.map((item, index) => {
                return (
                  <Col xxl={2} xl={3} sm={4} key={index}>
                    <AdminCardMovie
                      item={item}
                      onEdit={() => handleEdit(item)}
                      targetRef={targetRef}
                    />
                  </Col>
                );
              })}
            {status == "succeeded" &&
              search.length != 0 &&
              filteredFilms.map((item, index) => {
                return (
                  <Col key={index}>
                    <AdminCardMovie
                      item={item}
                      onEdit={() => handleEdit(item)}
                    />
                  </Col>
                );
              })}
            {filteredFilms.length == 0 && (
              <div className="warning-search">Không có phim nào !</div>
            )}
          </Row>
        </div>

        <div className="newmovie-container-mobile">
          {status == "loading" && <Loading />}
          {status == "succeeded" &&
            filteredFilms.map((item, index) => (
              <AdminCardMovie
                item={item}
                key={index}
                onEdit={() => handleEdit(item)}
              />
            ))}
        </div>
      </div>
      <div className="form-heading-container"
        ref={targetRef}
      >
        <div className="form-movie-add">
          <div>
            <p>Tên phim:</p>
            <input
              name="movieName"
              type="text"
              placeholder="Nhập tên phim"
              value={movieName}
              onChange={(e) => {
                setMovieName(e.target.value);
                if (errors.movieName) setErrors({ ...errors, movieName: "" });
              }}
            />
          </div>
          {errors.movieName && (
            <p className="error-admin-film">{errors.movieName}</p>
          )}

          <div>
            <p>Ảnh poster:</p>
            <input
              type="file"
              onChange={(e) => {
                handlePreviewImg(e);
                setImage(e.target.files[0]);
                // console.log(e.target.files[0]);
              }}
            />
          </div>
          {file && (
            <div className="img-preview-container">
              <img className="img-preview" src={file} />
            </div>
          )}
          {errors.file && <p className="error-admin-film">{errors.file}</p>}

          <div>
            <p>Tóm tắt nội dung phim:</p>
            <textarea
              name="description"
              placeholder="Nhập tóm tắt của nội dung phim"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description)
                  setErrors({ ...errors, description: "" });
              }}
            />
          </div>
          {errors.description && (
            <p className="error-admin-film">{errors.description}</p>
          )}

          <div>
            <p>Thời lượng:</p>
            <input
              name="duration"
              type="number"
              placeholder="Nhập thời lượng phim (phút)"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
                if (errors.duration) setErrors({ ...errors, duration: "" });
              }}
            />
          </div>
          {errors.duration && (
            <p className="error-admin-film">{errors.duration}</p>
          )}

          <div>
            <p>Ngày công chiếu:</p>
            <div className="admin-picker-film">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Chọn ngày"
                  value={releaseDate}
                  onChange={handleDateChange}
                  className="admin-picker-film-item"
                />
              </LocalizationProvider>
            </div>
          </div>
          {errors.releaseDate && (
            <p className="error-admin-film">{errors.releaseDate}</p>
          )}

          <div>
            <p>Diễn viên chính:</p>
            <input
              name="cast"
              type="text"
              placeholder="Nhập tên diễn viên chính"
              value={cast}
              onChange={(e) => {
                setCast(e.target.value);
                if (errors.cast) setErrors({ ...errors, cast: "" });
              }}
            />
          </div>
          {errors.cast && <p className="error-admin-film">{errors.cast}</p>}

          <div>
            <p>Tác giả:</p>
            <input
              name="author"
              type="text"
              placeholder="Nhập tác giả phim"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
                if (errors.author) setErrors({ ...errors, author: "" });
              }}
            />
          </div>
          {errors.author && <p className="error-admin-film">{errors.author}</p>}

          <div>
            <p>Giá:</p>
            <input
              name="price"
              type="number"
              placeholder="Nhập giá vé phim"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (errors.price) setErrors({ ...errors, price: "" });
              }}
            />
          </div>
          {errors.price && <p className="error-admin-film">{errors.price}</p>}

          <div>
            <p>Link trailer yotube:</p>
            <input
              name="trailerLink"
              type="text"
              placeholder="Vd: https://www.youtube.com/watch?v=9yVmRrrxoOc"
              value={trailerLink}
              onChange={(e) => {
                setTrailerLink(e.target.value);
                if (errors.trailerLink)
                  setErrors({ ...errors, trailerLink: "" });
              }}
            />
          </div>
          {errors.trailerLink && (
            <p className="error-admin-film">{errors.trailerLink}</p>
          )}

          <div>
            <p>Thể loại phim:</p>
            <select
              className="admin-select-type"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
              {listTypeof.map((item, index) => (
                <option key={index}>{item.nameTypeFilm}</option>
              ))}
            </select>
          </div>

          <div>
            <p>Ngôn ngữ:</p>
            <select
              className="admin-select-type"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>Phụ đề tiếng Việt</option>
              <option>Lồng tiếng Việt</option>
            </select>
          </div>

          <button className="btn-admin" onClick={handleSubmit}>
            {isEditing ? "Cập nhật phim" : "Thêm phim"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminFilms;

import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminCardMovie from "../components/AdminCardMovie";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { fetchFilms, postFilms } from "../../../reducers/apiFilms";
import AlertDialog from "../../../components/AlertDialog";

const AdminFilms = () => {
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

  const token = useSelector((state) => state.apiLoginLogout.token);
  const statusPost = useSelector((state) => state.films.statusPost);
  const listTypeof = useSelector((state) => state.apiAdminTypeof.listTypeof);

  const handlePreviewImg = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));

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
    // Kiểm tra các trường không được để trống
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

      dispatch(postFilms(formData));
    }
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
    if (statusPost == "succeeded") {
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
    }
  }, [statusPost]);

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
              filteredFilms.map((item, index) => {
                if (search.length > 0) {
                  return (
                    <Col>
                      <AdminCardMovie item={item} key={index} />
                    </Col>
                  );
                } else {
                  return (
                    <Col xxl={2} xl={3} sm={4}>
                      <AdminCardMovie item={item} key={index} />
                    </Col>
                  );
                }
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
              <AdminCardMovie item={item} key={index} />
            ))}
        </div>
      </div>
      <div className="form-heading-container">
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
            <p>Ảnh banner:</p>
            <input
              type="file"
              onChange={(e) => {
                handlePreviewImg(e);
                setImage(e.target.files[0]);
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
            Thêm phim
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminFilms;

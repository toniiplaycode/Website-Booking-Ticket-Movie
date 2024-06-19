import Container from "react-bootstrap/esm/Container";
import CardMovie from "./CardMovie";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilms } from "../reducers/apiFilms";
import Loading from "./Loading";

const CardMovieCollection = ({ titleCardCollection }) => {
  const dispatch = useDispatch();
  let films = useSelector((state) => state.films.films.all);
  const status = useSelector((state) => state.films.status);
  const error = useSelector((state) => state.films.error);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const isMoviesDetail = () => {
    return window.location.pathname.endsWith("/moviesDetail");
  };

  // nếu ở trang moviesDetail thì mới dùng state của apiFilmDetail
  const selectFilmDetail = (state) => {
    if (isMoviesDetail()) {
      return state.apiFilmDetail.films;
    }
    return null;
  };

  const apiFilmDetail = useSelector(selectFilmDetail);

  //lọc phim đang xem chi tiết
  if (apiFilmDetail && Array.isArray(films)) {
    films = films.filter((item) => item.id != apiFilmDetail.id);
  }

  return (
    <section className="newmovie-container">
      <p className="newmovie-title">{titleCardCollection}</p>
      <Container className="newmovie-container-mobile-pc">
        <Row>
          {status == "loading" && <Loading />}
          {status == "succeeded" &&
            films.map((item, index) => (
              <Col xxl={2} xl={3} sm={4} key={index}>
                <CardMovie item={item} />
              </Col>
            ))}
        </Row>
      </Container>

      <div className="newmovie-container-mobile">
        {status == "loading" && <Loading />}
        {status == "succeeded" &&
          films.map((item, index) => (
            <Col xxl={2} xl={3} sm={4} key={index}>
              <CardMovie item={item} />
            </Col>
          ))}
      </div>
    </section>
  );
};
export default CardMovieCollection;

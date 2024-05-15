import CardMovieCollection from "../../components/CardMovieCollection";
import Comments from "./components/Comments";
import MoviesDetailInfor from "./components/MoviesDetailInfor";

const MoviesDetailPage = () => {
  const titleCardCollection = "Phim khác";

  window.scrollTo(0, 0);

  return (
    <>
      <MoviesDetailInfor />
      <Comments />
      <CardMovieCollection titleCardCollection={titleCardCollection} />
    </>
  );
};

export default MoviesDetailPage;

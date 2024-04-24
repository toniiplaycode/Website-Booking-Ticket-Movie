import CardMovieCollection from "../../components/CardMovieCollection";
import MoviesDetailInfor from "./components/MoviesDetailInfor";

const MoviesDetailPage = () => {
    const titleCardCollection = "Phim khác";
    
    window.scrollTo(0, 0);
    
    return (
        <>
            <MoviesDetailInfor />
            <CardMovieCollection titleCardCollection={titleCardCollection} />
        </>
    )
}

export default MoviesDetailPage;
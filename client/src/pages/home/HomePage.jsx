import Banner from "./components/Banner";
import Introduce from "./components/Introduce";
import CardMovieCollection from "../../components/CardMovieCollection";

const HomePage = () => {
    const titleCardCollection = "Phim mới nhất";

    return(
        <>
            <Banner />
            <CardMovieCollection titleCardCollection={titleCardCollection} />
            <Introduce />
        </>
    )   
}

export default HomePage; 
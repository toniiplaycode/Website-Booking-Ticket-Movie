import Banner from "./components/Banner";
import Introduce from "./components/Introduce";
import NewMovies from "./components/NewMovies";

const HomePage = () => {
    return(
        <>
            <Banner />
            <NewMovies />
            <Introduce />
        </>
    )   
}

export default HomePage;
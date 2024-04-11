import Container from 'react-bootstrap/Container';
import SectionMovieCollection from '../../../components/SectionMovieCollection';

const MoviesCollection = () => {

    const img = './images/imgCard.jpg';
    const img2 = './images/imgCard2.jpg';

    return(
        <div className="movies-backdrop">
            <Container>
                <SectionMovieCollection img={img} name={"Kẻ ẩn danh"} />
                <SectionMovieCollection img={img2} name={"DUNE"} />
            </Container>
        </div>
    )
}

export default MoviesCollection;
import Container from 'react-bootstrap/Container';
import SectionMovieCollection from '../../../components/SectionMovieCollection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const MoviesCollection = () => {
    const dispath = useDispatch();
    let films = useSelector((state) => state.films.films.all);
    const status = useSelector((state) => state.films.status);
    const [filteredFilms, setFilteredFilms] = useState([]);
    
    const search = useSelector((state) => state.searchFilm.search);
    const selected = useSelector((state) => state.selectedTypeFilm.selected);

    // Lọc danh sách phim dựa trên search
    useEffect(() => {
        if (films) {
            const filtered = films.filter(item => {
                if (search === '') {
                    return true;
                }
                return !search || item.nameFilm.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredFilms(filtered);
        }
    }, [films, search]);

    // Lọc danh sách phim dựa trên selected
    useEffect(() => {
        if (films && selected) {
            if(selected.toLowerCase() == "tất cả") {
                setFilteredFilms(films);
            } else {
                const filtered = films.filter(item => {
                    return item.nameTypeFilm.includes(selected);
                });
                setFilteredFilms(filtered);
            } 
        }
    }, [films, selected]);


    return(
        <div className="movies-backdrop">
            <Container>
                {status=="succeeded" && filteredFilms.map((item, index) =>
                    <SectionMovieCollection key={index} item={item} />
                )
                }
                {filteredFilms.length == 0 && (
                    <div className='warning-search'>
                        Không có phim nào !
                    </div>
                )}
            </Container>
        </div>
    )
}

export default MoviesCollection;
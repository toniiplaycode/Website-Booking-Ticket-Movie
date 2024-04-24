import { useDispatch, useSelector } from "react-redux";
import { selectedType } from "../reducers/selectedTypeFilm";
import { searchHandle } from "../reducers/searchFilm";

const TypeofMovieItem = ({ item }) => {
    const dispath = useDispatch();

    const selected = useSelector((state)=>state.selectedTypeFilm.selected);

    return(
        <div className="btn-common-container">
            <button className={selected == item.nameTypeFilm ? "typof-movies-item active" : "typof-movies-item"}
                onClick={()=>{
                    dispath(selectedType(item.nameTypeFilm));
                    dispath(searchHandle(''))
                }}
            >
                {item.nameTypeFilm}
            </button>
        </div>
    )
}

export default TypeofMovieItem;
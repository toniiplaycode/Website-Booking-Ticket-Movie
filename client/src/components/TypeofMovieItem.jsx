import { useDispatch, useSelector } from "react-redux";
import { selectedType } from "../reducers/selectedTypeFilm";
import { searchHandle } from "../reducers/searchFilm";

const TypeofMovieItem = ({ item }) => {
    const dispatch = useDispatch();

    const selected = useSelector((state)=>state.selectedTypeFilm.selected);

    return(
        <div className="btn-common-container">
            <button className={selected == item.nameTypeFilm ? "typof-movies-item active" : "typof-movies-item"}
                onClick={()=>{
                    dispatch(selectedType(item.nameTypeFilm));
                    dispatch(searchHandle(''))
                }}
            >
                {item.nameTypeFilm}
            </button>
        </div>
    )
}

export default TypeofMovieItem;
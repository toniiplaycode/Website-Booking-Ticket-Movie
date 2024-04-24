import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./reducers/mobileNavSlice";
import modalSigninSignup from "./reducers/modalSigninSignup";
import modalTrailer from "./reducers/modalTrailer";
import apiFilms, { fetchFilms } from './reducers/apiFilms';
import apiFilmDetail from "./reducers/apiFilmDetail";
import selectedTypeFilm from "./reducers/selectedTypeFilm";
import searchFilm from "./reducers/searchFilm";
import apiCrWithFilm from "./reducers/apiCrWithFilm";

const reduxStore = configureStore({
    reducer: {
        mobileNav: mobileNavSlice,
        modalSigninSignup: modalSigninSignup,
        modalTrailer: modalTrailer,
        films: apiFilms,
        filmDetail: apiFilmDetail,
        selectedTypeFilm: selectedTypeFilm,
        searchFilm: searchFilm,
        apiCrWithFilm: apiCrWithFilm,
    }
});

//tự động getAll films khi chạy ứng dụng
reduxStore.dispatch(fetchFilms());

export default reduxStore;
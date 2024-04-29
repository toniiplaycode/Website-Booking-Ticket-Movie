import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./reducers/mobileNavSlice";
import modalSigninSignup from "./reducers/modalSigninSignup";
import modalTrailer from "./reducers/modalTrailer";
import apiFilms, { fetchFilms } from './reducers/apiFilms';
import apiFilmDetail from "./reducers/apiFilmDetail";
import selectedTypeFilm from "./reducers/selectedTypeFilm";
import searchFilm from "./reducers/searchFilm";
import apiCrWithFilm from "./reducers/apiCrWithFilm";
import selectedPurchaseFilm from "./reducers/selectedPurchaseFilm";
import selectedCrWithFilm from "./reducers/selectedCrWithFilm";
import selectedSeats from "./reducers/selectedSeats";
import apiCinemaRoomDetail from "./reducers/apiCinemaRoomDetail";
import apiCinemaDetail from "./reducers/apiCinemaDetail";
import apiLoginLogout from "./reducers/apiLoginLogout";

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
        selectedPurchaseFilm: selectedPurchaseFilm,
        selectedCrWithFilm: selectedCrWithFilm,
        selectedSeats:selectedSeats,
        apiCinemaRoomDetail: apiCinemaRoomDetail,
        apiCinemaDetail: apiCinemaDetail,
        apiLoginLogout: apiLoginLogout, 
    }
});

//tự động getAll films khi chạy ứng dụng
reduxStore.dispatch(fetchFilms());

export default reduxStore;
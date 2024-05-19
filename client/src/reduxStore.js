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
import apiCinemaRoom from "./reducers/apiCinemaRoom";
import apiCinema from "./reducers/apiCinema";
import apiLoginLogout, { fetchInforUser } from "./reducers/apiLoginLogout";
import apiSignup from "./reducers/apiSignup";
import apiUpdateUser from "./reducers/apiUpdateUser";
import apiUserTicket from "./reducers/apiUserTicket";
import apiAdminTicket from "./reducers/apiAdminTicket";
import apiAdminUser from "./reducers/apiAdminUser";
import apiAdminTypeof from "./reducers/apiAdminTypeof";
import dialogAlert from "./reducers/dialogAlert";
import apiAdminCr  from "./reducers/apiAdminCr";
import apiCheckExpiredTicket, { checkExpiredTicket } from "./reducers/apiCheckExpiredTicket";
import apiAdminPayment from "./reducers/apiAdminPayment";
import apiComment from "./reducers/apiComment";
import apiAdminRole from "./reducers/apiAdminRole";

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
        apiCinemaRoom: apiCinemaRoom,
        apiCinema: apiCinema,
        apiLoginLogout: apiLoginLogout,
        apiSignup: apiSignup,
        apiUpdateUser: apiUpdateUser,
        apiUserTicket: apiUserTicket,
        apiAdminTicket: apiAdminTicket,
        apiAdminUser: apiAdminUser,
        apiAdminTypeof: apiAdminTypeof,
        dialogAlert: dialogAlert,
        apiAdminCr: apiAdminCr,
        apiCheckExpiredTicket: apiCheckExpiredTicket,
        apiAdminPayment: apiAdminPayment,
        apiComment: apiComment,
        apiAminRole: apiAdminRole,
    }
});

//tự động khi chạy ứng dụng
reduxStore.dispatch(fetchFilms());
reduxStore.dispatch(checkExpiredTicket());

// ghi nhớ đăng nhập 
if(localStorage.getItem('inforUser') != null) {
    reduxStore.dispatch(fetchInforUser(JSON.parse(localStorage.getItem('inforUser')).id));
}


export default reduxStore;
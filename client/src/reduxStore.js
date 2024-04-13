import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./reducers/mobileNavSlice";
import modalSigninSignup from "./reducers/modalSigninSignup";
import modalTrailer from "./reducers/modalTrailer";

const reduxStore = configureStore({
    reducer: {
        mobileNav: mobileNavSlice,
        modalSigninSignup: modalSigninSignup,
        modalTrailer: modalTrailer,
    }
});

export default reduxStore;
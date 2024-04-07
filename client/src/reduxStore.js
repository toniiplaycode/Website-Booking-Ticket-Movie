import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./reducers/mobileNavSlice";
import modalSigninSignup from "./reducers/modalSigninSignup";

const reduxStore = configureStore({
    reducer: {
        mobileNav: mobileNavSlice,
        modalSigninSignup: modalSigninSignup,
    }
});

export default reduxStore;
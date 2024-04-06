import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./reducers/mobileNavSlice";

const reduxStore = configureStore({
    reducer: {
        mobileNav: mobileNavSlice,
    }
});

export default reduxStore;
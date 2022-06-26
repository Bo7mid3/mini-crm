import { configureStore } from "@reduxjs/toolkit";

import loginStatusReducer from "@store/slices/login-status";
import languageReducer from "@store/slices/language";

const STORE = configureStore({
    reducer: {
        language: languageReducer,
        loginStatus: loginStatusReducer
    }
});

export default STORE;

import { configureStore } from "@reduxjs/toolkit";
import loading from "./loading";
import currentUserReducer from "./currentUser";
import redirectReducer from "./redirect";
import snackbarReducer from "./snackbar";

export default configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false
        }),
        reducer: {
                loading: loading,
                currentUser: currentUserReducer,
                redirect: redirectReducer,
                snackbar: snackbarReducer,
        },
        devTools: process.env.REACT_APP_ENV !== 'production'
})
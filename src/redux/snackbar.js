const { createSlice } = require("@reduxjs/toolkit");

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        isOpen: false,
        message: '',
        type: ''
    },
    reducers: {
        showSnackbar: (state, action) => {
            return { ...state, ...action.payload, isOpen: true }
        },
        hideSnackbar: (state, action) => {
            return { ...state, isOpen: false }
        },
        showSuccess: (state, action) => {
            return { ...state, ...action.payload, isOpen: true, type: 'success' }
        },
        showError: (state, action) => {
            return { ...state, ...action.payload, isOpen: true, type: 'error' }
        },
        showInfo: (state, action) => {
            return { ...state, ...action.payload, isOpen: true, type: 'info' }
        },
        showWarning: (state, action) => {
            return { ...state, ...action.payload, isOpen: true, type: 'warning' }
        }

    }
})

export const { showSnackbar, hideSnackbar, showError, showSuccess } = snackbarSlice.actions

export default snackbarSlice.reducer
// React
import React, { useState, useEffect } from 'react'

// Libraries

// Utils

// MUI
import { Alert, Snackbar } from "@mui/material";

// Custom Components

// Redux
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "../../redux/snackbar";

// Services


const INFO_SNACKBAR_AUTO_HIDE_DURATION = 5000;


const CustomSnackbar = (props) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const snackbar = useSelector((state) => state.snackbar);

    useEffect(() => {
        setOpen(snackbar?.isOpen)
    }, [snackbar])

    const onClose = () => {
        setOpen(false)
    }

    const onExited = () => {
        dispatch(hideSnackbar())
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            onClose={onClose}
            TransitionProps={{ onExited }}
            transitionDuration={{ enter: 150, exit: 150 }}
            autoHideDuration={INFO_SNACKBAR_AUTO_HIDE_DURATION}
        >
            <Alert
                severity={snackbar?.type || 'success'}
                elevation={6}
                onClose={onClose}
            >
                {snackbar?.message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbar

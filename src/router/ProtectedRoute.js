// React
import React from 'react'

// Libraries
import { Navigate } from "react-router-dom";

// Utils
import { ROUTES } from '../utils/constants'

// MUI
import { Grid } from '@mui/material'

// Custom Components
import Navbar from '../components/common/Navbar'

// Redux
import { useSelector } from 'react-redux'

// Services



const ProtectedRoute = (props) => {
    const { element: Element } = props

    const user = useSelector((state) => state.currentUser);
    window.scrollTo(0, 0)
    const redirect = useSelector(state => state.redirect)

    return (
        user ?
            <Grid container>
                <Navbar />
                {!redirect &&
                    <Grid container sx={{ mt: "110px" }}>
                        <Element />
                    </Grid>
                }
            </Grid>
            :
            <Navigate to={ROUTES.DEFAULT} replace />
    )
}

export default ProtectedRoute

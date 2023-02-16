// React
import React, { useEffect } from 'react'

// Libraries
import { useTranslation } from "react-i18next"
import { useLocation, Navigate } from "react-router-dom";

// Utils
import { ROUTES } from '../utils/constants'

// MUI
import { Grid } from '@mui/material'

// Custom Components

// Redux
import { useSelector } from 'react-redux'
import Navbar from '../components/common/Navbar';

// Services

const PublicRoute = (props) => {
    const { element: Element } = props


    const user = useSelector((state) => state.currentUser);
    const { t } = useTranslation()
    const location = useLocation()

    useEffect(() => {
        //#TODO edit projectName inside the translation also add location.pathname to translation
        document.title = t('projectName') + " - " + t(location.pathname.toLowerCase())
    }, [location.pathname])

    return (
        !user ? <Grid container>
            {/* #TODO if you work with only public routes and need a navbar, uncomment the navbar below */}
            {/* <Navbar />
            <Grid container sx={{ mt: "110px" }}>
                <Element />
            </Grid> */}

            <Element />
        </Grid> :
            <Navigate to={ROUTES.DASHBOARD} replace />
    )
}

export default PublicRoute

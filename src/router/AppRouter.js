import React, { useCallback, useEffect, useState } from 'react'

import { ROUTES } from '../utils/constants'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Pages
import { CalculateNumber, ProtectedPage, PublicPage } from '../pages/index'

// ROUTES
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from '../redux/currentUser';
import CustomSnackbar from '../components/common/CustomSnackbar';

import { setLink } from '../redux/redirect';
import { timeout } from '../utils/helper';


const AppRouter = () => {
    const dispatch = useDispatch()
    const [isAuthChecked, setIsAuthChecked] = useState(false)
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        loginWithAuthToken()

        const path = (window.location.pathname)
        const search = (window.location.search)

        dispatch(setLink({ path, search }))
    }, [])

    const loginWithAuthToken = async () => {
        try {
            // #TODO send request to login with a token. isLoggedIn for test purposes delete it.
            const isLoggedIn = true
            const user = await timeout(isLoggedIn ? { id: 1, name: 'Name', surname: 'Surname' } : undefined)
            dispatch(setCurrentUser(user))

        } catch (error) {
            console.log(error)
        } finally {
            setIsAuthChecked(true)
        }
    }

    const protectedRoutes = [
        { path: ROUTES.DASHBOARD, element: ProtectedPage, },
        { path: ROUTES.CALCULATE_NUMBER, element: CalculateNumber, },
    ]
    const publicRoutes = [
        { path: ROUTES.DEFAULT, element: PublicPage, },
        { path: ROUTES.PUBLIC, element: PublicPage, },
    ]

    const getProtectedRoutes = useCallback(() => {
        return protectedRoutes.map((route, i) => {
            return <Route key={i} exact path={route.path} element={<ProtectedRoute element={route.element} />} />
        })
    }, [currentUser])

    const getPublicRoutes = useCallback(() => {
        return publicRoutes.map((route, i) => {
            return <Route key={i} exact path={route.path} element={<PublicRoute element={route.element} />} />
        })
    }, [currentUser])


    if (isAuthChecked) return <BrowserRouter>
        {/**#TODO if you don't want a snack bar comment it */}
        <CustomSnackbar />
        <Routes>

            {getPublicRoutes()}
            {getProtectedRoutes()}

            <Route
                path="*"
                element={<Navigate to={ROUTES.DEFAULT} replace />}
            />

        </Routes>

    </BrowserRouter>
    else return null

}

export default AppRouter

//React
import { useEffect, useState } from "react";

//Libraries
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

//MUI
import { Grid, Typography } from "@mui/material"


//Custom Components
import { useDispatch, useSelector } from "react-redux";

//Services
import CustomLinearProgress from "./CustomLinearProgress";
import { setLink } from "../../redux/redirect";
import LanguageButton from "../buttons/LanguageButton";
import { NAVBAR_LIST, ROUTES } from "../../utils/constants";

const styles = {
    navbarItemsGrid: {
        justifyContent: "end",
        alignItems: "center",
        height: "stretch"
    },
    navbarItems: {
        fontSize: "20px",
        color: "white",
        display: "inline",
        " &:hover": { cursor: "pointer" },
    },
    root: {
        height: "110px",
        background: "#000000",
        borderRadius: "0px 0px 10px 10px",
        alignContent: "center",
        pl: "100px",
        pr: "100px",
    },
    image: {
        width: "75px",
        height: "75px",
        '&:hover': {
            cursor: "pointer"
        }
    },
    navbarSelected: {
        fontSize: "20px",
        color: "#209cee",
        display: "inline",
        "&:hover": { cursor: "pointer" }
    },
}

const Navbar = (props) => {

    const { t, i18n } = useTranslation();
    const location = useLocation()
    const navigate = useNavigate()

    const loading = useSelector(state => state.loading)

    //States

    const dispatch = useDispatch()

    const redirect = useSelector(state => state.redirect)

    //navigates to link
    useEffect(() => {
        if (redirect) {
            navigate(redirect.path + redirect.search)
            dispatch(setLink(null))
        }
    }, [])

    useEffect(() => {
        //#TODO edit projectName inside the translation also add location.pathname to translation
        document.title = t('projectName') + " - " + t(location.pathname.toLowerCase())
    }, [location.pathname, i18n.language])


    const [selected, setSelected] = useState("")

    useEffect(() => {
        //Find selected navbar item on list
        NAVBAR_LIST.map((route, i) => (route === location.pathname.split("/")[1]) && setSelected(i))

        //Check if path is exist in navbarlist
        const isPathExist = NAVBAR_LIST.some((route) => {
            return route === (location.pathname.split("/")[1])
        })

        //Set selected index to empty in case navbar doesn't have the path
        if (!isPathExist) { setSelected("") }

    }, [location.pathname])


    return <Grid container sx={{ position: 'fixed', zIndex: "10" }}>

        <Grid container>
            <CustomLinearProgress loading={loading} />
        </Grid>
        <Grid container sx={styles.root}>
            <Grid container item xs={6} alignContent='center'>
                <Grid item sx={styles.image}>
                    <img src={"/images/apple-touch-icon.png"} alt="as" style={styles.image} onClick={() => navigate(ROUTES.DASHBOARD)} />
                </Grid>
            </Grid>
            <Grid item container xs={6} sx={styles.navbarItemsGrid} spacing={5}>
                {
                    NAVBAR_LIST.map((l, i) => {
                        return <Grid item>
                            <Typography
                                key={i}
                                sx={selected === i ? styles.navbarSelected : styles.navbarItems}
                                onClick={() => navigate(`/${l}`)}
                            >
                                {t(l)}
                            </Typography>
                        </Grid>
                    })
                }
                {/* Language Button */}
                <Grid item>
                    <LanguageButton>{t("language")}</LanguageButton>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
}

export default Navbar
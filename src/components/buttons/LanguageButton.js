
//React
import { useEffect } from 'react'

//MUI
import Button from '@mui/material/Button';

//Libraries
import { useTranslation } from 'react-i18next'
import cookie from 'react-cookies';

//Utils
import { COOKIES } from '../../utils/constants';


function LanguageButton(props) {
    const { style } = props
    const { i18n, t } = useTranslation();


    const styles = {
        buttonStyle: {
            width: '64px',
            height: '32px',
            backgroundColor: "#000000",
            color: "#ffffff",
            fontSize: "1.3rem",
            "&:hover": {
                textDecoration: "underline",
            },
            ...style,
        }
    }

    const changeLanguageHandler = () => {
        let language = i18n.language === "en" ? "tr" : "en"
        // change the i18n language
        i18n.changeLanguage(language)
        cookie.save(COOKIES.LANGUAGE, language, { path: '/' })
    }

    useEffect(() => {
        let language = 'tr';
        // get language from the cookie
        const lang = cookie.load(COOKIES.LANGUAGE)
        // check cookie language
        if (lang === undefined) {
            cookie.save(COOKIES.LANGUAGE, i18n.language, { path: '/' })
        } else {
            language = lang
        }
        i18n.changeLanguage(language)
    }, [])


    return <Button
        onClick={changeLanguageHandler}
        sx={{ ...styles.buttonStyle }}
        variant="text"
        color="primary"
        disableElevation
        disableRipple
        {...props}>
        {t('language')}
    </Button>
}

export default LanguageButton;
// React

// Libraries

// Utils
import { DEFAULT_THEME } from '../../utils/useThemes';

// MUI
import Button from '@mui/material/Button'

// Custom Components

// Redux

// Services



export default function TextWithIconbutton(props) {

    const { style, endIcon, text } = props

    const styles = {
        button: {
            width: '100%',
            maxHeight: '42px',
            border: '1px solid #DFDFDF',
            paddingLeft: '3%',
            borderRadius: "7px",
            backgroundColor: '#ffffff',
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            fontSize: '17px',
            justifyContent: 'space-between',
            color: 'black',
            overFlow: 'auto',

            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "transparent"
            },
            '.MuiButton-endIcon': {
                color: '#000000'
            },

            ...style
        },
    }


    return (

        <Button disableRipple endIcon={endIcon} variant="contained" sx={{ ...styles.button }}>
            {text}
        </Button>

    );
}

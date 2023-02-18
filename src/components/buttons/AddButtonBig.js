// React

// Libraries

// Utils
import { DEFAULT_THEME } from '../../utils/useThemes';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button'

// Custom Components

// Redux

// Services

export default function AddButtonBig(props) {

    const { style } = props

    const styles = {
        button: {
            maxWidth: '108px',
            maxHeight: '35px',
            borderRadius: "7px",
            backgroundColor: '#000000',
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            '&:hover': {
                backgroundColor: '#209CEE',
                color: '#000000',
            },
            ...style
        },
        buttonImg: {
            marginLeft: '-5px',
        },
    }

    return (
        <Button variant="contained" sx={{ ...styles.button }} startIcon={<AddCircleOutlineIcon sx={{ ...styles.buttonImg }} />} {...props} />
    );
}
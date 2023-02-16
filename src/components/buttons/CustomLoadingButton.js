// React

// Libraries

// Utils
import { DEFAULT_THEME } from '../../utils/useThemes'

// MUI
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';

// Custom Components

// Redux

// Services

export default function CustomLoadingButton(props) {

    const { style, loading } = props

    const styles = {
        button: {
            width: "stretch",
            height: "stretch",
            borderRadius: "7px",
            backgroundColor: '#000000',
            fontSize: '20px',
            fontFamily: DEFAULT_THEME.typography.fontFamilyRegular,
            '&:hover': {
                backgroundColor: '#FFCC33',
                color: '#000000',
            },
            ...style
        },
    }

    return (
        <LoadingButton
            loadingIndicator={<CircularProgress color="inherit" size={25} />}
            loading={loading}
            variant="contained"
            sx={{ ...styles.button }}
            {...props} />
    );
}


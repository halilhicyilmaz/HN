// React

// Libraries

// Utils

// MUI
import Button from '@mui/material/Button'

// Custom Components

// Redux

// Services

export default function DeclineButton(props) {

    const { style } = props

    const styles = {

        button: {
            maxWidth: '108px',
            maxHeight: '35px',
            borderRadius: "7px",
            backgroundColor: '#E45B5B',
            fontSize: '15px',
            color: '#ffffff',

            '&:hover': {
                backgroundColor: '#D74545',
                color: '#ffffff',
            },
            ...style
        },
    }

    return (
        <Button variant="contained" sx={{ ...styles.button }} {...props} />
    );
}

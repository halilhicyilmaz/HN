// React

// Libraries

// Utils

// MUI
import Button from '@mui/material/Button';

// Custom Components

// Redux

// Services

export default function SecondaryButton(props) {

    const { style } = props

    const styles = {
        button: {
            maxWidth: '175px',
            maxHeight: '42px',
            borderRadius: "7px",
            backgroundColor: 'transparent',
            fontSize: '15px',
            color: '#000000',
            border: '1px solid #000000',

            '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff',
            },
            ...style,
        },
    }

    return (
        <Button variant="contained" sx={{ ...styles.button }} {...props} />
    );
}

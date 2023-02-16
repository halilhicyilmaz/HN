// React

// Libraries

// Utils

// MUI
import Button from '@mui/material/Button';

// Custom Components

// Redux

// Services


export default function SubmitButton(props) {
    const { style } = props

    const styles = {
        button: {
            maxWidth: '82px',
            maxHeight: '25px',
            borderRadius: "7px",
            backgroundColor: '#000000',
            fontSize: '15px',
            color: '#ffffff',

            '&:hover': {
                backgroundColor: '#FFCC33',
                color: '#000000',
            },
            ...style
        },
    }

    return (
        <Button variant="contained" sx={{ ...styles.button }} {...props} />
    );
}

// React

// Libraries

// Utils

// MUI
import Button from '@mui/material/Button'

// Custom Components

// Redux

// Services

export default function PrimaryButton(props) {

    const { style, fontSize = '9px' } = props

    const styles = {
        button: {
            maxWidth: '82px',
            maxHeight: '25px',
            borderRadius: "7px",
            backgroundColor: '#000000',
            fontSize: fontSize,

            '&:hover': {
                backgroundColor: '#209CEE',
                color: '#000000',
            },
            ...style
        },
    }

    return (
        <Button variant="contained" sx={{ ...styles.button }} {...props} />
    );
}

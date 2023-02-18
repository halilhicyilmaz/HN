// React

// Libraries

// MUI
import { Grid, Paper } from "@mui/material"

// Custom Components

// Redux

// Services

const MainCard = (props) => {

    const styles = {
        paper: {
            width: "stretch",
            boxShadow: '0px 0px 23px 2px rgba(0, 0, 0, 0.1)',
            borderRadius: '25px',
            border: '5px solid #ffffff',
            backgroundColor: '#F5F5F5',
            marginBottom: "3rem",
            mt: '152px'
        },
    }

    return (
        <Paper sx={{ ...styles.paper }}>
            <Grid container>
                <Grid container sx={{ padding: '50px', pt: '30px' }}>
                    {props.children}
                </Grid>
            </Grid>
        </Paper>

    )
}


export default MainCard


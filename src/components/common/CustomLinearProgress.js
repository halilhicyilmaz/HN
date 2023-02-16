// MUI
import { LinearProgress } from '@mui/material';

const styles = {
    linearProgress: {
        width: '100%',
        height: "3px",
        backgroundColor: 'black',

    }
}

function CustomLinearProgress(props) {
    const { loading, ...rest } = props

    return (
        loading && <LinearProgress style={styles.linearProgress} color='success' {...rest} />
    )
}

// Export
export default CustomLinearProgress
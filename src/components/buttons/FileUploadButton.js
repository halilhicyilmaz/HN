// React

// Libraries

// Utils
import { DEFAULT_THEME } from '../../utils/useThemes';

// MUI
import { Grid, Typography, Button } from "@mui/material"
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Custom Components

// Redux

// Services



const styles = {

    styleTitle: {
        fontSize: "1rem",
        fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
    },
    borderGrid: {
        border: '1px solid gray', // it is not work.
        height: '38px',
        borderWidth: "1px",
        borderRadius: "3px",
        padding: '2px 8px',
        overflow: 'hidden !important',
        '&:hover': {
            cursor: "pointer"
        },

    },
    buttonGrid: {
        '&:hover': {
            cursor: "pointer"
        },
        overflow: 'hidden',
    },
    button: {
        background: '#C9C9C9',
        border: '0.4px solid #C9C9C9',
        borderRadius: '3px',
        height: '10px',
        width: '110px',
        fontSize: "11px",
    },
    buttonText: {
        fontSize: "13px",
        color: "#1C1C1C",
        placeSelf: "center",
        display: 'inline',
    }
};

const FileUploadButton = (props) => {
    const { setValue, accept, sendInfo, width, required = false } = props

    const { t } = useTranslation();

    let label = t("selectFile")
    if (required) { label = label + ' *' }


    const hiddenFileInput = useRef(null);

    const processFile = (imageInput) => {
        if (imageInput) {
            const file = imageInput

            var pattern = new RegExp(`${accept.split("/")[0]}-*`)

            if (!file.type.match(pattern)) {
                alert(t('wrongFileFormat'));
                return;
            }
            setValue(imageInput);
        }
    }

    return <Grid container sx={{ width: width }}>
        {/*Title Row */}
        <Grid item xs={12} marginBottom="14px">
            <Typography sx={{ ...styles.styleTitle }}>
                {sendInfo}
            </Typography>
        </Grid>

        {/*Custom Upload Button Row */}
        <Grid item xs={12} sx={{ ...styles.borderGrid }}>
            <input
                accept={accept}
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                ref={hiddenFileInput}
                onChange={e => {
                    processFile(e.target.files[0])
                }}
            />
            <label htmlFor="raised-button-file">
                <Grid container item xs={12} sx={{ ...styles.buttonGrid }}>
                    <Grid item xs={8} laptop={6} xl={4}>
                        <Button sx={{ ...styles.button }} onClick={() => hiddenFileInput.current.click()} >{label}</Button>
                    </Grid>
                </Grid>
            </label>
        </Grid>
    </Grid>
};

export default FileUploadButton;
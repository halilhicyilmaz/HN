// React
import React from 'react'

// Libraries
import { useTranslation } from 'react-i18next';
import ReactInputMask from 'react-input-mask';

// Utils
import { DEFAULT_THEME } from '../../utils/useThemes';

// MUI
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Custom Components

// Redux

// Services

const ValidationTextField = styled(TextField)({

    '& input:valid + fieldset': {
        borderColor: 'gray',
        borderWidth: 1,
    },
    [`& fieldset`]: {
        borderRadius: 3,
    },
    '& input:valid:focus + fieldset': {
        borderColor: 'gray',
    },
    fontSize: 100,
});

const CustomInfoComponent = (props) => {
    const { t } = useTranslation();

    const { sendInfo, value, width, setValue, length, multiline, type = "text", disabled, styleTitle, showPassword, setShowPassword, passwordType, required = false, textAlign = '' } = props
    const label = t("please") + " " + sendInfo + " " + t("enter")

    const styles = {

        styleTitle: {
            fontSize: "1rem",
            fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
            ...styleTitle
        },
        input: {
            maxLength: length,
            style: { fontSize: '0.875rem', color: "#bdbdbd", textAlign: textAlign },
        }
    };

    const textField = (inputProps) => {
        return <ValidationTextField
            required={required}
            autoComplete={type === "password" ? 'new-password' : ""}
            fullWidth
            type={type}
            value={value}
            id="outlined-basic"
            label={label}
            disabled={disabled}
            size="small"
            multiline={multiline}
            variant="outlined"
            InputLabelProps={styles.input}
            {...inputProps}
            inputProps={{
                maxLength: length,
                style: { ...styles.input.style, color: 'black' },
            }}
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        {/*  showPassword */}
                        {passwordType && <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => { setShowPassword(!showPassword) }}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>}
                    </InputAdornment>
            }}

            {...props}
        />
    }

    return (
        <Grid container sx={{ width: width }}>
            <Grid item xs={12} marginBottom="14px">
                <Typography sx={{ ...styles.styleTitle }}>
                    {sendInfo}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {type === 'tel' ?
                    <ReactInputMask
                        mask={'(\\90) 599 999 99 99'}
                        value={value}
                        maskChar={' '}
                        onChange={(e, b) => {
                            setValue(e.target.value.replace(/[^0-9]/g, ''))
                        }}
                    >
                        {(inputProps) =>
                            textField(inputProps)
                        }
                    </ReactInputMask>
                    :
                    textField({ onChange: (e) => { setValue(e.target.value) } })
                }


            </Grid>
        </Grid>
    )
}

export default CustomInfoComponent
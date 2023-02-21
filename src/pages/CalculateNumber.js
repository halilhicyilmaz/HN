import { Avatar, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import AddButtonBig from "../components/buttons/AddButtonBig"
import PrimaryButton from "../components/buttons/PrimaryButton"
import DeclineButton from "../components/buttons/DeclineButton"
import { DEFAULT_THEME } from "../utils/useThemes"
import DeleteIcon from '@mui/icons-material/Delete';
import { calculateClosestCombination } from "../utils/calculateClosestCombination"
import CustomInfoComponent from "../components/common/CustomInfoComponent"

const styles = {
    root: {
        height: 'fit-content',
    },
    buttons: {
        maxWidth: "100%",
        maxHeight: "37.13px",
        fontSize: '16px',
    },
    addButtonGrid: {
        alignSelf: 'end',
        textAlign: 'center'
        // pl: "40px"
    },
    title: {
        fontFamily: DEFAULT_THEME.typography.fontFamilyBold,
        fontSize: '20px',
        textAlign: "center"
    },
    listAvatar: {
        width: 30, height: 30
    }
}

const CalculateNumber = (props) => {

    const { t } = useTranslation()
    const [number, setNumber] = useState('')
    const [numberList, setNumberList] = useState([])
    const [targetValue, setTargetValue] = useState('')
    const [result, setResult] = useState(undefined)

    const onAddNumber = (e) => {
        e.preventDefault()
        setNumberList((prev) => [...prev, parseFloat(number)])
        setNumber('')
    }

    const onDelete = (i) => {
        const array = [...numberList]
        array.splice(i, 1)
        setNumberList(array)
    }

    const onCalculate = (e) => {
        e.preventDefault()
        setResult(calculateClosestCombination(numberList, targetValue))

    }

    const onClear = () => {
        setNumber('')
        setNumberList([])
        setTargetValue('')
        setResult(undefined)
    }

    return <Grid container spacing={3}>
        <Grid item container tablet={7} xs={12} sx={styles.root} spacing={3}>
            <Grid item xs={12}>
                <form onSubmit={onAddNumber}>
                    <Grid container spacing={3}>
                        <Grid item tablet={6} xs={12}>
                            <CustomInfoComponent
                                sendInfo={t("number")}
                                value={number}
                                setValue={setNumber}
                                type='number'
                            />
                        </Grid>
                        <Grid item tablet={6} xs={12} sx={styles.addButtonGrid}>
                            <AddButtonBig onClick={onAddNumber} style={styles.buttons} disabled={!number}>{t("addNumber")}</AddButtonBig>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={onCalculate}>
                    <Grid container spacing={3}>
                        <Grid item tablet={6} xs={12}>
                            <CustomInfoComponent
                                sendInfo={t("targetValue")}
                                value={targetValue}
                                setValue={setTargetValue}
                                type='number'
                            />
                        </Grid>
                        <Grid item container justifyContent='center' spacing={3} textAlign="center">
                            <Grid item tablet={6} xs={12}>
                                <PrimaryButton onClick={onCalculate} style={styles.buttons} disabled={numberList.length < 1 || !targetValue}>{t('calculate')}</PrimaryButton>
                            </Grid>

                            <Grid item tablet={6} xs={12}>
                                <DeclineButton onClick={onClear} style={styles.buttons}>{t('clear')}</DeclineButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            {result &&
                <Grid item container justifyContent='center'>
                    <Grid item xs={12}>
                        <Typography sx={styles.title}>{t('result') + ': ' + result[1]}</Typography>
                    </Grid>
                    {result[0].map((r, i) => <Grid item tablet={3}>
                        <ListItem>
                            <ListItemAvatar><Avatar sx={styles.listAvatar}>{i + 1}</Avatar></ListItemAvatar>
                            <ListItemText primary={r} primaryTypographyProps={{ sx: { fontSize: "18px" } }} />
                        </ListItem>
                    </Grid>
                    )}
                </Grid>
            }
        </Grid>
        <Grid item container tablet={5} xs={12}>
            <Grid item xs={12}>
                <Typography sx={styles.title}>{t('numberList')}</Typography>
                {numberList.map((r, i) =>
                    <ListItem secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(i)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemAvatar><Avatar sx={styles.listAvatar}>{i + 1}</Avatar></ListItemAvatar>
                        <ListItemText primary={r} primaryTypographyProps={{ sx: { fontSize: "18px" } }} />
                    </ListItem>)}
            </Grid>
        </Grid>
    </Grid>
}
export default CalculateNumber
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import LeftBar from '../../Components/LeftBar/LeftBar';
import ShopProducts from '../../Components/ShopProducts/Index';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#fef9f5",
            minHeight: '100vh'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            width:'100%'
        },
    }),
);

export default function Index() {

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyles();

    return (
        <Grid container  spacing={2} className={classes.root}>
            {!isMatch ? <LeftBar/> : <ShopProducts />}
        </Grid>
    )
}

import React from 'react';
import {Link} from 'react-router-dom'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '../../ShoppingCart/ShoppingCartIcon';
import Drawer from '../Drawer/Drawer';
import Logo from '../../../Images/logo-mjo.jpeg'
import NavbarList from './NavbarList';
import './style.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:"100vw",
            backgroundColor: "#fef9f5"
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            width:'100%'
        },
        justifyMobile:{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'space-between',
        },
        logo: {
            height: "100px",
            width: "110px"
        },
        justify: {
            display: 'flex',
            alignItems:'center',
            justifyContent: 'flex-end',
            width:'85%'
        },
    }),
);

export default function Navbar() {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
    const classes = useStyles();

    return (
    <div>
        <AppBar position="static" color='transparent' style={{boxShadow:'none'}}>
            <Toolbar className={classes.root}>
                {isMatch ?  
                <div className={classes.container}>
                    <div className={classes.justifyMobile}>
                                <Drawer/>
                                <Link to='/'><img className={classes.logo} src={Logo} alt='logo'/></Link>
                                <ShoppingCartIcon />
                                </div>
                            </div> : 
                            <div className={classes.container}>
                                <Link to='/'><img className={classes.logo} src={Logo} alt='logo'/></Link>
                                <div className={classes.justify}>
                            
                                        <NavbarList />
                                        <ShoppingCartIcon />
                                    </div>
                                    </div>}
            </Toolbar>
        </AppBar>
    </div>
    );
    }

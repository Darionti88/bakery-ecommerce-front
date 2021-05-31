import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list:{
            listStyle: "none",
            display: 'flex'
        },
        link: {
            textDecoration: 'none',
            marginRight: '30px'
        },
        button:{
            color: "#334443",
            fontSize: "1.1rem"
        }

    }),
)
export default function NavbarList() {
    const classes = useStyles()


    return (
        <div>
            <ul className={classes.list}>
                <li><Link className={classes.link} to='/shop'><Button className={classes.button}>Shop</Button></Link></li>
                <li><Link className={classes.link} to='/about'><Button className={classes.button}>About Us</Button></Link></li>
                <li><Link className={classes.link} to='/contact'><Button className={classes.button}>Contact Us</Button></Link></li>
            </ul>
        </div>
    )
}

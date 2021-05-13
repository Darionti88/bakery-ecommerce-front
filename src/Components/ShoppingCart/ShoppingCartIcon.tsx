import React from 'react'
import {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import ShoppingCartDisplay from './ShoppingCartDisplay';


export default function ShoppingCartIcon() {
    const [anchorEl, setAnchorEl] = useState< null | HTMLElement > (null);
    const [auth] = useState(true);
    const open = Boolean(anchorEl);


    const handleCart = (event: React.MouseEvent < HTMLElement > ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <IconButton aria-label="cart" aria-controls="cart" aria-haspopup="true" onClick={handleCart}
                color="inherit">
                <CartIcon style={{color: '#334443'}} />
            </IconButton>
            {auth && (<Menu id="cart" anchorEl={anchorEl} anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                }} keepMounted transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                }} open={open} onClose={handleClose}>
                <ShoppingCartDisplay />
            </Menu>)}
        </div>
    )
}


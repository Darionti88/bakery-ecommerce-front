import React from 'react';
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import Drawer from '@material-ui/core/Drawer'
import {CartContext} from '../../../Store/Store'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../../Images/logo-mjo.jpeg'
import NavbarList from './NavbarList';
import './style.css'
import {CartItemType} from '../../ShopProducts/Index'
import ShoppingCart from '../../ShoppingCart/ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:"100vw",
            backgroundColor: "#fef9f5",
            display:'flex',
            alignItems: 'center',
            boxShadow:'none !important',
            paddingLeft:'1.6rem',
            justifyContent:'space-between',
        },
        toolbar:{
            display:'flex',
            justifyContent:'space-between',
            width:'100%',
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
            width: "110px",
            objectFit:'contain'
        },
        link: {
            color: '#333',
            textShadow:'none',
        },
        justify: {
            display: 'flex',
            alignItems:'center',
            justifyContent: 'flex-end',
            width:'85%'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);

export default function Navbar() {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyles();
    const {cartItems, setCartItems}= useContext(CartContext)


    const [cartOpen, setCartOpen] = useState(false)

    const handleAddToCart = (clickedItem: CartItemType)=> {
        setCartItems((prev: any[]) => {
            const isItemInCart = prev.find((item: { _id: string | number; }) => item._id === clickedItem._id)
            if (isItemInCart){
                return prev.map(item => (
                    item._id === clickedItem._id ? {...item, cantidad: item.cantidad + 1} : item
                ))
            }
            return [...prev, {...clickedItem, cantidad: 1}]
        })
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleRemoveFromCart = (_id: number)=>{
        setCartItems((prev: any[]) => (
            prev.reduce((ack: any, item: { _id: number; cantidad: number; })=>{
                if(item._id === _id){
                    if (item.cantidad === 1) return ack;
                    return [...ack, {...item, cantidad: item.cantidad - 1}]
                } else {
                    return [...ack, item]
                }
            }, [] as CartItemType[])
        ))
    }

    const getTotalItems = (items: CartItemType[])=> {
        return (
            items.reduce((ack: number, item)=> ack + parseFloat(item.cantidad), 0)
        )
    }

    return (
<>
        { isMatch ? 
    <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon/>
                </Button>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <Link to='/shop' className={classes.link}><MenuItem onClick={handleClose}>Todos</MenuItem></Link>
                    <Link to='/shop' className={classes.link}><MenuItem onClick={handleClose}>Vegan</MenuItem></Link>
                    <Link to='/shop' className={classes.link}><MenuItem onClick={handleClose}>Sin Tacc</MenuItem></Link>
                </Menu>
            </div>
            <Link to='/'><img className={classes.logo} src={Logo} alt='logo'/></Link>
            <div>
                <Drawer anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}>
                    <ShoppingCart
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}/>
                </Drawer>
                <Button onClick={()=>setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                        <ShoppingCartIcon  />
                    </Badge>
                </Button>
            </div>
        </Toolbar>
    </AppBar>
        :
    <AppBar position="static" color='transparent' className={classes.root}>
        <Toolbar className={classes.toolbar}>
            <div className={classes.container}>
                <Link to='/'><img className={classes.logo} src={Logo} alt='logo'/></Link>
                <div className={classes.justify}>
                    <NavbarList />
                    <Drawer anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}>
                        <ShoppingCart
                        addToCart={handleAddToCart}
                        removeFromCart={handleRemoveFromCart}/>
                    </Drawer>
                    <Button onClick={()=> setCartOpen(true)}>
                        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                            <ShoppingCartIcon  />
                        </Badge>
                    </Button>
                                        
                </div>
            </div>
        </Toolbar>
    </AppBar>}
</>
    )
    }

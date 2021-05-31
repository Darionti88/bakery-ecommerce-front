import React, {useContext} from 'react'
import CartItem from '../CartItem/Cartitem'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {CartItemType} from '../ShopProducts/Index'
import {CartContext} from '../../Store/Store'
import Button from '@material-ui/core/Button'


interface Props  {
    addToCart: (clickedItem: CartItemType)=> void
    removeFromCart: (_id: number) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: 'flex',
      justifyContent:'center',
      lineHeight: '1rem',
      letterSpacing: '2px',
      paddingLeft: '30px',
      color: '#564a4a'
    },
    button:{
      width:'100%',
      backgroundColor: '#564a4a',
      color:'#fef9f5'
    },
    totalPrice: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: 10,
      fontFamily: 'Oswald, sans-serif',
      color: '#564a4a'
    },
    titleContainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around'
    },
    icon:{
      color: '#564a4a',
      marginRight:'15px'
    },
    cartContainer:{
        display: 'flex',
        flexDirection: 'column',
        background:'linear-gradient(0deg, rgba(254,249,245,1) 3%, rgba(206,239,226,1) 100%)',
        maxWidth:'100%',
        height:'100%',
        fontFamily: 'Oswald, sans-serif',
    }
  }),
);

 const  ShoppingCart: React.FC<Props> = ({addToCart, removeFromCart})=> {
    const {cartItems}= useContext(CartContext)
    const classes = useStyles();

    const calculateTotal = (items: CartItemType[])=>{
       return items.reduce((ack:number, item)=> ack + item.cantidad * Number(item.precio), 0)
    }

    const totalItems = (items: CartItemType[])=>{
      return items.reduce((ack:number, item)=> ack + item.cantidad, 0)
    }

    return (
        <div className={classes.cartContainer}>
          <div className={classes.titleContainer}>
            <h3 className={classes.title}>Your Shopping Cart </h3> 
            <ShoppingCartIcon className={classes.icon} />
          </div>
          { cartItems.length === 0 ? <p className={classes.title}>No Items</p> : null}
          {cartItems.map((item: CartItemType) =>(
            <CartItem 
              key={item._id}
              item={item}
              addToCart={addToCart}
              removeFromCart={()=> removeFromCart(item._id)}/>))}
          <h2 className={classes.totalPrice}>Total: ${calculateTotal(cartItems)}</h2>
          { cartItems.length !== 0 ? <Button onClick={()=> alert(`Congrats! Acabas de comprar ${totalItems(cartItems)} items`)} className={classes.button} variant='contained'>Proceed to Checkout</Button> : null}
        </div>
    )
}

export default ShoppingCart
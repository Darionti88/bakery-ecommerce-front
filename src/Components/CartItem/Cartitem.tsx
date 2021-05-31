import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {CartItemType} from '../ShopProducts/Index'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(90deg, rgba(205,238,225,1) 0%, rgba(221,250,238,1) 25%, rgba(248,249,248,1) 100%)',
      display: 'flex',
      height: '20%',
    },
    content: {
      display:'flex',
      flexDirection: "column",
      justifyContent:'space-between',
      height: '100%',
      padding: '0 8px',
      width: '65%'

    },
    cover: {
      width: 151,
      objectFit:'contain',
      justifySelf: 'flex-end',
      height:'100%',
    },
    cantidad:{
      letterSpacing:'1.5px',
      margin: 0
      
    },
    font:{
      fontFamily: 'Oswald, sans-serif',
      letterSpacing:'1.5px',
      margin: 2,
      color: '#564a4a'
      
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      height:'10%',
      width:'100%',
      margin: 0,
      justifyContent: 'space-between',
      paddingBottom: '20px',
    }
  }),
);

interface Props {
    item: CartItemType
    addToCart: (clickedItem: CartItemType)=> void
    removeFromCart: (_id: number)=> void
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart})=> {
  const classes = useStyles();
  const theme = useTheme();

  return (

    <div className={classes.root}>
      <div className={classes.content}>
        <h3 className={classes.font}>
          {item.titulo}
        </h3>
        <p className={classes.cantidad}>Qty:   {item.cantidad}</p>
        <div className={classes.controls}>
          <IconButton onClick={()=> removeFromCart(Number(item._id))} aria-label="remove">
            {theme.direction === 'rtl' ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
          <p className={classes.cantidad}>{(item.cantidad * parseFloat(item.precio)).toFixed(2)}</p>
          <IconButton onClick={()=> addToCart(item)} aria-label="add">
            {theme.direction === 'rtl' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </div>
      </div>
      <img className={classes.cover} src={item.images.url} alt={item.titulo}/>
    </div>
  );
}

export default CartItem
import React from 'react'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import {CartItemType} from '../ShopProducts/Index'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

type Props ={
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
  avatar: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 280,
      height:315,
      display:'flex',
      flexDirection:'column',
      paddingBottom:0,
      justifyContent:'space-between'
    },
    media: {
      height: 0,
      paddingTop: '45%', // 16:9
      backgroundSize: 'contain'
    },
    title: {
      width: '92%',
      fontSize: '1.1rem',
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      textOverflow:'ellipsis',
    },
    precio:{
      marginTop:'0px',
      color:'#333',
    },
    description: {
      width: '85%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      whiteSpace: 'break-spaces', 
      textOverflow: 'ellipsis',
      padding: '7px 15px 0px 16px',
    },
    avatar: {
      backgroundColor: "#99bbad",
    },
    buttons:{
      backgroundColor: '#99bbad',
      color: '#fbf2eb',
      width:'100%',
      bottom: 0,
      textShadow:'1px 1px 5px grey',
      '&:hover': {
        backgroundColor: '#769e8e',
        borderColor: '#769e8e',
        boxShadow: 'none',
      }
    },
  }),
);


    const ProductCard: React.FC<Props> = ({item, handleAddToCart, avatar})=> {
      const theme = useTheme()
      const isMatch = useMediaQuery(theme.breakpoints.down('sm'))


        const classes = useStyles();
        return (
          <Card className={classes.root}>
            <CardHeader
              avatar={ !isMatch ?
                <Avatar aria-label="cookie" className={classes.avatar}>
                  {avatar}
                </Avatar> : null
              }
              title={<Typography className={classes.title} color="textSecondary" component="h6">
              {item.titulo}
            </Typography>}
              />
            <CardMedia
              className={classes.media}
              image={item.images.url}
            />
            <CardContent className={classes.description}>
              <Typography variant="body2" color="textSecondary" component="p" >
                {item.descripcion}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.precio}>
                Precio: ${item.precio}
              </Typography>     
            </CardContent> 
            <Button
              className={classes.buttons}
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={()=> handleAddToCart(item)}>Add to Cart</Button>
          </Card>
        );
      }

      export default ProductCard
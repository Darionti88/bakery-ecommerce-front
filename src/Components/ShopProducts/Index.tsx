import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {CartContext} from '../../Store/Store'
import LinearProgress from '@material-ui/core/LinearProgress'
import ProductCard from '../../Components/ProductCard/ProductCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
    
    },
    }),
);



export interface CartItemType {
    images: {url: string},
    categoria: string,
    _id: number | any,
    titulo: string,
    descripcion: string,
    precio: string,
    cantidad: number | any,
}


const ShopProducts: React.FC = ()=> {

    const classes= useStyles()

    const [products, setProducts] = useState([
            {images:[{
                url:''
            }],
            titulo:'',
            precio:'',
            categoria:'',
            cantidad:'',
            _id: '',
            descripcion: ''}
    ])
    const [isLoaded, setIsLoaded] = useState(false)

    const {setCartItems} = useContext(CartContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProducts = (): Promise<CartItemType | void> => (
        Axios.get('https://guria-db.herokuapp.com/productos').then(response=>{

            setProducts(response.data);
        })
    )

    useEffect(()=>{
        setIsLoaded(false)
        getProducts()
        setIsLoaded(true)
    }, [getProducts])

    
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

    return (
        <Grid item container md={12} spacing={1} justify='center' className={classes.root}>
            { isLoaded ? products.map(item =>(
                    <Grid item key={item._id} xs={6} md={3}>
                        <ProductCard
                        item={item}
                        handleAddToCart={handleAddToCart}
                        avatar={'B'}
                        />
                    </Grid>
            )) : <LinearProgress /> }
        </Grid>
    )
}

export default ShopProducts

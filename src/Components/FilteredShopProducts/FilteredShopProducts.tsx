import React, {useState, useEffect, useContext, useCallback} from 'react'
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import {CartContext} from '../../Store/Store'
import LinearProgress from '@material-ui/core/LinearProgress'
import ProductCard from '../../Components/ProductCard/ProductCard';


export type CartItemType ={
    images: {url: string} | Array<string>,
    categoria: string,
    _id: number | any,
    titulo: string,
    descripcion: string,
    precio: string,
    cantidad: number | any,
}

type Props ={
    apiUrl: string
}

const FilteredShopProducts: React.FC<Props> = ({apiUrl})=> {

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

    const getProducts = useCallback((): Promise<CartItemType | void> => (
        Axios.get(`${apiUrl}`).then(response=>{
            const filteredData = response.data[0].productos
            console.log(filteredData)
            setProducts(filteredData);
            setIsLoaded(true)
        })
    ),[apiUrl])

    useEffect(()=>{
        setIsLoaded(false)
        getProducts()
    }, [getProducts])

    const avatarLetter = (data: Array<Object>)=>{
        if (data.length === 11){
            return "V"
        } else {
            return "ST"
        }
    }

    
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
        <Grid item container md={12} spacing={1} justify='center' style={{marginTop:'2rem', padding:'0 1rem'}}>
            { isLoaded ? products.map(item =>(
                    <Grid item key={item._id} xs={5} md={3}>
                        <ProductCard
                        item={item}
                        avatar={avatarLetter(products)}
                        handleAddToCart={handleAddToCart}
                        />
                        </Grid>
            )) : <LinearProgress  color="secondary"/> }
        </Grid>
    )
}

export default FilteredShopProducts
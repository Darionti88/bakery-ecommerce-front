import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'


type Props ={
    direction: string
    img: string
    flavor: string
}

const Cookie: React.FC<Props> = ({direction, img, flavor})=> {
    return (
        <div className={direction} >
            <div className="product-desc">
                <div className="product-title">
                    <h2 className='title'><span className='chocolate'>{flavor}</span>COOKIES</h2>
                </div>
                <div className="description">
                    <h6>Todas nuestras galletas y horneados son hecho con los productos de mejor calidad del mercado.
                        Tanto nuestras opciones Veganas como Sin Tacc están aprobadas por el Consejo Nacional del Buen Comer.
                    </h6>
                </div>
                <div className="buy-section">
                    <Link to='/shop'>Shop</Link>
                </div>
            </div>
                <img className='image' src={img} alt="choco-cookie"/>
        </div>
    )
}

export default Cookie

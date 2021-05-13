import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './styles.css'

export default function Cookie(props: { direction: string | undefined } & {img: string | undefined}) {
    return (
        <div className={props.direction} >
            <div className="product-desc">
                <div className="product-title">
                    <h2 className='title'><span className='chocolate'>CHOCO</span>COOKIES</h2>
                </div>
                <div className="description">
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Est maxime nulla hic, temporibus ipsam sunt repudiandae 
                        nesciunt dicta tempora illum.</h6>
                </div>
                <div className="buy-section">
                    <Link to='#'>Shop</Link>
                    <Button className='add-button' variant='contained'>Add to cart</Button>
                </div>
            </div>
                <img className='image' src={props.img} alt="choco-cookie"/>
        
            
        </div>
    )
}

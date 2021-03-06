import React from 'react'
import Cookie from '../../Components/Cookie/Index'
import ChocoCookie from '../../Images/home-img/ChocoSalt.png'
import CakeSlice from '../../Images/home-img/Vanilla.png'
import './style.css'

function Home() {
    return (
        <div className='home'>
            <Cookie
            flavor='CHOCO'
            direction='cookie-container'
            img={ChocoCookie}/>
            <Cookie
            flavor='VANILLA' 
            direction='cookie-container-reverse'
            img={CakeSlice} />
        </div>
    )
}

export default Home

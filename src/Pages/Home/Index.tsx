import React from 'react'
import Cookie from '../../Components/Cookie/Index'
import ChocoCookie from '../../Images/home-img/cookie1.png'
import CakeSlice from '../../Images/home-img/chocomuffin.png'
import './style.css'

function Home() {
    return (
        <div style={{marginTop: "2rem", minWidth:'100vw', display:'flex', flexDirection:'column'}}>
            <Cookie 
            direction='cookie-container'
            img={ChocoCookie}/>
            <Cookie 
            direction='cookie-container-reverse'
            img={CakeSlice} />
        </div>
    )
}

export default Home

import React, {useState, useMemo} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Pages/Home/Index';
import Header from './Components/Header/Index';
import {CartContext} from './Store/Store'
import Shop from './Pages/Shop/Index';
import Footer from './Components/Footer/Index';

function App() {
  const [cartItems, setCartItems] = useState([])
  const providerCart = useMemo(()=> ({cartItems, setCartItems}), [cartItems, setCartItems])

  return (
    <BrowserRouter>
    <CartContext.Provider value={providerCart}>
      <Header />
    <Switch>
      <Route exact path='/shop'><Shop /></Route>
      <Route path='/'><Home /></Route>
    </Switch>
    <Footer />
    </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Pages/Home/Index';
import Header from './Components/Header/Index';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/'><Home /></Route>
    </Switch>
    <Header />
    </BrowserRouter>
  );
}

export default App;

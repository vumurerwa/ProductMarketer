import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from '@reach/router';


//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import AddProduct from './Pages/AddProduct';

function App() {
  /*
  const [ products, setProducts] = useState([{
    product:'https://www.google.com/search?q=pizza&client=firefox-b-d&sxsrf=ALiCzsa5fks0BB9a-P18HAdmrnl8rmdpvA:1667217797537&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjlgdektor7AhX-hv0HHelJATwQ_AUoAXoECAIQAw#imgrc=O4UuViMCfN5LDM',
    title:'piza',
    price:'RS. 68'
  }])*/
  const [theme] = useThemeHook();
  /*const addProduct = (product) => {
       const id = Math.floor(Math.random() * 
       10000) +1
       const newProduct = { id, ...product}
       setProducts([...products, newProduct])
  }*/
  return (
    <>
    <Header/>
    <Router>
      <Home path="/"/>
      <Cart path="/cart"/>
      <AddProduct path="/AddProduct"/>
    </Router>
    </>
  );
}

export default App;

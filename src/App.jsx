import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import MyFooter from './components/Footer/MyFooter'

import { createContext, useEffect, useState } from 'react'
export const CartContext = createContext([])

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <ScrollRestoration></ScrollRestoration>
        <HeaderComponent></HeaderComponent>

        <Outlet></Outlet>

        <MyFooter></MyFooter>
      </CartContext.Provider>
    </>
  )
}

export default App

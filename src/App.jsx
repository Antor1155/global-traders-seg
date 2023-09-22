import './App.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import MyFooter from './components/Footer/MyFooter'

import { createContext, useState } from 'react'
export const CartContext = createContext([])

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>
        <HeaderComponent></HeaderComponent>

        <Outlet></Outlet>

        <MyFooter></MyFooter>
      </CartContext.Provider>
    </>
  )
}

export default App

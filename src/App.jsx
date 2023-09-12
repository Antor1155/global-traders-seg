import './App.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import MyFooter from './components/Footer/MyFooter'

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <Outlet></Outlet>

      <MyFooter></MyFooter>
    </>
  )
}

export default App

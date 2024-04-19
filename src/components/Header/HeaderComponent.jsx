import { useContext, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import "./HeaderComponent.css"
import { CartContext } from '../../App'

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';



const HeaderComponent = () => {
  const [navOn, setNavOn] = useState(false)
  const navEle = useRef()

  const navigate = useNavigate()

  const { cart } = useContext(CartContext)

  function handleSearch(e) {
    e.preventDefault()
    const searchValue = encodeURIComponent(e.target.search.value)
    e.target.search.value = ""

    navigate(`/preowned?search=${searchValue}`)

  }

  function handleNav() {
    navEle.current.classList.toggle("visible")
    setNavOn(prev => !prev)
  }



  return (
    <header>
      <div className='headerDiv'>
        <div>
          <Link to="/" className='gtlogo'>
            <img src="/staticImages/globalgtIcon.png" alt='global gt icon' />
          </Link>

          <form className='product-search' onSubmit={handleSearch}>
            <input type='text' placeholder='Search for a Phone' name='search' required />
            <button type='submit'>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </button>
          </form>
        </div>

        <div className='cart-and-account'>
          {cart?.length ? <span className='cart-amount'>{cart?.length}</span> : ""}

          <Link to="/myaccount">
            <span className='nav-icon-mobile'><PersonIcon></PersonIcon></span>
            <span className='mobile-hide'>My Account</span>
          </Link>

          <Link to="/cart">
            <span className='nav-icon-mobile'><ShoppingCartIcon></ShoppingCartIcon></span>
            <span className='mobile-hide'>Cart</span>
          </Link>

          <button id='mobile-nav' onClick={handleNav}>
            {navOn ? <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
              :

              <FormatListBulletedIcon></FormatListBulletedIcon>
            }
          </button>
        </div>

      </div>

      {/* to use in mobile only  */}
      <form className='mobile-product-search' onSubmit={handleSearch}>
        <input type='text' placeholder='Search for a Phone' name='search' required />
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
      </form>

      <nav ref={navEle}>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="preowned">PRE-OWNED</ NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="refubrished">REFURBISHED</ NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="wholesale">WHOLESALE</ NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="resources">RESOURCES</ NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="contactus">CONTACT US</ NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } onClick={handleNav} to="offer">OFFER</ NavLink>
      </nav>

    </header>
  )
}


export default HeaderComponent
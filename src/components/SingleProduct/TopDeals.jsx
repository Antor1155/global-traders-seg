import { useContext } from "react"
import "./TopDeals.css"
import { CartContext } from "../../App"
import { useNavigate } from "react-router"

const SingleProduct = ({ product }) => {
  const { parentCatagory, _id, productName, description, storage, color, price, discountPrice, originalPrice, reviewScore, peopleReviewed, condition, image } = product
  
  const { cart, setCart } = useContext(CartContext)

  const navigate  = useNavigate()

  const handleAddCart = (event) => {
    event.stopPropagation()
    setCart(prev => [...prev, _id])
  }

  const handleShowProduct = () =>{
    navigate(`/iphone/${parentCatagory}/${_id}`)
  }

  return (
    <div className='single-product' onClick={handleShowProduct}>
      <div className='sticker'>
        <img src="/logos/product-label.png" alt='product sticker' />
        <small>UP TO <br></br> 3.23% <br></br> OFF</small>
      </div>

      <img className='product-image' src={image} alt='product image'></img>

      <img className="product-brand-logo" src="/logos/apple.png" alt='product company ' />

      <div className="productDesc">
        <p>{productName} {description}</p>
        <p><span>{storage}</span> | <span>{color.name}</span> | <span>{condition}</span></p>

        <p><span>Warrenty : 30 days</span></p>

        <p><span>Special Price : </span></p>
        <p className="price">${price}</p>
      </div>
      {/* <span>{price}$</span> */}

      <div className="buttons">
        <button className="buy-button"> CHECK IT </button>
        <button onClick={handleAddCart} className="cart-button"> ADD TO CART</button>
      </div>
    </div>
  )
}

export default SingleProduct
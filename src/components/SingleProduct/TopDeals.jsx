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

      <div className="productDesc">
        <p>{productName} {storage}</p>
        <p>UNLOCKED</p>

        <p className="sm">Condition: {condition}</p>
        <p className="sm">Color: {color.name}</p>

        <div className="hr"></div>
        <p className="sm old-price">$ {price + 150}.00</p>
        <p className="price">${price}.00</p>
      </div>
    </div>
  )
}

export default SingleProduct
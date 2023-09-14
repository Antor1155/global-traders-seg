import "./singleproduct.css"


const SingleProduct = ({product}) => {
  const { parentCatagory, _id, productName, description, storage, color, price, discountPrice, originalPrice, reviewScore, peopleReviewed, condition, image } = product

  return (
    <div className='single-product'>
        <div className='sticker'>
            <img src="/logos/product-label.png" alt='product sticker' />
            <small>UP TO <br></br> 3.23% <br></br> OFF</small>
        </div>
        
        <img className='product-image' src={image} alt='product image'></img>

        <img src="/logos/apple.png" alt='product company ' />

        <p>{description}</p>

        <div>
            <button> ADD TO CART</button>
            <button> BUY NOW </button>
        </div>
    </div>
  )
}

export default SingleProduct
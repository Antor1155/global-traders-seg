import React from 'react';
import "./CheckoutSingleProduct.css"

const CheckoutSingleProduct = ({cart, product}) => {
    const { parentCatagory, _id, productName, description, storage, color, price, discountPrice, originalPrice, reviewScore, peopleReviewed, condition, image } = product
    return (
        <div>
            <div className='product-details'>
                <img src={image} alt='product image'></img>
                <div>
                    <h3>{productName}</h3>
                    <small>Color: {color?.name}</small>
                    <small>Storage: {storage}</small>
                    <small>Condition: {condition}</small>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSingleProduct;
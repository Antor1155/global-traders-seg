import React, { useEffect } from 'react';
import axiosInstance from '../../utilities/axiosInstance';
import "./SingleProductForAdmin.css"

const SingleProductForAdmin = ({ product, setAllProduct }) => {
    const { parentCatagory, _id, productName, description, storage, color, price, discountPrice, originalPrice, reviewScore, peopleReviewed, condition, image } = product

    function handleDelete (){
        const confirm = window.confirm("are  you sure ? It will be deleted parmanently ?")
        console.log(confirm)

        if(confirm){
            axiosInstance.delete(`product/${_id}`)
            .then(res => setAllProduct(prev => {
                const newProducts = prev.filter(p => p._id !== _id)
                return newProducts
            }))
        }
    }


    return (
        <div className='admin-single'>
            <img className='product-image' src={image} alt='productImg' />
            <h5>{productName}</h5>
            <div>
                <span> Description: {description}</span>
                <span> Storage: {storage}</span>
                <span> Condition: {condition}</span>
                <span> Color: {color.name}</span>
                <span> Price: {price}</span>
                <span> DiscountPrice: {discountPrice}</span>
                <span> New OriginalPrice: {originalPrice}</span>
                <span> ReviewScore: {reviewScore}</span>
                <span> People Reviewed: {peopleReviewed}</span>
            </div>

            <div>
                <button className='edit'>Edit </button>
                <button onClick={handleDelete} className='delete'>Delete </button>
            </div>
        </div>
    );
};

export default SingleProductForAdmin;
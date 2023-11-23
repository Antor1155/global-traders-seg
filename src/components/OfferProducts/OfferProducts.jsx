import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utilities/axiosInstance';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./OfferProducts.css"

const OfferProducts = () => {
    const [nProducts, setNproducts] = useState([])

    useEffect(() => {
        axiosInstance.post(`products/${4}/${0}`, { productName: [], condition: ["Excellent"], storage: [], color: [], price: [0, 1500] })
            .then(res => {
                if (res.data.length) {
                    setNproducts(prev => [...res.data])

                } else {

                }
            })
            .catch(error => console.log(error))


    }, [])
    return (
        <div className='offer-container'>
            <h2>You may also like</h2>
            <div className='offer-products'>
                {nProducts && nProducts.map(product => {
                    return <SingleProduct key={product._id} product={product}></SingleProduct>
                })}
            </div>
        </div>
    );
};

export default OfferProducts;
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../App';
import axiosInstance from '../../utilities/axiosInstance';
import CheckoutSingleProduct from './CheckoutSingleProduct';

const Checkout = () => {
    const [products, setProducts] = useState([])
    const {cart} = useContext(CartContext)
    const params = useParams()

    const [totla, setTotal] = useState(0)

    useEffect(()=>{
        if(params.id == "cart"){
            axiosInstance.post("cart", { ids: cart })
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
        } else{
            axiosInstance.post("cart", { ids: params.id })
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
        }

        
    },[])

    let total = 0
    for(const id of cart){
        total += products.find(item => item._id === id)?.price || 0 
    }
    
    return (
        <main>
            <div>
                <p>all contact into</p>
            </div>

            <div className='productInfo'>
                <p>YOUR ORDER</p>

                <div>
                   <p><span>Product</span> <span>Subtotal</span></p>

                   {products.map(product => <CheckoutSingleProduct product={product} cart={cart}>
                   </CheckoutSingleProduct>)}
                </div>
            </div>
        </main>
    );
};

export default Checkout;
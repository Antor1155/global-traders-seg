import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import SingleProduct from "../SingleProduct/SingleProduct";


const Preowned = () => {

    const [nProducts, setNproducts] = useState([])
    const [moreProductsInDb, setMoreProductsInDb] = useState(true)
    const prodcutsReq = 8
    const productSkip = useRef(0)


    const requestProduct = ()=>{
        axiosInstance.get(`products/${prodcutsReq}/${productSkip.current}`)
        .then(res =>{
           if(res.data.length){
            setNproducts(prev => [...prev, ...res.data])
           }else{
            setMoreProductsInDb(false)
           }
        })
        .catch(error => console.log(error))
    }

    useEffect(requestProduct,[])

    const handleSeeMore = () => {
        productSkip.current += prodcutsReq
        requestProduct()
    }
    return (
        <main>
            <div className='products'>
                {nProducts && nProducts.map(product =>{
                    return <SingleProduct key={product._id} product={product}></SingleProduct>
                })}
                
            </div>

            <button className='see-more' onClick={handleSeeMore} disabled={moreProductsInDb ? false: true}> See More</button>

        </main>
    );
};

export default Preowned;
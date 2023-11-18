import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utilities/axiosInstance';

const ProductDetailPage = () => {
    const { parentId, productId } = useParams()
    const [product, setProduct] = useState()
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axiosInstance.get(`/allSameParentProducts/${parentId}`)
            .then(res => {
                setAllProducts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            This is product detail page
            <p>{parentId}</p>
        </div>
    );
};

export default ProductDetailPage;
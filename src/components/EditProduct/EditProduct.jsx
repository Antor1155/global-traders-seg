import React, { useEffect, useState } from 'react';
import "./EditProduct.css"

import { useParams } from 'react-router-dom';
import axiosInstance from '../../utilities/axiosInstance';
import styled from 'styled-components';
import ProductForm from '../ProductForm/ProductForm';
import ImageToSelect from '../ImageToSelect/ImageToSelect';

const StyledDiv = styled.div`
  margin: 1rem;

  h3{
    text-align: center;
    font-size: 1.5rem;
  }
`

const ImagesHolder = styled.div`
  display: flex;
  justify-content: center;
`



const EditProduct = () => {
    const params = useParams()

    const [product, setProduct] = useState({})
    const [allCatagories, setCatagories] = useState([])


    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState()


    useEffect(() => {
        axiosInstance.get("catagory")
            .then(result => {
                setCatagories(result.data)

                
                // here we do one calculation with allCatagories , so both request might have a race condition 
                // thats why one request in another , then after finish, do the calculation
                axiosInstance.get(`product/${params.id}`)
                    .then(res => {
                        setProduct(res.data)

                        const imgs = allCatagories.find(c => c._id === product.parentCatagory)?.images
                        setImages(imgs)
                        setSelectedImage(product.image)
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => console.log(error))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        product.image = selectedImage

        let productN = ""
        if (product.parentCatagory) {
            productN = allCatagories.find(c => c._id == product.parentCatagory)?.modelName
        }

        product.productName = productN

        // axiosInstance.post("product", product)
        //     .then(res => {

        //         alert("updated ")

        //         setSelectedImage("")

        //     })
        //     .catch(error => alert("error happened !!"))
    }

    return (
        <StyledDiv>
            <h3>Add a product</h3>

            <ImagesHolder>
                {images?.map((image, ind) => {
                    return <ImageToSelect key={ind} setSelectedImage={setSelectedImage} selectedImage={selectedImage} ImgUrl={image?.url}></ImageToSelect>
                })}
            </ImagesHolder>

            <ProductForm setSelectedImage={setSelectedImage} setImages={setImages} allCatagories={allCatagories} handleSubmit={handleSubmit} product={product} setProduct={setProduct} />

        </StyledDiv >
    )
};

export default EditProduct;
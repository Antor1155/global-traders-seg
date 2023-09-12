import { useEffect, useState } from 'react'

import "./AddProduct.css"

import ProductForm from '../ProductForm/ProductForm'
import axiosInstance from '../../utilities/axiosInstance'

import { styled } from 'styled-components'
import ImageToSelect from '../ImageToSelect/ImageToSelect'

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

const AddProduct = () => {
    const [allCatagories, setCatagories] = useState([])
    const [product, setProduct] = useState({ parentCatagory: "", image: "", description: "", storage: "", color: "", price: "", discountPrice: "", originalPrice: "", reviewScore: "", peopleReviewed: "", condition: "", color: { name: "", value: "" } })

    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState()

    console.log(images)

    useEffect(() => {
        axiosInstance.get("catagory")
            .then(result => setCatagories(result.data))
            .catch(error => console.log(error))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        product.image = selectedImage
        
        axiosInstance.post("addsingleproduct", product)
            .then(res => setProduct({ parentCatagory: "", description: "", storage: "", color: "", price: "", originalPrice: "", reviewScore: "", peopleReviewed: "", condition: "", color: { name: "", value: "" } }))
            .catch(error => alert("error happened !!"))
    }

    return (
        <StyledDiv>
            <h3>Add a product</h3>

            <ImagesHolder>
                {images.map((image, ind) => {
                    return <ImageToSelect key={ind} setSelectedImage={setSelectedImage} selectedImage={selectedImage} ImgUrl={image?.url}></ImageToSelect>
                })}
            </ImagesHolder>

            <ProductForm setImages={setImages} allCatagories={allCatagories} handleSubmit={handleSubmit} product={product} setProduct={setProduct} />

        </StyledDiv >
    )
}

export default AddProduct;
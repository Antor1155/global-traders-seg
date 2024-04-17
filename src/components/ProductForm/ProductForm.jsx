import React, { useState } from 'react'
import { styled } from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    margin-bottom: 5rem;
    margin-top: 1rem;

    label{
        margin-right: 1rem;
        display: inline-block;
    }

    select{
        border: 1px solid;
        border-radius: 5px ;
    }

    input, textarea{
        border: 1px solid;
        border-radius: 5px;
        padding: 5px;
    }

    button{
        background: black;
        color: white;
        max-width: 200px;
        align-self: center;
        padding: 10px;
        border-radius: 5px;
    }
`

function ProductForm({ allCatagories, handleSubmit, product, setProduct, setImages, setSelectedImage }) {

    const availableColors = [{ name: "BLACK", value: "#000000" },
    { name: "SIERRA BLUE", value: "#9BB5CE" },
    { name: "GRAPHITE", value: "#5C5B57" },
    { name: "GOLD", value: "#F9E5C9" },
    { name: "ALPINE GREEN", value: "#505F4E" },
    { name: "SILVER", value: "#F5F5F0" },
    { name: "RED", value: "#A50011" },
    { name: "STARLIGHT", value: "#F9F3EE" },
    { name: "MIDNIGHT", value: "#171E27" },
    { name: "BLUE", value: "#215E7C" },
    { name: "PINK", value: "#FAE0D8" },
    { name: "GREEN", value: "#364935" },
    { name: "WHITE", value: "#FFFFFF" },
    { name: "SPACE GRAY", value: "#5e5e5e" },
    { name: "PURPLE", value: "#9788C5" },
    { name: "YELLOW", value: "#F3E488" },
    ]

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor='parent'>Please select The Product name *</label>
            <select id="parent" required
                value={product.parentCatagory}

                onChange={e =>{
                    setProduct(prev => {
                    const newPrev = {...prev, parentCatagory: e.target.value}
                    return newPrev
                    })

                    if(e.target.value){
                        let images = allCatagories.find(ele => ele._id === e.target.value).images
                        setImages(images)
                    }else{
                        setImages([]);
                        setSelectedImage("")
                    }
                    
                    }}>
                <option value=""> none selected</option>

                {allCatagories.map(catagory => {
                    return <option key={catagory._id} value={catagory._id}>
                        {catagory.modelName}
                    </option>
                })}
            </select>

            <br />

            <label htmlFor='description'>Short description</label>
            <textarea id='description' name="description" type="text" placeholder='description'  
                value={product.description}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, description: e.target.value}
                    return newPrev
                })}
            />

            <br />

            <label htmlFor='storage'>select storage *</label>
            <select name="storage" id="storage" required
                value={product.storage}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, storage: e.target.value}
                    return newPrev

                })}
            >
                <option value=""> None selected</option>
                <option value="64 GB">64 GB</option>
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB">512 GB</option>
                <option value="1 TB">1 TB</option>
            </select>

            <br />

            <label htmlFor='condition'>select condition *</label>
            <select name="condition" id="condition" required
                value={product.condition}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, condition: e.target.value}
                    return newPrev

                })}
            >
                <option value=""> None selected</option>
                <option value="Good"> Good</option>
                <option value="Fair"> Fair</option>
                <option value="Excellent"> Excellent</option>
                <option value="Refubrished"> Refubrished</option>
                <option value="New"> New</option>
            </select>

            <br />


            <label htmlFor='color'> select Color *</label>
            <select id='color' name='color' required
                value={product.color?.name ? product.color.name + ":" + product.color.value : ""}

                onChange={(e) => setProduct(prev => {
                    let newPrev = {...prev}

                    if(e.target.value){
                        let output = e.target.value.split(":")
                        const result = {name: output[0], value:output[1] }
                        newPrev.color = result
                    }else{
                        newPrev.color = {name: "", value:""}
                    }
                    return newPrev
                })}
            >
                <option value="">none Selected</option>
                {availableColors.map((singleColor, i) =>
                    <option key={i} value={singleColor.name + ":" + singleColor.value}>
                        {singleColor.name}
                    </option>)}
            </select>



            <br />

            <label htmlFor='price'> Please select the price $ *</label>
            <input id='price' name="price" type='number' required 
                value={product.price}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, price: e.target.value}
                    return newPrev

                })}
            />

            <br />

            <label htmlFor='discountPrice'> Please select the discountPrice $</label>
            <input id='discountPrice' name="discountPrice" type='number'  
                value={product.discountPrice}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, discountPrice: e.target.value}
                    return newPrev

                })}
            />


            <br />

            <label htmlFor='originalPrice'> Please select the original new price $</label>
            <input id='originalPrice' name="originalPrice" type='number'  
                value={product.originalPrice}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, originalPrice: e.target.value}
                    return newPrev

                })}
            />

            <br />

            <label htmlFor='reviewScore'> Add review score / 5 *</label>
            <input id='reviewScore' name="reviewScore" type='number' min={0} max={5} step={0.5} required 
                value={product.reviewScore}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, reviewScore: e.target.value}
                    return newPrev

                })}
            />


            <br />

            <label htmlFor='peopleReviewed'> people reviewed</label>
            <input id='peopleReviewed' name="peopleReviewed" type='number'
                value={product.peopleReviewed}
                onChange={(e) => setProduct(prev => {
                    const newPrev = {...prev, peopleReviewed: e.target.value}
                    return newPrev

                })}
            />

            <br />

            <button type="submit"> Submit</button>
        </StyledForm>
    )
}

export default ProductForm
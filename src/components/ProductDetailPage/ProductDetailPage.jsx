import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utilities/axiosInstance';
import "./ProductDetailPage.css";

import eyes from "../../assets/eyes.svg";
import stars from "../../assets/stars.svg"

const ProductDetailPage = () => {
    const { parentId, productId } = useParams()
    const [allProducts, setAllProducts] = useState([])

    const [product, setProduct] = useState()

    const [lowestPrice, setLowestPrice] = useState()
    const [mostPopular, setMostPopular] = useState()

    const [selectedColor, setSelectedColor] = useState()
    const [selectedStorage, setSelectedStorage] = useState()
    const [selectedCondition, setSelectedCondition] = useState()

    const [availableConditions, setAvailableConditions] = useState([])
    const [availableColors, setAvailableColors] = useState([])
    const [availableStorages, setAvailableStorages] = useState([])

    // style selected button 
    const selectedButton = {
        fontWeight: "normal",
        backgroundColor: "#259ff620"
    } 

    useEffect(() => {
        axiosInstance.get(`/allSameParentProducts/${parentId}`)
            .then(res => {
                const products = res.data
                setAllProducts(products)

                // setting up product and product options 
                const selectedProduct = products.find((p) => p._id === productId)
                setProduct(selectedProduct)
                setSelectedColor(selectedProduct?.color)
                setSelectedStorage(selectedProduct?.storage)
                setSelectedCondition(selectedProduct?.condition)

                // Use reduce to find the object with the lowest and heighest value
                const minObject = products.reduce((min, current) => (current?.price < min?.price ? current : min), products[0]);
                setLowestPrice(minObject)

                const maxObject = products.reduce((min, current) => (current?.price > min?.price ? current : min), products[0]);
                setMostPopular(maxObject)


                const colors = new Set()
                const conditions = new Set()
                const storages = new Set()

                products.forEach(p => {
                    colors.add(p?.color.name + ":" + p?.color.value)
                    conditions.add(p?.condition)
                    storages.add(p?.storage)
                })

                const finalColors = Array.from(colors).map(str => {
                    const [name, value] = str.split(":")
                    return { name, value }
                })

                setAvailableColors(finalColors)
                setAvailableConditions(Array.from(conditions))
                setAvailableStorages(Array.from(storages))

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // this function to find proudct when select new option 
    const handleFilterButtonClick = (option, value) =>{
        let color = selectedColor
        let condition = selectedCondition
        let storage = selectedStorage

        if(option == "condition"){
            setSelectedCondition(value);
            condition = value
        }
        else if(option == "color"){   
            setSelectedColor(value);
            color = value
        }
        else if(option == "storage"){
            setSelectedStorage(value)
            storage = value
        }

        const newProduct = allProducts.find((p) => {
            return (p?.color.name == color?.name) && (p?.condition == condition) && (p?.storage == storage)
        })

        setProduct(newProduct)
    }

    const handleClickLowestPrice = () => {
        setProduct(lowestPrice)
        setSelectedColor(lowestPrice?.color)
        setSelectedStorage(lowestPrice?.storage)
        setSelectedCondition(lowestPrice?.condition)
    }

    const handleClickMostPopular = () =>{
        setProduct(mostPopular)
        setSelectedColor(mostPopular?.color)
        setSelectedStorage(mostPopular?.storage)
        setSelectedCondition(mostPopular?.condition)
    }

    // console.log(availableColors, availableConditions, availableStorages)
    // console.log(product)
    // console.log(selectedColor, selectedCondition, selectedStorage)

    return (
        <section>
            <div className='productSection'>
                <div className='productImg'>
                    <img src={product?.image} />
                </div>

                <div className='options'>
                    <div className='name-price'>
                        <h1>{product?.productName} - {product?.storage} -
                            {product?.color?.name} - {product?.description}
                        </h1>
                        <p>
                            <span>special price: </span>${product?.price}
                        </p>
                    </div>

                    <div className='filter-button-container'>
                        <p>Best picks</p>
                        <div className='filter-buttons best-picks'>
                            <button 
                            onClick={handleClickLowestPrice}
                            style={product == lowestPrice ? selectedButton : {}}
                            >
                                <img src={eyes}></img>
                                Lowest price <br></br>
                                ${lowestPrice?.price}
                            </button>

                            <button 
                            onClick={handleClickMostPopular}
                            style={product == mostPopular ? selectedButton : {}}
                            >
                                <img src={stars}></img>
                                Most popular <br></br>
                                ${mostPopular?.price}
                            </button>
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Condition</p>
                        <div className='filter-buttons'>
                            {availableConditions.map(condition => (
                                <button
                                    key={condition}
                                    style={selectedCondition === condition ? selectedButton: {}}
                                    onClick={() => {handleFilterButtonClick("condition", condition) }}
                                >
                                    {condition}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Storage (GB)</p>
                        <div className='filter-buttons'>
                            {availableStorages.map(storage => (
                                <button
                                    key={storage}
                                    style={selectedStorage === storage ? selectedButton : {}}
                                    onClick={() => {handleFilterButtonClick("storage", storage)}}
                                >
                                    {storage}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Color</p>
                        <div className='filter-buttons'>
                            {availableColors.map(color => (
                                <button
                                    className='color'
                                    key={color}
                                    style={selectedColor?.name === color?.name ? selectedButton : {}}
                                    onClick={() => {handleFilterButtonClick("color", color)}}
                                >
                                    <div style={{ backgroundColor: color?.value }}></div>
                                    {color.name}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <div className='advices'>
                this is the advice part
            </div>
        </section>
    );
};

export default ProductDetailPage;
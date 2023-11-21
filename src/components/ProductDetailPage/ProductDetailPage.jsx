import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utilities/axiosInstance';
import "./ProductDetailPage.css";
import { CartContext } from '../../App';

import eyes from "../../assets/eyes.svg";
import stars from "../../assets/stars.svg";
import fullStars from "../../assets/fullStar.svg";
import halfStars from "../../assets/halfStar.svg";
import klarna from "../../assets/klarna.svg";
import unlocked from "../../assets/unlocked.svg";
import delivery from "../../assets/delivery.svg";
import shield from "../../assets/shield.svg";
import rRate from "../../assets/r-rate.svg";




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

    // cart and set to cart 
    const { cart, setCart } = useContext(CartContext)
    const handleAddToCart = () => {
        setCart(prev => [...prev, product?._id])
    }
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
    const handleFilterButtonClick = (option, value) => {
        let color = selectedColor
        let condition = selectedCondition
        let storage = selectedStorage

        if (option == "condition") {
            setSelectedCondition(value);
            condition = value
        }
        else if (option == "color") {
            setSelectedColor(value);
            color = value
        }
        else if (option == "storage") {
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

    const handleClickMostPopular = () => {
        setProduct(mostPopular)
        setSelectedColor(mostPopular?.color)
        setSelectedStorage(mostPopular?.storage)
        setSelectedCondition(mostPopular?.condition)
    }

    function getFutureDate(daysToAdd){
        const today = new Date()
        const futureDate = new Date(today)

        futureDate.setDate(today.getDate() + daysToAdd)

        const options = {month: "short", day: "numeric"}
        const formattedDate = futureDate.toLocaleDateString('en-US', options);

        console.log(today, "/n", futureDate, formattedDate)

        return formattedDate
    }

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

                    <div className='add-to-cart'>
                        <div className="sub-text">
                            <div>
                                <div>
                                    <img className='star' src={fullStars} alt='full starts'></img>
                                    <img className='star' src={fullStars} alt='full starts'></img>
                                    <img className='star' src={fullStars} alt='full starts'></img>
                                    <img className='star' src={fullStars} alt='full starts'></img>
                                    <img className='star' src={halfStars} alt='half starts'></img>
                                </div>

                                <p>4.4/5</p>
                                <p className='underline'>(122 reviews)</p>
                            </div>

                            <div>
                                <img src={klarna} alt='klarna image'></img>
                                <p>Pay over time</p>
                                <p className='underline'>with Klarna</p>
                            </div>
                        </div>

                        <div className='cart-div'>
                            <button
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </button>

                            <img src={unlocked} alt="unlocked image" />
                        </div>
                    </div>

                    <div className='devlivery-and-data'>
                        <div>
                            <img src={delivery} alt="delivery" />
                            <div>
                               <p>Free delivery by {getFutureDate(5)} - {getFutureDate(7)}</p> 
                               <p className='small'>Express delivery by {getFutureDate(1)} - {getFutureDate(2)} from $30</p>
                            </div>
                        </div>

                        <div>
                            <img src={unlocked} alt="unlocked image" />
                            <div>
                                <p>Works with all carriers</p>
                                <p className='underline small'>Learn about unlocked phones</p>
                            </div>
                        </div>

                        <div>
                            <img src={shield} alt="shield image" />
                            <div>
                                <p className='underline'>free 30-day returns <br />1-year warranty</p>
                            </div>
                        </div>

                        <div>
                            <img src={rRate} alt="verified rating" />
                            <div>
                                <p className='underline'>Verified refubrished in the US</p>
                            </div>
                        </div>
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
                                    style={selectedCondition === condition ? selectedButton : {}}
                                    onClick={() => { handleFilterButtonClick("condition", condition) }}
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
                                    onClick={() => { handleFilterButtonClick("storage", storage) }}
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
                                    onClick={() => { handleFilterButtonClick("color", color) }}
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
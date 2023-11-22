import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utilities/axiosInstance';
import "./ProductDetailPage.css";
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

import eyes from "../../assets/eyes.svg";
import stars from "../../assets/stars.svg";
import fullStars from "../../assets/fullStar.svg";
import halfStars from "../../assets/halfStar.svg";
import klarna from "../../assets/klarna.svg";
import unlocked from "../../assets/unlocked.svg";
import delivery from "../../assets/delivery.svg";
import shield from "../../assets/shield.svg";
import rRate from "../../assets/r-rate.svg";
import animatedButterfly from "../../assets/animated-butterfly.svg";
import love from "../../assets/love.svg";
import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import americanExpress from "../../assets/americanExpress.svg";
import applePay from "../../assets/applePay.svg";
import paypal from "../../assets/paypal.svg";
import discover from "../../assets/discover.svg";
import happyCustomers from "../../assets/happyCustomers.svg";
import OfferProducts from '../OfferProducts/OfferProducts';




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

    const [scrollingDown, setScrollignDown] = useState(false)

    // cart and set to cart 
    const { cart, setCart } = useContext(CartContext)
    const handleAddToCart = () => {
        if(product?.storage){
            setCart(prev => [...prev, product?._id])
        }
    }
    // style selected button 
    const selectedButton = {
        fontWeight: "normal",
        backgroundColor: "#259ff620"
    }


    // using scroll direction 
    const handleScroll = (event) => {
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail || -event.deltaY)));
        const direction = delta < 0 ? 'down' : 'up';


        if (direction === "down") {
            setScrollignDown(true)
        } else if (direction === "up") {
            setScrollignDown(false)
        }
    };

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

        // event listener to listen to window scroll 
        const scrollElement = document.querySelector("body");
        scrollElement.addEventListener('wheel', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            scrollElement.removeEventListener('wheel', handleScroll);
        };
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

    function getFutureDate(daysToAdd) {
        const today = new Date()
        const futureDate = new Date(today)

        futureDate.setDate(today.getDate() + daysToAdd)

        const options = { month: "short", day: "numeric" }
        const formattedDate = futureDate.toLocaleDateString('en-US', options);

        console.log(today, "/n", futureDate, formattedDate)

        return formattedDate
    }

    return (
        <section className='singleProductPage'>

            <div id='top-add-to-cart' style={scrollingDown ? { top: 0 } : { top: "-100%" }}>
                <div className='top-cart-product-info'>
                    <img src={product?.image} alt="" />
                    <h1>{product?.productName} - {product?.storage} - {product?.color?.name} - {product?.description}</h1>
                </div>

                <div className='top-cart-info'>
                    <p>
                        <span>special price: </span>${product?.price}
                    </p>
                    <button
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>

            <nav className='breadcrumb'>
                <span>
                    <Link to="/">Home</Link>
                </span>

                <span> {">"} </span>

                <span>
                    <Link to="/preowned">Pre owned</Link>
                </span>

                <span> {">"} </span>

                <span>
                    <Link to="/preowned">Iphone</Link>
                </span>

                <span> {">"} </span>

                <span>
                    <Link to="" className='currentPage'>{product?.productName} - {product?.storage} - {product?.color?.name} - {product?.description}</Link>
                </span>

            </nav>
            <div className='productSection'>
                <div className='productImg'>
                    <img src={product?.image} />
                </div>

                <div className='options'>

                    <div className='butterfly-suggestion'>
                        <Link to="#why-better">
                            <img src={animatedButterfly} alt="animated butterfly" />

                            <span>Better than new</span>
                        </Link>
                    </div>

                    <div className='name-price'>
                        <h1>{product?.productName} - {product?.storage} - {product?.color?.name} - {product?.description}
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
                                <p className='semi-bold'>Free delivery by {getFutureDate(5)} - {getFutureDate(7)}</p>
                                <p className='small'>Express delivery by {getFutureDate(1)} - {getFutureDate(2)} from $30</p>
                            </div>
                        </div>

                        <div>
                            <img src={unlocked} alt="unlocked image" />
                            <div>
                                <p className='semi-bold'>Works with all carriers</p>
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
                            <img src={rRate} className='r-rate' alt="verified rating" />
                            <div>
                                <p className='underline'>Verified refubrished in the US</p>
                            </div>
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Best picks</p>
                        <div className='filter-buttons lowest-and-best'>
                            <button
                                onClick={handleClickLowestPrice}
                                style={product == lowestPrice ? selectedButton : {}}
                            >
                                <img src={eyes}></img>
                                Lowest price <br></br>
                                ${lowestPrice?.price}
                            </button>

                            <button
                                className='best-pick'
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

                    <div className='comes-with'>
                        <p>Comes with</p>

                        <span>
                            <img src={love} alt="love svg" />
                            Good Karma
                        </span>
                        <span>
                            <img src={delivery} alt="love svg" />
                            Fast delivery
                        </span>
                    </div>

                    <div className='info-buttons'>
                        <button>
                            <span>Technical specification</span>
                            <span>{">"}</span>
                        </button>
                        <button>
                            <span>Perks & benefits included</span>
                            <span>{">"}</span>
                        </button>
                        <button>
                            <span>Frequently asked questions</span>
                            <span>{">"}</span>
                        </button>
                    </div>

                    <div className='customer-and-payment-info'>
                        <div className='quality-assurance'>
                            <img src={happyCustomers} alt="happyCustomers icon" />
                            <div>
                                <p>Quality checked and sold by <Link to={"/"}>Global traders</Link></p>
                                <p className='small-font'>Trusted seller and optimzie customer satisfaction</p>
                            </div>
                        </div>

                        <div className='payment-accepts'>
                            <p className='small-font'>Accepts</p>
                            <div>
                                <img src={visa} alt="visa card" />
                                <img src={master} alt="master card" />
                                <img src={discover} alt="discover card" />
                                <img src={americanExpress} alt="americalExpress card" />
                                <img src={paypal} alt="paypal card" />
                                <img src={applePay} alt="applePay card" />
                                <img src={klarna} alt="klarna card" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='offer-products'>
                <OfferProducts></OfferProducts>
            </div>

            <div className='advices' id='why-better'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus officiis quaerat assumenda id dolore ut explicabo reiciendis pariatur, nulla libero dolores quis optio expedita, repudiandae commodi illum quae, rerum exercitationem praesentium. Molestiae aliquid deleniti, veniam molestias incidunt commodi eaque libero aliquam ab tempora sed excepturi, illo quibusdam facere quia.
            </div>
        </section>
    );
};

export default ProductDetailPage;
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import SingleProduct from "../SingleProduct/SingleProduct";
import ScrollToTop from "../../utilities/ScrollToTop";
import "./Preowned.css"
import { Slider } from "@mui/material";

import freeShipping from "../../assets/freeStandardShipping.svg";
import payOverTime from "../../assets/payOverTime.svg";
import thirtyDaysWarrenty from "../../assets/thirtyDaysWarrenty.svg";
import bestQuality from "../../assets/shield.svg";


import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Loading from "../Loading/Loading";
import { useLocation } from "react-router-dom";

const Preowned = () => {

    const [nProducts, setNproducts] = useState([])
    const [moreProductsInDb, setMoreProductsInDb] = useState(true)
    const [loading, setLoading] = useState(false)
    const prodcutsReq = 12
    const productSkip = useRef(0)

    const loaction = useLocation()

    const [productsName, setProductsName] = useState([])

    const [query, setQuery] = useState({ productName: [], condition: [], storage: [], color: [], price: [0, 1500] })

    const filtersChosen = query?.productName?.length + query?.condition?.length + query?.storage?.length + query?.color?.length + ((query?.price[0] > 10 || query?.price[1] < 1480) ? 1 : 0)

    // slider price range with material ui
    const [price, setPrice] = useState([0, 1500]);
    const [sliderMoving, setSliderMoving] = useState(false)

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
    ]

    const requestProduct = () => {
        setLoading(true)
        axiosInstance.post(`products/${prodcutsReq}/${productSkip.current}`, query)
            .then(res => {
                if (res.data.length) {
                    setNproducts(prev => [...prev, ...res.data])
                    setMoreProductsInDb(true)
                } else {
                    setMoreProductsInDb(false)
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        axiosInstance.get("available-catagories")
            .then(result => {
                const res = result.data[0]?.categories

                res.sort()
                setProductsName(res)
            })
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {

        if (!location.search) {
            requestProduct()

        } else {
            setLoading(true)
            axiosInstance.get(`searchproducts?search=${location.search}`)
                .then(res => setNproducts([...res.data]))
                .catch(error => console.log("error in preowned search: ", error))
                .finally(() => setLoading(false))
        }

        console.log("location search: ", location.search)


    }, [location, location.search])


    const handleRangeChange = (event, newValue) => {
        setPrice(newValue);

        setQuery(prev => {
            prev.price = price
            return prev
        })
    };

    // when slider stops , request the data based on query 
    const handleSliderRelease = () => {
        setSliderMoving(false)

        setNproducts([])
        productSkip.current = 0

        requestProduct()
    }


    const optionIntarected = (event) => {
        const name = event.target.name
        const preQuery = query
        const val = event.target.value

        if (event.target.checked === true) {
            preQuery[name].push(val)
        }
        else {
            preQuery[name] = preQuery[name].filter(value => value !== val)
        }

        setQuery(preQuery)
        setNproducts([])
        productSkip.current = 0

        requestProduct()
    }

    const handleSeeMore = () => {
        productSkip.current += prodcutsReq
        requestProduct()
    }

    const handleFiltershowHide = () => {
        const filter = document.getElementById("filter-options")
        const showBtn = document.getElementById("mobile-show-products-btn")

        filter.classList.toggle("show")
        showBtn.classList.toggle("show")
    }


    return (
        <main>
            <ScrollToTop></ScrollToTop>

            <div className="top-title-div">
                <p>
                    <img src={freeShipping} alt="" />
                    <span>Free standard shipping</span>
                </p>
                <p>
                    <img src={payOverTime} alt="" />
                    <span>Pay over time.</span>
                </p>
                <p>
                    <img src={thirtyDaysWarrenty} alt="" />
                    <span>1-month warranty</span>
                </p>
                <p>
                    <img src={bestQuality} alt="" />
                    <span>Best quality</span>
                </p>
            </div>

            <h1 className="pre-title">Pre Owned phones</h1>

            <section className='preowned-container'>

                <div id="filter-options" className="product-filter">

                    <div className="mobile-view">
                        <p>Filter</p>
                        <button onClick={handleFiltershowHide}>
                            <CloseOutlinedIcon></CloseOutlinedIcon>
                        </button>

                    </div>

                    <div id="mobile-show-products-btn">
                        <button onClick={handleFiltershowHide}>
                            See {nProducts?.length} products
                        </button>
                    </div>

                    <div className="price-range">
                        <p >Price range:</p>
                        <Slider
                            min={0}
                            max={1500}
                            getAriaLabel={() => 'Temperature range'}
                            value={price}
                            onChange={handleRangeChange}
                            valueLabelDisplay="on"
                            getAriaValueText={(val) => `${val} ++`}

                            onTouchStart={() => setSliderMoving(true)}
                            onMouseDown={() => setSliderMoving(true)}

                            onTouchEnd={handleSliderRelease}
                            onMouseUp={handleSliderRelease}

                        />

                        <p><span>Min</span> <span>Max</span></p>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Product model : </p>

                        <div className="filter-options">
                            {productsName.map(SingleproductsName => (
                                <label key={SingleproductsName}>

                                    <input type="checkbox" className="productName" name="productName" value={SingleproductsName}
                                        onChange={optionIntarected}
                                    /> {SingleproductsName}
                                </label>
                            ))}

                        </div>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Storage : </p>

                        <label >
                            <input type="checkbox" className="storage" name="storage" value="64 GB"
                                onChange={optionIntarected}
                            /> 64 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="128 GB"
                                onChange={optionIntarected}
                            /> 128 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="256 GB"
                                onChange={optionIntarected}
                            /> 256 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="512 GB"
                                onChange={optionIntarected}
                            /> 512 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="1 TB"
                                onChange={optionIntarected}
                            /> 1 TB
                        </label>

                    </div>


                    <div className="filter-div">
                        <p className="filter-name">Condition : </p>

                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Fair"
                                onChange={optionIntarected}
                            /> Fair
                        </label>
                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Good"
                                onChange={optionIntarected}
                            /> Good
                        </label>
                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Excellent"
                                onChange={optionIntarected}
                            /> Excellent
                        </label>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Colors : </p>

                        {availableColors.map(color => (
                            <label key={color.value}>

                                <input type="checkbox" className="color" name="color" value={color.name}
                                    onChange={optionIntarected}
                                /> {color.name}
                            </label>
                        ))}

                    </div>

                </div>



                <div className="pre-products">
                    {loading ? <Loading /> :
                        <>
                            <div className='preowned'>
                                {nProducts && nProducts.map(product => {
                                    return <SingleProduct key={product._id} product={product}></SingleProduct>
                                })}

                            </div>
                            <button className='see-more' onClick={handleSeeMore} disabled={moreProductsInDb ? false : true}> See More</button>
                        </>
                    }
                </div>


            </section>

            <div className="mobile-filter">
                <button
                    id="filter-btn"
                    onClick={handleFiltershowHide}
                >
                    <span>Filter</span>
                    <TuneOutlinedIcon></TuneOutlinedIcon>
                </button>

                <span>{filtersChosen ? filtersChosen : ""}</span>
            </div>
        </main>
    );
};

export default Preowned;
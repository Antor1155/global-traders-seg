import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import SingleProduct from "../SingleProduct/SingleProduct";
import ScrollToTop from "../../utilities/ScrollToTop";
import "./Preowned.css"
import { Slider } from "@mui/material";


const Preowned = () => {

    const [nProducts, setNproducts] = useState([])
    const [moreProductsInDb, setMoreProductsInDb] = useState(true)
    const prodcutsReq = 8
    const productSkip = useRef(0)

    const [productsName, setProductsName] = useState([])

    const [query, setQuery] = useState({ model: [], condition: [], storage: [], color: [], value: [0, 1500] })

    // slider price range with material ui
    const [value, setValue] = useState([0, 1500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        setQuery(prev => {
            prev.value = value
            return prev
        })
        
    };



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
        axiosInstance.get(`products/${prodcutsReq}/${productSkip.current}`)
            .then(res => {
                if (res.data.length) {
                    setNproducts(prev => [...prev, ...res.data])
                } else {
                    setMoreProductsInDb(false)
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        requestProduct()
        axiosInstance.get("catagory")
            .then(result => {
                const data = result.data
                const res = data.map(d => d.modelName)
                res.sort()
                setProductsName(res)
            })
            .catch(error => console.log(error))
    }, [])


    const handleSeeMore = () => {
        productSkip.current += prodcutsReq
        requestProduct()
    }

    const uncheckOthers = (event) => {
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
    }
    return (
        <main>
            <ScrollToTop></ScrollToTop>

            <section className='preowned-container'>

                <div className="product-filter">
                    <div className="price-range">
                        <p >Price range:</p>
                        <Slider
                            min={0}
                            max={1500}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            getAriaValueText={(val) => `${val} ++`}

                        />

                        <p><span>Min</span> <span>Max</span></p>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Model : </p>

                        <div className="filter-options">
                            {productsName.map(SingleproductsName => (
                                <label key={SingleproductsName}>

                                    <input type="checkbox" className="model" name="model" value={SingleproductsName}
                                        onChange={uncheckOthers}
                                    /> {SingleproductsName}
                                </label>
                            ))}

                        </div>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Storage : </p>

                        <label >
                            <input type="checkbox" className="storage" name="storage" value="64 GB"
                                onChange={uncheckOthers}
                            /> 64 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="128 GB"
                                onChange={uncheckOthers}
                            /> 128 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="256 GB"
                                onChange={uncheckOthers}
                            /> 256 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="512 GB"
                                onChange={uncheckOthers}
                            /> 512 GB
                        </label>
                        <label >
                            <input type="checkbox" className="storage" name="storage" value="1 TB"
                                onChange={uncheckOthers}
                            /> 1 TB
                        </label>

                    </div>


                    <div className="filter-div">
                        <p className="filter-name">Condition : </p>

                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Fair"
                                onChange={uncheckOthers}
                            /> Fair
                        </label>
                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Good"
                                onChange={uncheckOthers}
                            /> Good
                        </label>
                        <label >
                            <input type="checkbox" className="condition" name="condition" value="Excellent"
                                onChange={uncheckOthers}
                            /> Excellent
                        </label>

                    </div>

                    <div className="filter-div">
                        <p className="filter-name">Colors : </p>

                        {availableColors.map(color => (
                            <label key={color.value}>

                                <input type="checkbox" className="color" name="color" value={color.name}
                                    onChange={uncheckOthers}
                                /> {color.name}
                            </label>
                        ))}

                    </div>

                </div>

                <div className='preowned'>
                    {nProducts && nProducts.map(product => {
                        return <SingleProduct key={product._id} product={product}></SingleProduct>
                    })}

                </div>

            </section>

            <button className='see-more' onClick={handleSeeMore} disabled={moreProductsInDb ? false : true}> See More</button>

        </main>
    );
};

export default Preowned;
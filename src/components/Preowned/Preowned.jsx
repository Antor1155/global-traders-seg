import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import SingleProduct from "../SingleProduct/SingleProduct";
import ScrollToTop from "../../utilities/ScrollToTop";
import "./Preowned.css"


const Preowned = () => {

    const [nProducts, setNproducts] = useState([])
    const [moreProductsInDb, setMoreProductsInDb] = useState(true)
    const prodcutsReq = 8
    const productSkip = useRef(0)

    const [productsName, setProductsName] = useState([])

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
        const allCheckboxWithSameName = document.getElementsByName(name)

        allCheckboxWithSameName.forEach(box => {
            if (box !== event.target) {
                box.checked = false
            }
        })


    }
    return (
        <main>
            <ScrollToTop></ScrollToTop>

            <section className='preowned-container'>

                <div className="product-filter">
                    <div className="model">
                        <p>Model : </p>

                        <label>
                            <input type="checkbox" className="model" name="model" value=""
                                onChange={uncheckOthers}
                            /> All
                        </label>
                        {productsName.map(SingleproductsName => (
                            <label key={SingleproductsName}>

                                <input type="checkbox" className="model" name="model" value="iphone 8"
                                    onChange={uncheckOthers}
                                /> {SingleproductsName}
                            </label>
                        ))}

                    </div>

                    <div className="Storage">
                        <p>Storage : </p>

                        <label>
                            <input type="checkbox" className="storage" name="storage" value=""
                                onChange={uncheckOthers}
                            /> All
                        </label>

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
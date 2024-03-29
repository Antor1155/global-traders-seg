import { Link } from "react-router-dom";
import BootstrapCarousel from "../BootstrapCarousel/BootstrapCarousel";
import "./Home.css"

import SingleProduct from "../SingleProduct/SingleProduct";
import TopDeals from "../SingleProduct/TopDeals";
import Comments from "../Comments/Comments";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import ScrollToTop from "../../utilities/ScrollToTop";
import TradeDifference from "./TradeDifference";

const Home = () => {
    const [nProducts, setNproducts] = useState([])
    const [moreProductsInDb, setMoreProductsInDb] = useState(true)
    const prodcutsReq = 10
    const productSkip = useRef(0)


    const requestProduct = () => {
        axiosInstance.post(`products/${prodcutsReq}/${productSkip.current}`,
            { productName: [], condition: [], storage: [], color: [], price: [0, 1500] })
            .then(res => {
                if (res.data.length) {
                    setNproducts(prev => [...prev, ...res.data])
                } else {
                    setMoreProductsInDb(false)
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(requestProduct, [])


    return (
        <>
            <main>
                <ScrollToTop></ScrollToTop>
                <BootstrapCarousel></BootstrapCarousel>

                <div className='logos'>
                    <div className="logos-container">
                        <div>
                            <img src="/logos/return.png" alt='return' />
                            <span> 1 month Warrenty</span>
                        </div>

                        <div>
                            <img src="/logos/giftcard.png" alt='giftcard' />
                            <span> GT Gift Card</span>
                        </div>

                        <div>
                            <img src="/logos/fastdelivery.png" alt='fastdelivery' />
                            <span> Fast Delivery</span>
                        </div>


                        <div>
                            <img src="/logos/return.png" alt='return' />
                            <span> 30 Days Return</span>
                        </div>

                        <div>
                            <img src="/logos/trustedseller.png" alt='trustedseller' />
                            <span> Trusted Seller</span>
                        </div>

                        <div>
                            <img src="/logos/klarna.png" alt='klarna' />
                            <span> Payment Plan</span>
                        </div>


                        {/* show on mobile screen only  */}
                        <div className="mobile-view">
                            <img src="/logos/return.png" alt='return' />
                            <span> 1 month Warrenty</span>
                        </div>

                        <div className="mobile-view">
                            <img src="/logos/giftcard.png" alt='giftcard' />
                            <span> GT Gift Card</span>
                        </div>

                        <div className="mobile-view">
                            <img src="/logos/fastdelivery.png" alt='fastdelivery' />
                            <span> Fast Delivery</span>
                        </div>

                    </div>
                </div>

                <div className='pre-and-refub'>
                    <Link to="preowned"> PRE-OWNED</Link>
                    <Link to="wholesale"> WHOLESALE</Link>
                </div>


                <div className='products'>
                    {nProducts && nProducts.slice(0, 4).map(product => {
                        return <SingleProduct key={product._id} product={product}></SingleProduct>
                    })}

                </div>

                <Link to="/preowned" className='see-more'> See More</Link>

                <div className='adds'>
                    <img src='/adds/add1.png' alt='product add' />
                    <img src='/adds/add2.png' alt='product add' />
                    <img src='/adds/add3.png' alt='product add' />
                    <img src='/adds/add4.png' alt='product add' />
                </div>

                <Link to="/preowned">
                    <img className='sub-banner' src="/staticImages/second-banner.png" alt="second banner" />
                </Link>

                <h3 className="text-top-deals">TOP <span>DEALS</span> </h3>

                <div className='top-delas-products'>
                    {nProducts && nProducts.map(product => {
                        return <TopDeals key={product._id} product={product}></TopDeals>
                    })}
                </div>
            </main>

            <TradeDifference />

            <Comments></Comments>
        </>
    );
};

export default Home;
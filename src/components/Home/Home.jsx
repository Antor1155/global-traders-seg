import { Link } from "react-router-dom";
import BootstrapCarousel from "../BootstrapCarousel/BootstrapCarousel";
import "./Home.css"

const Home = () => {
    return (
        <main>
            <BootstrapCarousel></BootstrapCarousel>

            <div className='logos'>
                <div>
                    <img src="/logos/warrenty.png" alt='warrenty' />
                    <span> 1 Year Warrenty</span>
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
                    <img src="/logos/trustedseller.png" alt='trustedseller' />
                    <span> Trusted Seller</span>
                </div>

                <div>
                    <img src="/logos/klarna.png" alt='klarna' />
                    <span> Payment Plan</span>
                </div>

                <div>
                    <img src="/logos/return.png" alt='return' />
                    <span> 30 Days Return</span>
                </div>
            </div>

            <div className='pre-and-refub'>
                <Link to="preowned"> PRE-OWNED</Link>
                <Link to="refubrished"> REFUBRISHED</Link>
            </div>

        </main>
    );
};

export default Home;
import "./MyFooter.css"
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <footer>
        <div className='footer-section'>
            <div>
                <img className='logo' src='/staticImages/globalgtIcon.png' />
                
                <p>Our mission is to make technology affordable; to empower the world by extending the life of used electronics through the hands of others.</p>
                
                <Link to="follow-us"> Follow Us</Link>
            </div>

            <div>
                <p>Quick Links</p>
                
                <Link to="all-products"> SEE ALL PRODUCTS</Link>
                <Link to="faq"> FAQS</Link>
                <Link to="return-policy"> RETURN & EXCHANGE POLICY</Link>
                <Link to="privacy-policy"> PRIVACY POLICY </Link>
                <Link to="about-us"> WHO WE ARE </Link>
                <Link to="myaccount"> MY ACCOUNT </Link>
            </div>

            <div>
                <h4> Subscribe To Our Newsletter</h4>
                <form>
                    <input type="email" required></input>
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>

        <p>	&copy; 2023 Global Traders, Inc </p>

    </footer>
  )
}

export default MyFooter
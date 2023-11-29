import "./ContactUs.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Accordion } from "react-bootstrap";

const Contactus = () => {
    return (
        <section>
            <div className="contact-title">
                <p>Need Assistance</p>
                <p>How can we help you?</p>

                <div className="contact-logos">
                    <a href="https://www.instagram.com/globaltraders_usa/" target="_blank"> <InstagramIcon></InstagramIcon> </a>
                    <a href="https://www.facebook.com/usa.globaltraders" target="_blank"> <FacebookOutlinedIcon></FacebookOutlinedIcon> </a>
                    <a href="mailto:usa.globaltraders@gmail.com" target="_blank"> <EmailOutlinedIcon></EmailOutlinedIcon> </a>
                </div>
            </div>

            <div className="contact-info">
                <h1>Contact Us</h1>
                <p>on Facebook, Instagram or email us at <a href="mailto:usa.globaltraders@gmail.com" target="_blank">usa.globaltraders@gmail.com</a></p>

                <h3 className="sub-header">Most frequently asked questions</h3>

                <Accordion>
                    <Accordion.Item eventKey="0" className='mb-2'>
                        <Accordion.Header><h3>How do I contact Global traders ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>You can contact Global traders using their Facebook, Instagram or Email address. For any important issue, we suggest to contact us through our official email <a className="underline" href="mailto:usa.globaltraders@gmail.com" target="_blank">usa.globaltraders@gmail.com</a></p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className='mb-2'>
                        <Accordion.Header><h3>How do I cancel an order ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>When you want to cancel order, contact us to out email <a className="underline" href="mailto:usa.globaltraders@gmail.com" target="_blank">usa.globaltraders@gmail.com</a> with your order Id and email address you placed the order with. If the confirmation is made through email before the product shipped, we will cancel the order and refund your money.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='mb-2'>
                        <Accordion.Header><h3>How do I get my order email and order Id ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>On top right corner, "My Account" button will take you to your account page. After logged in, You will be able to see all your orders, shipping details, order id and order details ; made from logged in email address.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mb-2'>
                        <Accordion.Header><h3>How can I get refund ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>Once your order is cancelled or you return the product with-in return tenure, we will start porcessing your refund. You will get your refund through the same payment gateway you paid with.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mb-2'>
                        <Accordion.Header><h3>Which payment methods are availbale ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>We accept Visa, MasterCard, Discover, and American Express. PayPal and Klarna are also options if offered by the seller. We don’t accept payments via bank transfer, check, or cash.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='mb-2'>
                        <Accordion.Header><h3>How can I ask for repair ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>If your product is under warranty period and abide by our warranty policy, You can ask for repair. Using your order email and order Id contact us at <a className="underline" href="mailto:usa.globaltraders@gmail.com" target="_blank">usa.globaltraders@gmail.com</a>. If the product is not repairable, we will provide a new product of same condition as your original order.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </section>
    );
};

export default Contactus;
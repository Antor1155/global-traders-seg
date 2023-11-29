import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Resources.css";

import unlockedPhoneImg from "../../assets/notificationInfoImages/americanExpress.svg"
import phoneconditon from "../../assets/notificationInfoImages/phoneCondition.svg"
import warranty from "../../assets/notificationInfoImages/warranty-modal.svg"
import rrate from "../../assets/r-rate.svg"
import { Accordion } from 'react-bootstrap';
import { Handshake } from '@mui/icons-material';

const Resources = () => {
    return (
        <section className='resource'>

            <h2>Blogs</h2>
            <div className='resource-blogs'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={unlockedPhoneImg} />
                    <Card.Body>
                        <Card.Title>Enhance Your Study Experience with these 14 Smartphone Apps</Card.Title>
                        <Card.Text>
                            In today’s fast-paced digital era, smartphones have become an essential part of our daily lives, and made studying easier. They offer endless possibilities, including assisting ...
                        </Card.Text>
                        <p className='underline'>Read more</p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={rrate} />
                    <Card.Body>
                        <Card.Title>Boost Your Content Creation with These 11 Powerful Apps</Card.Title>
                        <Card.Text>
                            In today’s digital age, content creation has become an integral part of personal branding, marketing, and online presence. Whether you’re a blogger, social media influencer, ...
                        </Card.Text>
                        <p className='underline'>Read more</p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={warranty} />
                    <Card.Body>
                        <Card.Title>Tips to Optimize Your Smartphone’s Battery in 2023</Card.Title>
                        <Card.Text>
                            In today’s fast-paced digital world, our smartphones have become an indispensable part of our lives. From communication to entertainment, leisure, and productivity, we rely heavily ...
                        </Card.Text>
                        <p className='underline'>Read more</p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={phoneconditon} />
                    <Card.Body>
                        <Card.Title>Reasons Why You Should Monetize Your Old Smartphone in 2023</Card.Title>
                        <Card.Text>
                            Wondering what to do with your old smartphone? As newer, and more innovative smartphones hit the market, many of us find ourselves contemplating what to ...
                        </Card.Text>
                        <p className='underline'>Read more</p>
                    </Card.Body>
                </Card>
            </div>

            <h2>Frequently asked questions</h2>

            <div className='accordion-container'>
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

                    <Accordion.Item eventKey="2" className='mb-2'>
                        <Accordion.Header><h3>How do I get my order email and order Id ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>On top right corner, "My Account" button will take you to your account page. After logged in, You will be able to see all your orders, shipping details, order id and order details ; made from logged in email address.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mb-2'>
                        <Accordion.Header><h3>How can I get refund ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>Once your order is cancelled or you return the product with-in return tenure, we will start porcessing your refund. You will get your refund through the same payment gateway you paid with.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='mb-2'>
                        <Accordion.Header><h3>Which payment methods are availbale ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>We accept Visa, MasterCard, Discover, and American Express. PayPal and Klarna are also options if offered by the seller. We don’t accept payments via bank transfer, check, or cash.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='mb-2'>
                        <Accordion.Header><h3>How can I ask for repair ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>If your product is under warranty period and abide by our warranty policy, You can ask for repair. Using your order email and order Id contact us at <a className="underline" href="mailto:usa.globaltraders@gmail.com" target="_blank">usa.globaltraders@gmail.com</a>. If the product is not repairable, we will provide a new product of same condition as your original order.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className='mb-2'>
                        <Accordion.Header><h3>What are refurbished devices ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>Refurbished is not the same thing as used or secondhand. The sellers we partner with are held to rigorous quality guidelines that ensure every item we sell runs like new. The refurbishment process they adhere to includes meticulously cleaning, testing, and assessing every item, as well as replacing aging parts with high-quality new components. Meanwhile, with secondhand or used items, you’re left to the private seller’s good word as to their true condition, and with no guarantee or warranty.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className='mb-2'>
                        <Accordion.Header><h3>What does the 30 days warranty cover ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>This warranty is limited to technical defects and component issues that affect the functionality of your item. It doesn't cover accidental breakage or compatibility and software upgrade issues, so make sure you read up about the limits of older models and check your phone carrier's website for models they don't support.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8" className='mb-2'>
                        <Accordion.Header><h3>Will I be able to update the software on this phone ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>Yes! This device is compatible with the latest software updates.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10" className='mb-2'>
                        <Accordion.Header><h3>What's the Global trader quality assurance fee for ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <p>This fee allows us to vet and monitor the sellers we partner with, ensuring they meet our rigorous quality and customer-service standards. Your happiness is our top priority!</p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>

            <div className='advices' id='why-better'>
                <h2>Our vison</h2>
                <div className='our-vison'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-emoji-laughing-fill icons" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z" />
                        </svg>

                        <h4>CUSTOMER'S FIRST</h4>
                        <p>Treat customers great and great customers will treat you well. We are customer focused and continuously measure against our customer’s success.</p>

                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-recycle icons" viewBox="0 0 16 16">
                            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                        </svg>

                        <h4>THINK SUSTAINABLY</h4>
                        <p>Make environmentally sustainable decisions that last for generations through recycling, reusing, or trading.</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-shield-shaded icons" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                        </svg>

                        <h4>EARN TRUST THROUGH SERVICE</h4>
                        <p>Be honest and transparent through every interaction with customers, employees, and partners.</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-box-seam-fill icons" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
                        </svg>

                        <h4>INVENT AND SIMPLIFY</h4>
                        <p>Never settle for what has been done. Be creative and innovative using first principle thinking while reducing complexity.</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-hand-thumbs-up-fill icons" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                        </svg>

                        <h4>DO GOOD AND BE RESPONSIBLE</h4>
                        <p>Be kind and take care of your neighbor. Do what is right, do what is good, and find balance.</p>
                    </div>
                    <div>
                        <Handshake className='icons'></Handshake>

                        <h4>COLLABORATIVE TEAMWORK</h4>
                        <p>We believe in fostering an inclusive work environment where all ideas are heard by building a positive culture and family spirit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
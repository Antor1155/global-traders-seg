import { toast } from "react-toastify";
import axiosInstance from "../../utilities/axiosInstance";
import "./Wholesale.css";
import { useEffect, useState } from "react";
import SingleProductForWholesale from "../SingleProduct/SingleProductForWholesale";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function AddRunPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("all-products-single-variation")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const devices = e.target.devices.value;

    axiosInstance.post("add-run-form-submit", {
      name,
      email,
      phone,
      devices,
    });

    e.target.reset();
    toast("We will contact you soon !!!");
  };

  const hanldeProductclick = () => {
    const div = document.getElementById("ads-top");
    div.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ads-run">
      <div id="top-banner">
        <img src="./staticImages/banner-mobile.png" alt="wholesale banner" />
      </div>

      <div id="stock">
        <h3>DEVICES WE HAVE IN STOCK</h3>

        {/* every products available we have  */}
        {products.length === 0 ? (
          <Loading />
        ) : (
          <div id="available-products">
            {products.map((product) => (
              <div onClick={hanldeProductclick} key={product._id}>
                <SingleProductForWholesale product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div id="client-satisfaction">
        <h3>100% Client Satisfaction</h3>
        <h4>40,326</h4>
        <p>UNIT SOLD IN THE LAST 30 DAYS</p>
      </div>

      <div id="what-makes-best">
        <h2>
          What makes <span>Global Traders</span> the best ?
        </h2>

        <div id="cards">
          <div className="card">
            <h3>HIGH QUALITY PHONES</h3>
            <img src="/addrunpage/smartphone.svg" alt="smart phone" />
            <p>
              Only the best fully functional phone are sold here. 30 day hassle
              free returns.
            </p>
          </div>
          <div className="card">
            <h3>AUTHENTIC PHOTOS</h3>
            <img src="/addrunpage/gallery.svg" alt="gallery" />
            <p>No shortcuts taken. What you see is what you get.</p>
          </div>
          <div className="card">
            <h3>TRADE CERTIFIED</h3>
            <img src="/addrunpage/rating.svg" alt="rating" />
            <p>
              All phones are inspected and certified. Includes full phone
              history report.
            </p>
          </div>
        </div>
      </div>

      <div id="phone-call">
        <img src="/addrunpage/phone-call.svg" alt="phone icon" />
        <p>
          <a href="tel:740-407-0060">740-407-0060</a>
        </p>
      </div>

      <div id="ads-top">
        <div>
          <h1>
            BUY <br />
            WHOLESALE <br />
            IN BULK!
            <br />
          </h1>
          <p>
            Fill-up the form to send your wholesale purchase request. One of our
            representatives will contact you regarding your order.
          </p>
        </div>
        <div>
          <h2>LET'S CONNECT</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone" required />
            <input type="text" name="devices" placeholder="Devices" />
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    </section>
  );
}

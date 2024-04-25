import "./AddRunPage.css";

export default function AddRunPage() {
  return (
    <section id="ads-run">
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
          <h2>LET'S GET CONNECT</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Devices" />
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>

      <div id="stock">
        <h3>DEVICES WE HAVE IN STOCK</h3>
        <div></div>
        <button>View More</button>
      </div>

      <div id="client-satisfaction">
        <h3>100% Client Satisfaction</h3>
        <h4>40,326</h4>
        <p>UNIT SOLD IN THE LAST 30 DAYS</p>
      </div>

      <div id="choose-us">
        <div>
          <h3>WHY</h3>
          <h3>CHOOSE US?</h3>

          <p>
            WE ARE HERE WHEN YOU NEED US, GET TOP-QUALITY FIXING SERVICES.When
            looking for a suitable device. come to Global Traders. We have
            different devices to make navigating online more manageable and
            efficient. Our expert technicians are well-versed in all Apple@
            Products. You can trust that we will provide you with excellent
            customer service and quality products.
          </p>
        </div>

        <img src="/addrunpage/doublearrow.png" alt="logo of gt" />
      </div>

      <div id="phone-call">
        <img src="/addrunpage/phone-call.svg" alt="phone icon" />
        <p>740-407-0060</p>
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
    </section>
  );
}

import "./GradingPolicy.css";

const GradingPolicy = () => {
  return (
    <section id="grading-policy">
      <h1>Grading Policy at Global Traders</h1>

      <div id="grading-container">
        <h2>Wholesale</h2>
        <p className="list">Grade A - 10/10 or Excellent Condition</p>
        <p>
          Devices classified as Grade A are in like-new condition, with no
          visible marks or blemishes. Battery health 80% or above
        </p>

        <br />

        <p className="list">Grade AB - 8/10 or Very Good Condition</p>
        <p>
          Grade AB devices show minimal signs of use. These may include slight
          scratches, typically not on the screen.
        </p>

        <br />

        <p className="list">Grade B - 7/10 or Good Condition</p>
        <p>
          Devices in Grade B condition exhibit noticeable signs of use, such as
          scratches (which may be on the screen) and minor dents on the corners.
          Battery healthy 80% or above
        </p>

        <br />

        <p className="list">Grade C - 5/10 or Fair Condition</p>
        <p>
          Grade C devices show significant signs of use, with many scratches and
          dents, though they will never have cracks. Battery health is not
          guaranteed
        </p>

        <br />
        <br />

        <h2>Pre-owned</h2>

        <h3>Excellent </h3>
        <p className="list">Grade A - 10/10 or Excellent Condition</p>
        <p>
          Devices classified as Grade A are in like-new condition, with no
          visible marks or blemishes. Battery health 80% or above
        </p>

        <br />

        <h3>Good</h3>
        <p className="list">Grade B - 7/10 or Good Condition</p>
        <p>
          Devices in Grade B condition exhibit noticeable signs of use, such as
          scratches (which may be on the screen) and minor dents on the corners.
          Battery percentage 80% or above.
        </p>

        <br />

        <h3>Fair</h3>
        <p className="list">Grade C - 5/10 or Fair Condition</p>
        <p>
          Grade C devices show significant signs of use, with many scratches and
          dents, though they will never have cracks. Battery health is not
          guaranteed
        </p>
      </div>
    </section>
  );
};

export default GradingPolicy;

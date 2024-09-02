import React, { useState } from "react";
import phoneCondition from "../../../../assets/notificationInfoImages/phoneCondition.svg";

const Condition = () => {
  const [condi, setCondi] = useState("Fair");
  return (
    <>
      <img className="titleImg" src={phoneCondition} alt="" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <button
          style={{
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            border: condi === "Fair" ? "1px solid" : "",
          }}
          onClick={() => {
            setCondi("Fair");
          }}
        >
          Fair
        </button>
        <button
          style={{
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            border: condi === "Good" ? "1px solid" : "",
          }}
          onClick={() => {
            setCondi("Good");
          }}
        >
          Good
        </button>
        <button
          style={{
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            border: condi === "Excellent" ? "1px solid" : "",
          }}
          onClick={() => {
            setCondi("Excellent");
          }}
        >
          Excellent
        </button>
      </div>

      {condi === "Fair" && (
        <div>
          <p>Grade C - 5/10 or Fair Condition</p>
          <p>
            Grade C devices show significant signs of use, with many scratches
            and dents, though they will never have cracks. Battery health is not
            guaranteed.
          </p>
        </div>
      )}
      {condi === "Good" && (
        <div>
          <p>Grade B - 7/10 or Good Condition</p>
          <p>
            Devices in Grade B condition exhibit noticeable signs of use, such
            as scratches (which may be on the screen) and minor dents on the
            corners. Battery percentage 80% or above.{" "}
          </p>
        </div>
      )}
      {condi === "Excellent" && (
        <div>
          <p>Grade A - 10/10 or Excellent Condition</p>
          <p>
            Devices classified as Grade A are in like-new condition, with no
            visible marks or blemishes. Battery health 80% or above.
          </p>
        </div>
      )}
    </>
  );
};

export default Condition;

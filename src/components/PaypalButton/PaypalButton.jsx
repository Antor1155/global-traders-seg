import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaypalButton.css";

export default function PaypalButton({ setFormSubmitted, orderData }) {
  const initialOptions = {
    "client-id": "test",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  console.log(orderData);

  return (
    <div id="paymentGateway">
      <div id="btns">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons s></PayPalButtons>
        </PayPalScriptProvider>

        <button className="cancel" onClick={() => setFormSubmitted(false)}>
          <img src="/logos/Cancel.svg" alt="cancel button" />
        </button>
      </div>
    </div>
  );
}

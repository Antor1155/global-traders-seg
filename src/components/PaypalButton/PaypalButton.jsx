import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaypalButton.css";
import axiosInstance from "../../utilities/axiosInstance";

export default function PaypalButton({ setFormSubmitted, orderData }) {
  const initialOptions = {
    "client-id": "test",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const CreatePaypalOrder = async () => {
    try {
      const response = await axiosInstance.post("checkout-customer", orderData);

      console.log(response);

      if (response?.id) {
        return response.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : orderData;

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log("error in paypal button create order");
    }
  };

  const handlePaypalApprove = async (data, actions) => {
    try {
      const response = await axiosInstance.post(
        `checkout-customer/${data.orderId}`
      );
    } catch (error) {
      console.log("error in paypal handle approve");
    }
  };

  return (
    <div id="paymentGateway">
      <div id="btns">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={CreatePaypalOrder}
            onApprove={handlePaypalApprove}
          ></PayPalButtons>
        </PayPalScriptProvider>

        <button className="cancel" onClick={() => setFormSubmitted(false)}>
          <img src="/logos/Cancel.svg" alt="cancel button" />
        </button>
      </div>
    </div>
  );
}

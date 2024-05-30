import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaypalButton.css";
import axiosInstance from "../../utilities/axiosInstance";
import axios from "axios";

export default function PaypalButton({ setFormSubmitted, orderData }) {
  // const initialOptions = {
  //   "client-id": "test",
  //   "enable-funding": "paylater,venmo,card",
  //   "disable-funding": "",
  //   "data-sdk-integration-source": "integrationbuilder_sc",
  // };

  const CreatePaypalOrder = async () => {
    try {
      const { data: response } = await axiosInstance.post(
        "checkout-customer",
        orderData
      );

      console.log("response from create Paypal button : ", response);

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
    const response = await axiosInstance.post(
      "/checkout-customer/capture",
      data
    );

    console.log("response form approval: ", response);

    if (response?.data?.payer?.name?.given_name) {
      alert(
        `Transaction completed by ${response?.data?.payer?.name?.given_name}`
      );
    }
  };

  return (
    <div id="paymentGateway">
      <div id="btns">
        <PayPalScriptProvider>
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

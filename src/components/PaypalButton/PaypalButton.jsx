import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaypalButton.css";
import axiosInstance from "../../utilities/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import ScrollToTop from "../../utilities/ScrollToTop";

export default function PaypalButton({ setFormSubmitted, orderData }) {
  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
  };

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
      setFormSubmitted(false);

      toast(
        `Payment completed by : ${response?.data?.payer?.name?.given_name}. Thank you ! `
      );
      setTimeout(() => {
        toast("Navigate to ** My Account** page to see all your orders !");
      }, 500);
    }
  };

  return (
    <div id="paymentGateway">
      <ScrollToTop />
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

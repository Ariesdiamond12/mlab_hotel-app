import React, { useRef, useEffect } from "react";

const PayPalButton = ({ amount }) => {
  const paypalRef = useRef(null);
  const isPayPalInitialized = useRef(false); // Track if PayPal buttons have been initialized

  useEffect(() => {
    if (!isPayPalInitialized.current) {
      showPayPalWindow();
      isPayPalInitialized.current = true; // Mark PayPal as initialized to prevent duplication
    }
  }, []);

  const showPayPalWindow = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // Amount to be paid
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Payment successful!");
            console.log(details);
            // Handle successful payment here (e.g., updating booking status)
          });
        },
        onError: (err) => {
          console.error("Error during payment: ", err);
        },
      })
      .render(paypalRef.current);
  };

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;

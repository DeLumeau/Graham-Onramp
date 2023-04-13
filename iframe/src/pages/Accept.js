import React from "react";
import { Button, Form } from 'react-bootstrap';

const Accept = () => {
  return (
    <div className="accept">
      <div className="accept-text">RUNNER IS</div>
      <div className="accept-text">CONFIRMED</div>
      <div className="accept-text">Name</div>
      <div className="accept-text">ETA: X</div>
      <div className="accept-text accept-line">PRODUCT: Z</div>

      <div className="accept-text accept-line">TOTAL: $Y</div>

      <div className="accept-text">Name</div>
      <div className="accept-text">Address</div>
      <div className="accept-text">Phone</div>
      <div className="accept-text">Email</div>
      <div className="accept-text accept-line">Special Delivery Instructions</div>

      <Button className="accept-button w-75" variant="warning">PAYMENT GATEWAY</Button>

      <div className="accept-text">BITCOIN 100% SECURITY</div>
      <div className="accept-text">In Order for Transaction to Complete</div>
      <div className="accept-text">You will need to TAP ACCEPT DELIVERY</div>
      <div className="accept-text">Or MONEY BACK</div>
    </div>
  );
};

export default Accept;

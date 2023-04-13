import React from "react";
import { Button } from 'react-bootstrap';

const Reject = () => {
  return (
    <div className="reject">
      <div className="reject-text reject-title">Our Apologizies</div>
      <div className="reject-text">Runner has</div>
      <div className="reject-text">Rejected the</div>
      <div className="reject-text">Order, Please</div>
      <div className="reject-text reject-line">TRY AGAIN</div>

      <Button className="reject-button w-75" variant="danger">TRY AGAIN</Button>
    </div>
  );
};

export default Reject;

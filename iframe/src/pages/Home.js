import React from "react";
import { Button, Form } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">Business Name</div>
      <div className="home-address">Business Address</div>
      <div className="home-description">Search Or Click Items and Fill in Form below then Request  Delivery - 10 to 45 Minutes</div>
      <Button className="home-button" variant="danger">Check Cart</Button>
      <Form.Control type="email" placeholder="Enter email"/>
      <Button className="home-button" variant="danger">Click to Search</Button>
      <Button className="home-button, button-product" variant="light">PRODUCTS</Button>
      <Form.Label className="m-4">Fill in Details below</Form.Label>
      <Button className="home-button" variant="danger">Check Cart</Button>
      <Form.Control className="m-2 w-75" type="text" placeholder="Enter your Delivery Address" />
      <Form.Control className="m-2 w-75" type="text" placeholder="Enter your Name" />
      <Form.Control className="m-2 w-75" type="text" placeholder="Enter Your Phone Number" />
      <Form.Control className="m-2 w-75" type="text" placeholder="Enter Your Email" />
      <Form.Control className="m-2 w-75" type="text" placeholder="Any Special Delivery Instructions" />
      <Button className="home-button w-75" variant="success">CHECKOUT</Button>
      <Form.Label className="home-details">Save Money - Fastest On Demand Delivery Service</Form.Label>
      <Form.Label className="home-details">100% Satisfaction Guaranteed - Trusted</Form.Label>
      <Form.Label className="home-details">Usually within 10 to 45 minutes</Form.Label>
      <Button className="home-button w-100" variant="light">GOOGLE MAPS EMBED</Button>
      <Button className="home-button w-100" variant="light">PITCH</Button>
    </div>
  );
};

export default Home;

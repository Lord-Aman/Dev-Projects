import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import adidas from "../../assets/adidas.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import instagram from "../../assets/instagram.png";
import nike from "../../assets/nike.png";
import twitter from "../../assets/twitter.png";
import uber from "../../assets/uber.png";
import youtube from "../../assets/youtube.png";
import handshake from "../../assets/handshake.png";
import "./OurClients.css";

function OurClients() {
  return (
    <div class="container">
      <h2 class="text-center font-weight-bold">Our Clients</h2>

      <img src={handshake} alt="illustrator" class="center" />
      <section class="customer-logos slider">
        <div class="slide">
          <img src={adidas} alt="logo" />
        </div>
        <div class="slide">
          <img src={facebook} alt="logo" />
        </div>
        <div class="slide">
          <img src={google} alt="logo" />
        </div>
        <div class="slide">
          <img src={instagram} alt="logo" />
        </div>
        <div class="slide">
          <img src={nike} alt="logo" />
        </div>
        <div class="slide">
          <img src={twitter} alt="logo" />
        </div>
        <div class="slide">
          <img src={uber} alt="logo" />
        </div>
        <div class="slide">
          <img src={youtube} alt="logo" />
        </div>
      </section>
    </div>
  );
}

export default OurClients;

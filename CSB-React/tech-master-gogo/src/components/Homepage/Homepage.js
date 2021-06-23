import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./Homepage.css";

function Homepage() {
  return (
    <header class="site-header">
      <nav class="navbar navbar-default">
        <div class="header-inner">
          <div class="">
            <div class="row">
              <div class="col-md-12 ">
                <div class="brand logo">
                  {" "}
                  <a class="" href="#">
                    <img
                      src="logo.png"
                      style="width: 70px; height: 80px; margin-left: 82%;"
                    />
                  </a>
                </div>
                <nav id="nav-wrap" class="main-nav">
                  {" "}
                  <a id="toggle-btn" href="#">
                    <i class="fa fa-bars"></i>{" "}
                  </a>
                  <ul class="sf-menu">
                    <li class="current">
                      {" "}
                      <a href="#">Home</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">How we work</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Contact Us</a>{" "}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-12">
            <div class="col-md-6 contentpart">
              <div class="txt-part" style="padding: 88px;">
                <h1>Your Company Slogan Here</h1>
                <p>
                  Add your company's tagline,profile its Key mission, or
                  describe its range of products and services.{" "}
                </p>

                <button type="button" class="btn mybtn myblack">
                  CALL TO ACTION
                </button>
                <button type="button" class="btn mybtn">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div class="col-md-6 contentpart">
              <div class="img">
                <img
                  src="https://i.stack.imgur.com/y9DpT.jpg"
                  alt="Paris"
                  style="width:100%; height:100%; padding-top: 30px;padding-right:60px;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Homepage;

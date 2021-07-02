import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "glightbox/dist/css/glightbox.css";
import value1 from "assets/Animated/bicycle.gif";
import value2 from "assets/Animated/cafe.gif";
import value3 from "assets/Animated/coffee.gif";
import "./features.css";

const features = () => {
  return (
    <section id="values" className="values">
      <div className="container">
        <header className="section-header">
          <h2>How we Work</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <img src={value1} className="img-fluid" alt="" />
              <h3>Ad cupiditate sed est odio</h3>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src={value2} className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src={value3} className="img-fluid" alt="" />
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;

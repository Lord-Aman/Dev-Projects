import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "glightbox/dist/css/glightbox.css";
import "remixicon/fonts/remixicon.css";
import "./services.css";
import feature3 from "assets/images/features-3.png";

const services = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <div className="row feature-icons">
            <h3>We cover all the digital services that you require</h3>

            <div className="row">
              <div className="col-xl-4 text-center">
                <img src={feature3} className="img-fluid p-4" alt="" />
              </div>

              <div className="col-xl-8 d-flex content">
                <div className="row align-self-center gy-4">
                  <div className="col-md-6 icon-box">
                    <i className="ri-line-chart-line"></i>
                    <div>
                      <h4>Web Development</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-stack-line"></i>
                    <div>
                      <h4>App Development</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-brush-4-line"></i>
                    <div>
                      <h4>Social Media Management</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-magic-line"></i>
                    <div>
                      <h4>Graphics Designing</h4>
                      <p>
                        Expedita veritatis consequuntur nihil tempore laudantium
                        vitae denat pacta
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-command-line"></i>
                    <div>
                      <h4>Logo Designing</h4>
                      <p>
                        Et fuga et deserunt et enim. Dolorem architecto ratione
                        tensa raptor marte
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-radar-line"></i>
                    <div>
                      <h4>Video Production</h4>
                      <p>
                        Est autem dicta beatae suscipit. Sint veritatis et sit
                        quasi ab aut inventore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Services</h2>
            <p>Veritatis et dolores facere numquam et praesentium</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Web Development</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>App Development</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="400">
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Social Media Management</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="500">
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>Graphic Designing</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="600">
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Logo Designing</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="700">
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>Video Production</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default services;

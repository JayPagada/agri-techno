import React from "react";
import "./Contact.css";
import image from "../../assete/logo.png";

const Contact = () => {
  return (
    <div classNameName="container">
      <h1>Contact Us</h1>
      <section className="mb-4 container card ">
        <p className="text-center ">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form">
              <div className="row">
                <div className="first">
                  <div className="col-md-4">
                    <div className="md-form name">
                      <label for="name" className="">
                        Your name
                        
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="md-form email">
                      <label for="email" className="email">
                        Your email
                        
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="md-form subject">
                      <label for="subject" className="subject">
                        Subject
                        
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <div className="md-form message">
                        <label for="message">
                          Your message
                          
                        </label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="10"
                          columns="5"
                          className="form-control md-textarea"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="col-md-8">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                send
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center" >
        <div className="logo">
          <img src={image} height="95px" />
        </div>
        <div>
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;

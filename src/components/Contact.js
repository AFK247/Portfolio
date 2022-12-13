import React from "react";
import { BiPaperPlane } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact" className="hero min-h-screen bg-base-200 mt-8 ">
      <div className="hero-content flex-col sm:flex-row">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold">Let's Have a Talk!</h1>
          <p className="py-6">Do you want to Contact me?</p>
        </div>

        <form
          data-aos="fade-left"
          data-aos-duration="2000"
          action="https://getform.io/f/3d7e4ddc-0d28-4e60-92df-8597a963e61d"
          method="POST"
        >
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="textarea textarea-primary"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="textarea textarea-primary "
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="textarea textarea-primary"
              ></textarea>

              <button className="btn btn-primary">
                Send <BiPaperPlane className="ml-2 text-2xl"></BiPaperPlane>
              </button>

              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

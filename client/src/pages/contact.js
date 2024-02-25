import "../styles/contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import { animateHeader } from "../components/animateheader";
function Contact() {
  const companyName = useRef();
  const email = useRef();
  const helpText = useRef();
  const handleSubmit = (e) => {
    if (companyName.current.value === "") {
      alert("Company Name is required");
      return;
    } else if (email.current.value === "") {
      alert("Email is required");
      return;
    } else if (helpText.current.value === "") {
      alert("Help text is required");
      return;
    } else {
      const templateParams = {
        company: companyName.current.value,
        email: email.current.value,
        message: helpText.current.value,
      };

      emailjs
        .send(
          "service_iy3qdmg",
          "template_0lqrh18",
          templateParams,
          "uwJXg9B_zk3gixJKB"
        )
        .then(
          (response) => {
            alert("Successfully sent, we will be in contact with you shortly!");
            companyName.current.value = "";
            email.current.value = "";
            helpText.current.value = "";
          },
          (err) => {
            alert("FAILED...", err);
          }
        );
    }
  };
  return (
    <div className="contact-container">
      <Fade right cascade>
        <div className="contact-header">
          <h1>Contact us</h1>
          <h3>
            Need to get in contact with us? Fill out and submit the form with
            your inquiry.
          </h3>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="contact-form">
          <div className="input-with-label">
            <h1>Company Name*</h1>
            <input type="text" name="name" ref={companyName}></input>
          </div>
          <div className="input-with-label">
            <h1>Email*</h1>
            <input type="text" name="email" ref={email}></input>
          </div>
          <div className="input-with-label">
            <h1>What can we help you with?*</h1>
            <textarea name="help-text" ref={helpText}></textarea>
          </div>
          <h1 className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </h1>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;

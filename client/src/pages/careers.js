import "../styles/contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import animateHeader from "../components/animateheader";
function Careers() {
  const [file, setFile] = useState(null);
  const companyName = useRef();
  const email = useRef();
  const helpText = useRef();
  const mobileHeader = () => {
    return (
      <div className="contact-mobile-header">
        {animateHeader("Join Our Team!")}
        {animateHeader("Fill out and submit the form.")}
      </div>
    );
  };
  const handleFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf";
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      setFile(file);
    });
    fileInput.click();
  };
  const handleSubmit = (e) => {
    if (companyName.current.value === "") {
      alert("Your name is required");
      return;
    } else if (email.current.value === "") {
      alert("Email is required");
      return;
    } else if (file === null) {
      alert("Resume is required");
      return;
    } else {
      const templateParams = {
        company: companyName.current.value,
        email: email.current.value,
        message: file,
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
            setFile(null);
          },
          (err) => {
            alert("FAILED...", err);
          }
        );
    }
  };
  return (
    <div className="contact-container">
      <video
        autoPlay={true}
        muted
        loop
        playsInline
        className="background-video"
      >
        <source
          src={require("../static/careersvideo.mp4")}
          type="video/mp4"
        ></source>
      </video>
      {window.innerWidth > 500 ? "" : mobileHeader()}
      <Fade left cascade>
        <div className="contact-form">
          <div className="input-with-label">
            <h1>Your Name*</h1>
            <input type="text" name="name" ref={companyName}></input>
          </div>
          <div className="input-with-label">
            <h1>Email*</h1>
            <input type="text" name="email" ref={email}></input>
          </div>
          <div className="input-with-label">
            <h1>Resume *</h1>
            {file ? <h1>{file.name}</h1> : <h3></h3>}
            <button onClick={handleFileUpload} className="resume-button">
              Upload Resume
            </button>
          </div>
          <h1 className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </h1>
        </div>
      </Fade>
      {window.innerWidth > 500 ? (
        <div className="contact-header">
          {animateHeader("Join Our Team!")}
          {animateHeader("Fill out and submit the form.")}
          {animateHeader("We will be in contact with you shortly!")}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Careers;

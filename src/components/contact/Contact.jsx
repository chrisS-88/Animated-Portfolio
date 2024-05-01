import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>

        <div className="item">
          <h2>Mail</h2>
          <span>chrissmart920@gmail.com</span>
        </div>
        <div className="item">
          <h2>Location</h2>
          <span>Bradford, UK</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>07*********</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows="10" placeholder="Type your message here..." />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

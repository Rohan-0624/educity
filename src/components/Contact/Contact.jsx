import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import loc_icon from "../../assets/location-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85a343cc-6bdb-42cd-bc6e-e8c24db263a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Welcome to the Educity Contact Page! Whether you're interested in
          learning more about our academic programs, need help with admissions,
          or have any other questions, we're here to assist you. Our team is
          dedicated to providing you with the support and information you need
          to ensure a seamless experience at our university.
        </p>
        <ul>
          <li>
            <img src={mail_icon} /> educity@gmail.com
          </li>
          <li>
            <img src={phone_icon} /> +1 123-456-789"
          </li>
          <li>
            <img src={loc_icon} />
            77 Massachussets Ave,Cambridge <br /> MA 0213,United state
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name "
            required
          />
          <label>Phone No </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Mobile No"
            required
          />
          <label>write Your Message here</label>
          <textarea
            name="message"
            cols="10"
            rows="10"
            placeholder="Enter Your Message here ..."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

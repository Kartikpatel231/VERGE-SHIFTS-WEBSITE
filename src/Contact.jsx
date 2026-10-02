import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Select Subject",
    message: "",
  });

const [submitStatus, setSubmitStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setSubmitStatus("");

  try {
    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message.");
    }

    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "Select Subject",
      message: ""
    });

  } catch (error) {
    console.error("Contact form error:", error);
    setSubmitStatus("error");

  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Frontend demonstration only.
  //   // Connect this handler to your backend/API to send messages.
  //   alert("Thank you! Your message has been submitted.");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "Select Subject",
  //     message: "",
  //   });
  // };

  return (
    <>
      {/* <Header /> */}

      <main className="contact-page">
   
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Contact</h1>
            <p>
              Let’s start a conversation.
              <br />
              I’d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Details and Form */}
        <section className="contact-main">
          <div className="contact-details">
            {/* <a href="mailto:ria@vergshifts.com" className="contact-detail">
              <span className="contact-icon">✉</span>
              <span>ria@vergshifts.com</span>
            </a> */}

            <a
              href="mailto:connect@vergshifts.com"
              className="contact-detail"
            >
              <span className="contact-icon">✉</span>
              <span>connect@vergshifts.com</span>
            </a>

            <div className="contact-detail">
              <span className="contact-icon">⌖</span>
              <span>UAE (Global Engagements)</span>
            </div>

            {/* <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
            >
              <span className="linkedin-icon">in</span>
              <span>linkedin.com/in/yourprofile</span>
            </a> */}
          </div>

          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="Select Subject" disabled>
                    Select Subject
                  </option>
                  <option value="Strategy & Transformation">
                    Strategy & Transformation
                  </option>
                  <option value="People & Performance">
                    People & Performance
                  </option>
                  <option value="Change & Sustainability">
                    Change & Sustainability
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  required
                />
              </div>

              
<button
  type="submit"
  className="contact-submit"
  disabled={isSubmitting}
>
  {isSubmitting ? "Sending..." : "Send Message"}
  {!isSubmitting && <span>→</span>}
</button>

{submitStatus === "success" && (
  <p className="form-success">
    Thank you! Your message has been sent successfully.
  </p>
)}

{submitStatus === "error" && (
  <p className="form-error">
    Unable to send your message. Please try again.
  </p>
)}
            </form>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Contact;
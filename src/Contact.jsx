import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  organization: 150,
  organizationWebsite: 300,
  message: 2000,
};

const ALLOWED_SUBJECTS = [
  "Strategy & Transformation",
  "People & Performance",
  "Change & Sustainability",
  "General Enquiry",
];

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  organization: "",
  organizationWebsite: "",
  subject: "Select Subject",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitStatus, setSubmitStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxLength = MAX_LENGTHS[name];

    if (maxLength && value.length > maxLength) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitStatus("");
    setStatusMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setSubmitStatus("");
    setStatusMessage("");

    const cleanedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      organization: formData.organization.trim(),
      organizationWebsite: formData.organizationWebsite.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };

    // Validate required fields.
    if (
      !cleanedData.name ||
      !cleanedData.email ||
      !cleanedData.organization ||
      !cleanedData.message ||
      !cleanedData.subject ||
      cleanedData.subject === "Select Subject"
    ) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    // Validate maximum character lengths.
    for (const [field, maxLength] of Object.entries(MAX_LENGTHS)) {
      if (cleanedData[field].length > maxLength) {
        const fieldName =
          field === "organizationWebsite"
            ? "Organization Website"
            : field.charAt(0).toUpperCase() + field.slice(1);

        setSubmitStatus("error");
        setStatusMessage(
          `${fieldName} cannot exceed ${maxLength} characters.`
        );
        return;
      }
    }

    // Validate email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanedData.email)) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    // Accept only predefined subjects.
    if (!ALLOWED_SUBJECTS.includes(cleanedData.subject)) {
      setSubmitStatus("error");
      setStatusMessage("Please select a valid subject.");
      return;
    }

    // Limit the total JSON request payload to 12 KB.
    const requestBody = JSON.stringify(cleanedData);
    const payloadSize = new Blob([requestBody]).size;

    if (payloadSize > 12 * 1024) {
      setSubmitStatus("error");
      setStatusMessage(
        "Your submission is too large. Please shorten your message."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to send message."
        );
      }

      setSubmitStatus("success");
      setStatusMessage(
        "Thank you! Your message has been sent successfully."
      );

      setFormData({ ...INITIAL_FORM_DATA });
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus("error");
      setStatusMessage(
        error.message || "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>

            <p>
              Ready to Lead Your Next Transformation?
              <br />
              Let's build the roadmap together — from boardroom strategy intent
              to transformation, transition and execution.
            </p>

            <h3>Book a Consultation</h3>
          </div>
        </section>

        <section className="contact-main">
          <div className="contact-details">
            <a
              href="mailto:connect@vergeshifts.com"
              className="contact-detail"
            >
              <span className="contact-icon">✉</span>
              <span>connect@vergeshifts.com</span>
            </a>

            <a
              href="mailto:ria@vergeshifts.com"
              className="contact-detail"
            >
              <span className="contact-icon">✉</span>
              <span>ria@vergeshifts.com</span>
            </a>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {/* Name */}
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name *
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  maxLength={MAX_LENGTHS.name}
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email */}
              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email *
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  maxLength={MAX_LENGTHS.email}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Organization */}
              <div className="contact-field">
                <label htmlFor="contact-organization">
                  Organization *
                </label>

                <input
                  type="text"
                  id="contact-organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your Organization"
                  maxLength={MAX_LENGTHS.organization}
                  required
                />
              </div>

              {/* Organization Website: accepts any text */}
              <div className="contact-field">
                <label htmlFor="contact-organizationWebsite">
                  Organization Website
                </label>

                <input
                  type="text"
                  id="contact-organizationWebsite"
                  name="organizationWebsite"
                  value={formData.organizationWebsite}
                  onChange={handleChange}
                  placeholder="Enter organization website"
                  maxLength={MAX_LENGTHS.organizationWebsite}
                />
              </div>

              {/* Subject */}
              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject *
                </label>

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

                  {ALLOWED_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  maxLength={MAX_LENGTHS.message}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && <span>→</span>}
              </button>

              {/* Success message */}
              {submitStatus === "success" && (
                <p className="form-success" role="status">
                  {statusMessage}
                </p>
              )}

              {/* Error message */}
              {submitStatus === "error" && (
                <p className="form-error" role="alert">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

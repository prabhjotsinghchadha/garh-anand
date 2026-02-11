"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    // This data would come from Sanity siteSettings
    const contactInfo = {
        address: "Gurdwara Sahib, Main Street, Amritsar, Punjab 143001, India",
        phone: "+91 98765 43210",
        email: "info@sikhfoundation.org",
        hours: "Monday - Sunday: 6:00 AM - 8:00 PM",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (connect to your backend)
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-page">
            {/* Header Section */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <span className="section-label">Get In Touch</span>
                        <h1 className="page-title">Contact Us</h1>
                        <p className="page-description">
                            Have questions or want to get involved? We'd love to hear from you.
                            Reach out through any of the channels below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="content-section">
                <div className="container">
                    <div className="content-grid">
                        {/* Contact Information */}
                        <div className="info-column">
                            <div className="info-card">
                                <h2 className="info-title">Contact Information</h2>
                                <p className="info-subtitle">
                                    Multiple ways to connect with our Sangat
                                </p>

                                <div className="info-items">
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Address</h4>
                                            <p>{contactInfo.address}</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>
                                                <a href={`tel:${contactInfo.phone}`}>
                                                    {contactInfo.phone}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>
                                                <a href={`mailto:${contactInfo.email}`}>
                                                    {contactInfo.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Hours</h4>
                                            <p>{contactInfo.hours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="social-card">
                                <h3>Follow Our Journey</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link" aria-label="Facebook">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-link" aria-label="Instagram">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect
                                                x="2"
                                                y="2"
                                                width="20"
                                                height="20"
                                                rx="5"
                                                ry="5"
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-link" aria-label="YouTube">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-link" aria-label="Twitter">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="form-column">
                            <div className="form-card">
                                <h2 className="form-title">Send Us a Message</h2>
                                <p className="form-subtitle">
                                    Fill out the form below and we'll get back to you within 24
                                    hours
                                </p>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="General">General Inquiry</option>
                                            <option value="Booking">Event Booking</option>
                                            <option value="Seva">
                                                Volunteer / Seva Opportunity
                                            </option>
                                            <option value="Donation">Donation Related</option>
                                            <option value="Programs">Programs & Classes</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <button type="submit" className="submit-button">
                                        {submitted ? "✓ Message Sent!" : "Send Message"}
                                    </button>

                                    {submitted && (
                                        <div className="success-message">
                                            Thank you for reaching out! We'll respond within 24
                                            hours.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-overlay">
                        <h3>Find Us Here</h3>
                        <p>Visit our Gurdwara Sahib in Amritsar</p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-button"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page {
                    background: var(--bg-light);
                    min-height: 100vh;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .page-header {
                    background: linear-gradient(135deg, #0f4c81 0%, #1a1a2e 100%);
                    padding: 120px 0 80px;
                    color: white;
                }

                .header-content {
                    max-width: 800px;
                    text-align: center;
                    margin: 0 auto;
                }

                .section-label {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--primary-gold);
                    margin-bottom: 1rem;
                }

                .page-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                .page-description {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    line-height: 1.7;
                    opacity: 0.95;
                }

                .content-section {
                    padding: 100px 0;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 4rem;
                }

                /* Info Column */
                .info-column {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .info-card,
                .social-card {
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                }

                .info-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .info-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                }

                .info-items {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .info-item {
                    display: flex;
                    gap: 1.25rem;
                    align-items: flex-start;
                }

                .info-icon {
                    flex-shrink: 0;
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .info-icon svg {
                    stroke-width: 2;
                    color: var(--primary-dark);
                }

                .info-item h4 {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }

                .info-item p {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-primary);
                    line-height: 1.6;
                }

                .info-item a {
                    color: var(--secondary-blue);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .info-item a:hover {
                    color: var(--primary-gold);
                }

                .social-card h3 {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1.5rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .social-link {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary-blue);
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background: var(--secondary-blue);
                    color: white;
                    transform: translateY(-4px);
                }

                /* Form Column */
                .form-card {
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                }

                .form-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .form-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    padding: 0.875rem 1.25rem;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    background: white;
                    color: var(--text-primary);
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary-gold);
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 150px;
                }

                .submit-button {
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--primary-dark);
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    padding: 1rem 2.5rem;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                }

                .submit-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
                }

                .success-message {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.1);
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid #10b981;
                    text-align: center;
                }

                /* Map Section */
                .map-section {
                    height: 500px;
                }

                .map-placeholder {
                    height: 100%;
                    background: linear-gradient(
                            135deg,
                            rgba(15, 76, 129, 0.9) 0%,
                            rgba(26, 26, 46, 0.9) 100%
                        ),
                        url("/images/map-bg.jpg") center/cover;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .map-overlay {
                    text-align: center;
                    color: white;
                }

                .map-overlay h3 {
                    font-family: "Crimson Text", serif;
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                }

                .map-overlay p {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    margin-bottom: 2rem;
                    opacity: 0.95;
                }

                .map-button {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--primary-dark);
                    background: var(--primary-gold);
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }

                .map-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .page-header,
                    .content-section {
                        padding: 60px 0;
                    }

                    .info-card,
                    .social-card,
                    .form-card {
                        padding: 2rem;
                    }

                    .map-section {
                        height: 400px;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function DonatePage() {
    const [copiedAccount, setCopiedAccount] = useState(false);

    // This data would come from Sanity siteSettings
    const bankDetails = {
        accountName: "Sikh Heritage Foundation",
        accountNumber: "1234567890123456",
        ifscCode: "SBIN0001234",
        swiftCode: "SBININBB123",
        bankName: "State Bank of India",
        branch: "Main Branch, Punjab",
        qrCode: "/images/qr-code.png",
    };

    const donationImpact = [
        {
            amount: "₹500",
            impact: "Provides study materials for one student for a month",
        },
        {
            amount: "₹2,000",
            impact: "Sponsors Langar for 50 people",
        },
        {
            amount: "₹15,000",
            impact: "Donates one traditional musical instrument",
        },
        {
            amount: "₹50,000",
            impact: "Supports construction of one classroom in Vidyalay",
        },
    ];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(true);
        setTimeout(() => setCopiedAccount(false), 2000);
    };

    return (
        <div className="donate-page">
            {/* Header Section */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <span className="section-label">Support Our Mission</span>
                        <h1 className="page-title">Dasvandh & Seva</h1>
                        <p className="page-description">
                            Your contribution supports the preservation of Sikh heritage,
                            educational programs, and humanitarian aid. Every donation makes a
                            meaningful difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* Appeal Section */}
            <section className="appeal-section">
                <div className="container">
                    <div className="appeal-content">
                        <h2 className="appeal-title">Why Your Support Matters</h2>
                        <p className="appeal-text">
                            In the spirit of Dasvandh, we invite you to contribute to causes that
                            preserve our heritage and serve humanity. Your generous donations enable
                            us to:
                        </p>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">📚</div>
                                <h3>Educate Youth</h3>
                                <p>
                                    Free Gurmat education and Punjabi language classes for children
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🎵</div>
                                <h3>Preserve Heritage</h3>
                                <p>
                                    Document and teach traditional Raag-based Kirtan and Tanti Saaj
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🍽️</div>
                                <h3>Serve Langar</h3>
                                <p>
                                    Provide nutritious meals to thousands through regular Langar
                                    seva
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🏛️</div>
                                <h3>Build Infrastructure</h3>
                                <p>Construct Gurmat schools and community centers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Impact Section */}
            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title">Your Donation Impact</h2>
                    <div className="impact-grid">
                        {donationImpact.map((item, index) => (
                            <div
                                key={index}
                                className="impact-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="impact-amount">{item.amount}</div>
                                <p className="impact-description">{item.impact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bank Details Section */}
            <section className="bank-details-section">
                <div className="container">
                    <div className="details-wrapper">
                        <div className="details-content">
                            <h2 className="section-title">Bank Transfer Details</h2>
                            <p className="details-subtitle">
                                Make your donation via direct bank transfer using the details below
                            </p>

                            <div className="details-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Account Name</span>
                                    <span className="detail-value">{bankDetails.accountName}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Account Number</span>
                                    <div className="copyable-field">
                                        <span className="detail-value">
                                            {bankDetails.accountNumber}
                                        </span>
                                        <button
                                            className="copy-button"
                                            onClick={() =>
                                                copyToClipboard(bankDetails.accountNumber)
                                            }
                                        >
                                            {copiedAccount ? "✓ Copied" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">IFSC Code</span>
                                    <span className="detail-value">{bankDetails.ifscCode}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">SWIFT Code</span>
                                    <span className="detail-value">{bankDetails.swiftCode}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Bank Name</span>
                                    <span className="detail-value">{bankDetails.bankName}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Branch</span>
                                    <span className="detail-value">{bankDetails.branch}</span>
                                </div>
                            </div>

                            <div className="important-note">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="16" x2="12" y2="12" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                                <p>
                                    Please send us a confirmation email after making the donation
                                    with your transaction details.
                                </p>
                            </div>
                        </div>

                        <div className="qr-section">
                            <h3 className="qr-title">Quick Payment</h3>
                            <p className="qr-subtitle">Scan with any UPI app</p>
                            <div className="qr-wrapper">
                                <Image
                                    src={bankDetails.qrCode}
                                    alt="Donation QR Code"
                                    width={300}
                                    height={300}
                                    className="qr-image"
                                />
                            </div>
                            <p className="qr-note">UPI ID: sikhfoundation@upi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="transparency-section">
                <div className="container">
                    <div className="transparency-card">
                        <h2 className="transparency-title">Our Commitment to Transparency</h2>
                        <div className="transparency-content">
                            <div className="transparency-item">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <h3>Registered Non-Profit</h3>
                                <p>
                                    We are a registered 501(c)(3) non-profit organization with full
                                    tax exemption status.
                                </p>
                            </div>
                            <div className="transparency-item">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" y1="18" x2="12" y2="12" />
                                    <line x1="9" y1="15" x2="15" y2="15" />
                                </svg>
                                <h3>Annual Reports</h3>
                                <p>
                                    Detailed financial reports and impact assessments published
                                    annually for full accountability.
                                </p>
                            </div>
                            <div className="transparency-item">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <h3>100% Direct Use</h3>
                                <p>
                                    Every rupee donated goes directly to programs. Administrative
                                    costs covered separately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Questions About Donations?</h2>
                        <p className="cta-text">
                            Our team is here to help. Contact us for donation receipts, planned
                            giving, or corporate partnerships.
                        </p>
                        <a href="mailto:donate@example.org" className="cta-button">
                            Contact Donation Team
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .donate-page {
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

                .appeal-section {
                    padding: 100px 0;
                    background: white;
                }

                .appeal-content {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .appeal-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1.5rem;
                    text-align: center;
                    line-height: 1.2;
                }

                .appeal-text {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 4rem;
                    line-height: 1.7;
                }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2.5rem;
                }

                .benefit-card {
                    text-align: center;
                    padding: 2rem;
                }

                .benefit-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                }

                .benefit-card h3 {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .benefit-card p {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .impact-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #f8f7f4 0%, #e8e6e1 100%);
                }

                .section-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                }

                .impact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .impact-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2.5rem 2rem;
                    text-align: center;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .impact-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
                }

                .impact-amount {
                    font-family: "Crimson Text", serif;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                    margin-bottom: 1rem;
                }

                .impact-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .bank-details-section {
                    padding: 100px 0;
                    background: white;
                }

                .details-wrapper {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .details-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1.0625rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .details-grid {
                    display: grid;
                    gap: 2rem;
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    padding: 3rem;
                    border-radius: 20px;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                }

                .detail-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .detail-label {
                    font-family: "Lato", sans-serif;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-secondary);
                }

                .detail-value {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .copyable-field {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .copy-button {
                    font-family: "Lato", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    background: transparent;
                    border: 2px solid var(--secondary-blue);
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .copy-button:hover {
                    background: var(--secondary-blue);
                    color: white;
                }

                .important-note {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: rgba(255, 107, 53, 0.1);
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid var(--accent-orange);
                    margin-top: 2rem;
                }

                .important-note svg {
                    flex-shrink: 0;
                    color: var(--accent-orange);
                    stroke-width: 2;
                }

                .important-note p {
                    font-family: "Lora", serif;
                    font-size: 0.95rem;
                    color: var(--text-primary);
                    line-height: 1.6;
                    margin: 0;
                }

                .qr-section {
                    background: linear-gradient(135deg, #0f4c81 0%, #1a1a2e 100%);
                    border-radius: 20px;
                    padding: 3rem 2rem;
                    text-align: center;
                    color: white;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                }

                .qr-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .qr-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    opacity: 0.9;
                    margin-bottom: 2rem;
                }

                .qr-wrapper {
                    background: white;
                    padding: 2rem;
                    border-radius: 16px;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }

                .qr-image {
                    display: block;
                }

                .qr-note {
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--primary-gold);
                }

                .transparency-section {
                    padding: 100px 0;
                    background: var(--bg-light);
                }

                .transparency-card {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .transparency-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                }

                .transparency-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                }

                .transparency-item {
                    text-align: center;
                    padding: 2.5rem 2rem;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                }

                .transparency-item svg {
                    stroke-width: 1.5;
                    color: var(--primary-gold);
                    margin-bottom: 1.5rem;
                }

                .transparency-item h3 {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .transparency-item p {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                }

                .cta-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                }

                .cta-content {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .cta-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--primary-dark);
                    margin-bottom: 1.25rem;
                    line-height: 1.2;
                }

                .cta-text {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: rgba(26, 26, 46, 0.85);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .cta-button {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--primary-dark);
                    background: white;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 1024px) {
                    .details-wrapper {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                @media (max-width: 768px) {
                    .page-header,
                    .appeal-section,
                    .impact-section,
                    .bank-details-section,
                    .transparency-section,
                    .cta-section {
                        padding: 60px 0;
                    }

                    .details-grid {
                        padding: 2rem 1.5rem;
                    }

                    .qr-section {
                        padding: 2rem 1.5rem;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function JathedarPage() {
    // This data would normally come from Sanity CMS
    const jathedar = {
        name: "Bhai Sahib Ji",
        designation: "Head Jathedar & Spiritual Guide",
        image: "/images/jathedar.jpg",
        quote: "ਸਰਬੱਤ ਦਾ ਭਲਾ - Welfare for all",
        biography: `Bhai Sahib Ji has dedicated over three decades to the service of the Panth and the preservation of Gurmat traditions. Born into a family deeply rooted in Sikh values, he began his spiritual journey at a young age, studying under renowned Giani Jis and scholars across Punjab.

His unwavering commitment to Seva led him to establish numerous initiatives focused on education, heritage preservation, and community welfare. Under his guidance, our organization has touched thousands of lives through Langar seva, educational programs, and cultural preservation efforts.

Bhai Sahib Ji is known for his deep knowledge of Gurbani, his melodious Kirtan, and his ability to connect ancient wisdom with modern challenges. His teachings emphasize the practical application of Gurmat principles in daily life, making spirituality accessible to all ages.`,
        message: {
            title: "Message to the Sangat - February 2026",
            content: `Vaheguru Ji Ka Khalsa, Vaheguru Ji Ki Fateh,

Beloved Sangat, as we navigate the complexities of modern life, it is essential that we remain anchored in the timeless wisdom of our Gurus. The teachings of Sri Guru Granth Sahib Ji are not relics of the past but living guidance for today's challenges.

In this month, I urge each member of our Sangat to:

**Deepen Your Connection with Naam:** Set aside time daily for meditation and Simran. In the silence of contemplation, we find clarity and peace that no external source can provide.

**Practice Genuine Seva:** True service is performed without ego or expectation of reward. Whether in the Gurdwara kitchen or in your daily interactions, let selflessness guide your actions.

**Preserve Our Heritage:** Our youth must understand their roots. Take time to share stories, teach Punjabi, and explain the significance of our traditions. Heritage lost is identity lost.

**Embody Chardi Kala:** Maintain eternal optimism and courage. The Guru's path is one of fearlessness and positive spirit, regardless of circumstances.

Together, we are building not just a community but a living example of Gurmat principles. Your dedication, your questions, and your participation strengthen us all.

Remain in Chardi Kala,
Bhai Sahib Ji`,
            date: "February 1, 2026",
        },
        vision: [
            {
                title: "Spiritual Education",
                description:
                    "Establishing comprehensive Gurmat education programs that cater to all age groups, from children to seniors.",
            },
            {
                title: "Heritage Preservation",
                description:
                    "Documenting and preserving Sikh musical traditions, art forms, and historical knowledge for future generations.",
            },
            {
                title: "Community Service",
                description:
                    "Expanding our Seva initiatives to reach underprivileged communities and provide humanitarian aid.",
            },
            {
                title: "Interfaith Dialogue",
                description:
                    "Building bridges with other faith communities while maintaining the integrity of Sikh identity and values.",
            },
            {
                title: "Youth Engagement",
                description:
                    "Creating relevant programs that help young Sikhs navigate modern life while staying rooted in Gurmat.",
            },
        ],
        contact: {
            availability: "Available for consultations every Sunday, 2:00 PM - 4:00 PM",
            email: "jathedar@example.org",
        },
    };

    return (
        <div className="jathedar-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-image-wrapper">
                            <Image
                                src={jathedar.image}
                                alt={jathedar.name}
                                width={500}
                                height={600}
                                className="hero-image"
                            />
                            <div className="quote-overlay">
                                <p className="quote-text">{jathedar.quote}</p>
                            </div>
                        </div>

                        <div className="hero-text">
                            <span className="section-label">Spiritual Leadership</span>
                            <h1 className="jathedar-name">{jathedar.name}</h1>
                            <p className="jathedar-designation">{jathedar.designation}</p>

                            <div className="hero-stats">
                                <div className="stat">
                                    <div className="stat-number">30+</div>
                                    <div className="stat-label">Years of Service</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">1000+</div>
                                    <div className="stat-label">Lives Touched</div>
                                </div>
                            </div>

                            <div className="contact-info">
                                <p className="availability">{jathedar.contact.availability}</p>
                                <a href={`mailto:${jathedar.contact.email}`} className="email-link">
                                    {jathedar.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="biography-section">
                <div className="container">
                    <h2 className="section-title">Biography</h2>
                    <div className="biography-content">
                        {jathedar.biography.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="bio-paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section className="message-section">
                <div className="container">
                    <div className="message-card">
                        <div className="message-header">
                            <h2 className="message-title">{jathedar.message.title}</h2>
                            <span className="message-date">{jathedar.message.date}</span>
                        </div>
                        <div className="message-content">
                            {jathedar.message.content.split("\n\n").map((paragraph, index) => (
                                <p key={index} className="message-paragraph">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="container">
                    <h2 className="section-title">Vision & Focus Areas</h2>
                    <p className="section-subtitle">
                        Guiding principles that shape our community's direction and initiatives
                    </p>

                    <div className="vision-grid">
                        {jathedar.vision.map((item, index) => (
                            <div
                                key={index}
                                className="vision-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="vision-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <h3 className="vision-title">{item.title}</h3>
                                <p className="vision-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Connect With Us</h2>
                        <p className="cta-text">
                            Have questions or seeking guidance? Reach out to our Sangat office to
                            schedule a meeting.
                        </p>
                        <Link href="/contact" className="cta-button">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .jathedar-page {
                    background: var(--bg-light);
                    min-height: 100vh;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Hero Section */
                .hero-section {
                    padding: 100px 0;
                    background: white;
                }

                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 5rem;
                    align-items: center;
                }

                .hero-image-wrapper {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                .hero-image {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .quote-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(
                        to top,
                        rgba(15, 76, 129, 0.95) 0%,
                        transparent 100%
                    );
                    padding: 2.5rem 2rem;
                }

                .quote-text {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-style: italic;
                    color: white;
                    text-align: center;
                    line-height: 1.5;
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

                .jathedar-name {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2.5rem, 4vw, 3.5rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    line-height: 1.1;
                }

                .jathedar-designation {
                    font-family: "Lora", serif;
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                }

                .hero-stats {
                    display: flex;
                    gap: 3rem;
                    margin-bottom: 2.5rem;
                    padding: 2rem 0;
                    border-top: 2px solid #e0e0e0;
                    border-bottom: 2px solid #e0e0e0;
                }

                .stat {
                    text-align: left;
                }

                .stat-number {
                    font-family: "Crimson Text", serif;
                    font-size: 3rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .availability {
                    font-family: "Lora", serif;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                }

                .email-link {
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .email-link:hover {
                    color: var(--primary-gold);
                }

                /* Biography Section */
                .biography-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #f8f7f4 0%, #e8e6e1 100%);
                }

                .section-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 3rem;
                    text-align: center;
                    line-height: 1.2;
                }

                .section-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 4rem;
                    line-height: 1.6;
                }

                .biography-content {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .bio-paragraph {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    line-height: 1.9;
                    color: var(--text-primary);
                    margin-bottom: 1.75rem;
                }

                /* Message Section */
                .message-section {
                    padding: 100px 0;
                    background: white;
                }

                .message-card {
                    max-width: 1000px;
                    margin: 0 auto;
                    background: linear-gradient(135deg, #0f4c81 0%, #1a1a2e 100%);
                    border-radius: 24px;
                    padding: 4rem;
                    color: white;
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
                }

                .message-header {
                    border-bottom: 2px solid rgba(212, 175, 55, 0.3);
                    padding-bottom: 2rem;
                    margin-bottom: 2.5rem;
                }

                .message-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    line-height: 1.2;
                }

                .message-date {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    color: var(--primary-gold);
                    font-weight: 600;
                }

                .message-content {
                    font-family: "Lora", serif;
                    font-size: 1.0625rem;
                    line-height: 1.9;
                }

                .message-paragraph {
                    margin-bottom: 1.75rem;
                    white-space: pre-line;
                }

                /* Vision Section */
                .vision-section {
                    padding: 100px 0;
                    background: var(--bg-light);
                }

                .vision-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                    margin-top: 3rem;
                }

                .vision-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .vision-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                }

                .vision-number {
                    font-family: "Crimson Text", serif;
                    font-size: 3rem;
                    font-weight: 700;
                    color: rgba(212, 175, 55, 0.2);
                    line-height: 1;
                    margin-bottom: 1rem;
                }

                .vision-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .vision-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                }

                /* CTA Section */
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
                    .hero-content {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .hero-image-wrapper {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section,
                    .biography-section,
                    .message-section,
                    .vision-section,
                    .cta-section {
                        padding: 60px 0;
                    }

                    .message-card {
                        padding: 2.5rem 2rem;
                    }

                    .hero-stats {
                        gap: 2rem;
                    }

                    .vision-grid {
                        gap: 2rem;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ActivitiesPage() {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        // Mock data - replace with Sanity CMS fetch
        const mockEvents = [
            {
                _id: "1",
                title: "Gurmat Kirtan Darbar",
                date: "2026-03-15",
                time: "10:00 AM - 1:00 PM",
                location: "Main Gurdwara Hall",
                description:
                    "Join us for a special Kirtan Darbar featuring renowned Ragi Jathas from across the region.",
                image: "/images/event1.jpg",
                isOnline: false,
                registrationLink: "/register/kirtan-darbar",
            },
            {
                _id: "2",
                title: "Youth Gurmat Camp",
                date: "2026-03-22",
                time: "9:00 AM - 5:00 PM",
                location: "Community Center",
                description:
                    "A full-day immersive experience for youth aged 10-18 covering Gurbani, Kirtan, and Sikh history.",
                image: "/images/event2.jpg",
                isOnline: false,
                registrationLink: "/register/youth-camp",
            },
            {
                _id: "3",
                title: "Online Gurbani Vichaar Session",
                date: "2026-03-28",
                time: "7:00 PM - 8:30 PM",
                location: "Zoom",
                description:
                    "Monthly discussion on Gurbani with scholars. Open to all Sangat members worldwide.",
                image: "/images/event3.jpg",
                isOnline: true,
                registrationLink: "/register/gurbani-vichaar",
            },
            {
                _id: "4",
                title: "Langar Seva Day",
                date: "2026-04-05",
                time: "8:00 AM - 2:00 PM",
                location: "Gurdwara Kitchen",
                description:
                    "Volunteer to prepare and serve Langar. All ages welcome. No experience necessary.",
                image: "/images/event4.jpg",
                isOnline: false,
                registrationLink: "/register/langar-seva",
            },
        ];

        const mockPrograms = [
            {
                _id: "1",
                title: "Gurmat Summer Camps for Youth",
                category: "Education",
                description:
                    "Week-long residential camps during summer break focusing on Punjabi language, Sikh history, meditation, and team-building activities.",
                duration: "June - August",
                ageGroup: "8-16 years",
                image: "/images/program1.jpg",
                features: [
                    "Punjabi Classes",
                    "Kirtan Training",
                    "Sports & Games",
                    "Cultural Activities",
                ],
            },
            {
                _id: "2",
                title: "Learn Kirtan & Tabla",
                category: "Music",
                description:
                    "Regular classes for beginners and intermediate students in Kirtan and Tabla under expert guidance.",
                duration: "Year-round (Saturdays)",
                ageGroup: "All ages",
                image: "/images/program2.jpg",
                features: [
                    "Beginner Harmonium",
                    "Tabla Basics",
                    "Raag Training",
                    "Performance Opportunities",
                ],
            },
            {
                _id: "3",
                title: "Sikh Heritage Workshops",
                category: "Heritage",
                description:
                    "Monthly workshops exploring Sikh art, architecture, manuscripts, and traditional crafts.",
                duration: "Monthly",
                ageGroup: "Adults",
                image: "/images/program3.jpg",
                features: [
                    "Art Appreciation",
                    "Historical Tours",
                    "Manuscript Study",
                    "Craft Sessions",
                ],
            },
        ];

        setUpcomingEvents(mockEvents);
        setPrograms(mockPrograms);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
        const fullDate = date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return { day, month, fullDate };
    };

    return (
        <div className="activities-page">
            {/* Header Section */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <span className="section-label">Community</span>
                        <h1 className="page-title">Sangat Initiatives</h1>
                        <p className="page-description">
                            Join us in our mission to strengthen the Sangat through events,
                            programs, and educational initiatives rooted in Gurmat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Upcoming Events</h2>
                        <p className="section-subtitle">
                            Mark your calendars and join us for these meaningful gatherings
                        </p>
                    </div>

                    <div className="events-grid">
                        {upcomingEvents.map((event, index) => (
                            <article
                                key={event._id}
                                className="event-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="event-image-wrapper">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={600}
                                        height={400}
                                        className="event-image"
                                    />
                                    {event.isOnline && <span className="online-badge">Online</span>}
                                    <div className="event-date-badge">
                                        <div className="date-day">{formatDate(event.date).day}</div>
                                        <div className="date-month">
                                            {formatDate(event.date).month}
                                        </div>
                                    </div>
                                </div>

                                <div className="event-content">
                                    <h3 className="event-title">{event.title}</h3>
                                    <p className="event-description">{event.description}</p>

                                    <div className="event-details">
                                        <div className="event-detail">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <rect
                                                    x="3"
                                                    y="4"
                                                    width="18"
                                                    height="18"
                                                    rx="2"
                                                    ry="2"
                                                />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span>{formatDate(event.date).fullDate}</span>
                                        </div>
                                        <div className="event-detail">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="event-detail">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <Link href={event.registrationLink} className="register-button">
                                        Register Now
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Programs</h2>
                        <p className="section-subtitle">
                            Long-term educational and cultural initiatives for all ages
                        </p>
                    </div>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <article
                                key={program._id}
                                className="program-card"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="program-image-wrapper">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        width={700}
                                        height={500}
                                        className="program-image"
                                    />
                                    <span className="program-category">{program.category}</span>
                                </div>

                                <div className="program-content">
                                    <h3 className="program-title">{program.title}</h3>
                                    <p className="program-description">{program.description}</p>

                                    <div className="program-info">
                                        <div className="info-item">
                                            <span className="info-label">Duration:</span>
                                            <span className="info-value">{program.duration}</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Age Group:</span>
                                            <span className="info-value">{program.ageGroup}</span>
                                        </div>
                                    </div>

                                    <div className="program-features">
                                        <h4 className="features-title">What's Included:</h4>
                                        <ul className="features-list">
                                            {program.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href={`/programs/${program._id}`}
                                        className="learn-more-button"
                                    >
                                        Learn More & Enroll
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Have a Program Idea?</h2>
                        <p className="cta-text">
                            We're always looking to expand our offerings. Share your suggestions or
                            volunteer to lead a workshop.
                        </p>
                        <Link href="/contact" className="cta-button">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .activities-page {
                    background: var(--bg-light);
                    min-height: 100vh;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Page Header */
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

                /* Section Headers */
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .section-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Events Section */
                .events-section {
                    padding: 100px 0;
                    background: white;
                }

                .events-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
                    gap: 3rem;
                }

                .event-card {
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .event-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
                }

                .event-image-wrapper {
                    position: relative;
                    height: 300px;
                    overflow: hidden;
                }

                .event-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .event-card:hover .event-image {
                    transform: scale(1.05);
                }

                .online-badge {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: rgba(255, 107, 53, 0.95);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .event-date-badge {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    color: var(--primary-dark);
                    width: 80px;
                    height: 80px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                .date-day {
                    font-family: "Crimson Text", serif;
                    font-size: 2.25rem;
                    font-weight: 700;
                    line-height: 1;
                }

                .date-month {
                    font-family: "Lato", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                }

                .event-content {
                    padding: 2rem;
                }

                .event-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .event-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }

                .event-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                    padding: 1.25rem;
                    background: rgba(15, 76, 129, 0.05);
                    border-radius: 12px;
                }

                .event-detail {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    color: var(--text-primary);
                }

                .event-detail svg {
                    flex-shrink: 0;
                    stroke-width: 2;
                    color: var(--secondary-blue);
                }

                .register-button {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: white;
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    padding: 0.9rem 2rem;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                }

                .register-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
                }

                /* Programs Section */
                .programs-section {
                    padding: 100px 0;
                    background: var(--bg-light);
                }

                .programs-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                }

                .program-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    animation: fadeInUp 0.6s ease-out both;
                }

                .program-card:nth-child(even) {
                    direction: rtl;
                }

                .program-card:nth-child(even) > * {
                    direction: ltr;
                }

                .program-image-wrapper {
                    position: relative;
                    height: 100%;
                    min-height: 400px;
                }

                .program-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .program-category {
                    position: absolute;
                    top: 30px;
                    left: 30px;
                    background: rgba(15, 76, 129, 0.95);
                    color: white;
                    padding: 0.6rem 1.2rem;
                    border-radius: 25px;
                    font-family: "Lato", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }

                .program-content {
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .program-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1.25rem;
                    line-height: 1.2;
                }

                .program-description {
                    font-family: "Lora", serif;
                    font-size: 1.0625rem;
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }

                .program-info {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid #e0e0e0;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .info-label {
                    font-family: "Lato", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-secondary);
                }

                .info-value {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-primary);
                }

                .program-features {
                    margin-bottom: 2rem;
                }

                .features-title {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .features-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .features-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-family: "Lora", serif;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                }

                .features-list svg {
                    flex-shrink: 0;
                    stroke-width: 2.5;
                    color: var(--primary-gold);
                }

                .learn-more-button {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    padding: 0.8rem 2rem;
                    border: 2px solid var(--secondary-blue);
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    text-align: center;
                }

                .learn-more-button:hover {
                    background: var(--secondary-blue);
                    color: white;
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
                    .program-card {
                        grid-template-columns: 1fr;
                    }

                    .program-card:nth-child(even) {
                        direction: ltr;
                    }

                    .events-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .page-header {
                        padding: 80px 0 60px;
                    }

                    .events-section,
                    .programs-section,
                    .cta-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 2.5rem;
                    }

                    .program-content {
                        padding: 2rem;
                    }

                    .program-info {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

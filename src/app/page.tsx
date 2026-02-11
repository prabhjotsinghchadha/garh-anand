"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// This component assumes you're using Sanity CMS
// Install required packages: npm install @sanity/client @sanity/image-url

export default function HomePage() {
    const [wisdomPosts, setWisdomPosts] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [missions, setMissions] = useState([]);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Fetch data from Sanity (replace with your actual Sanity client)
    useEffect(() => {
        // Example fetch - replace with your Sanity queries
        // fetchWisdomPosts();
        // fetchUpcomingEvents();
        // fetchMissions();

        // Mock data for demonstration
        setWisdomPosts([
            {
                _id: "1",
                title: "Understanding Naam Simran",
                excerpt:
                    "The practice of remembering the Divine Name is the cornerstone of Sikh spirituality.",
                category: "Gurbani",
                slug: "understanding-naam-simran",
                coverImage: "/images/wisdom1.jpg",
            },
            {
                _id: "2",
                title: "The Philosophy of Seva",
                excerpt:
                    "Selfless service without expectation forms the heart of Gurmat teachings.",
                category: "Philosophy",
                slug: "philosophy-of-seva",
                coverImage: "/images/wisdom2.jpg",
            },
            {
                _id: "3",
                title: "Sikh Traditions in Modern Times",
                excerpt: "Preserving our heritage while adapting to contemporary challenges.",
                category: "Tradition",
                slug: "sikh-traditions-modern",
                coverImage: "/images/wisdom3.jpg",
            },
        ]);

        setUpcomingEvents([
            {
                _id: "1",
                title: "Gurmat Kirtan Darbar",
                date: "2026-03-15",
                time: "10:00 AM",
                location: "Main Gurdwara Hall",
                image: "/images/event1.jpg",
            },
            {
                _id: "2",
                title: "Youth Gurmat Camp",
                date: "2026-03-22",
                time: "9:00 AM",
                location: "Community Center",
                image: "/images/event2.jpg",
            },
        ]);

        setMissions([
            {
                _id: "1",
                title: "Raag te Saaj",
                tag: "Heritage Preservation",
                status: "Ongoing",
                description: "Reviving traditional string instruments and Raag-based Kirtan",
                raised: 500000,
                goal: 1000000,
                image: "/images/raag-saaj.jpg",
            },
            {
                _id: "2",
                title: "Vidyalay",
                tag: "Education",
                status: "Upcoming Construction",
                description: "Building a modern Gurmat school for rural children",
                raised: 200000,
                goal: 2000000,
                image: "/images/vidyalay.jpg",
            },
        ]);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
        return { day, month };
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        onLoadedData={() => setIsVideoLoaded(true)}
                    >
                        <source src="/videos/harmandir-sahib.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-headline">Recognize the Human Race as One</h1>
                        <p className="hero-subheadline">
                            Dedicated to the preservation of Gurmat, Seva, and the spiritual
                            upliftment of the Sangat.
                        </p>
                        <div className="hero-cta">
                            <Link href="/wisdom" className="btn btn-secondary">
                                Read Wisdom
                            </Link>
                            <Link href="/donate" className="btn btn-primary">
                                Donate Dasvandh
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* About Section - Vision */}
            <section className="vision-section">
                <div className="container">
                    <div className="vision-content">
                        <span className="section-label">Our Foundation</span>
                        <h2 className="section-title">Our Vision</h2>
                        <p className="vision-text">
                            To bridge the gap between ancient Sikh heritage and the modern world
                            through education, preservation, and humanitarian aid. We strive to
                            create a community where Gurmat wisdom illuminates every aspect of life,
                            where Seva becomes second nature, and where the timeless teachings of
                            our Gurus inspire action in the present moment.
                        </p>
                        <div className="vision-stats">
                            <div className="stat">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Years of Service</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Families Served</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Active Volunteers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Wisdom Section */}
            <section className="wisdom-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Teachings</span>
                        <h2 className="section-title">Gurmat Wisdom & Insights</h2>
                        <Link href="/wisdom" className="view-all-link">
                            View All <span className="arrow">→</span>
                        </Link>
                    </div>

                    <div className="wisdom-grid">
                        {wisdomPosts.map((post, index) => (
                            <article
                                key={post._id}
                                className="wisdom-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="wisdom-image">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="card-image"
                                    />
                                    <span className="wisdom-category">{post.category}</span>
                                </div>
                                <div className="wisdom-content">
                                    <h3 className="wisdom-title">{post.title}</h3>
                                    <p className="wisdom-excerpt">{post.excerpt}</p>
                                    <Link href={`/wisdom/${post.slug}`} className="read-more">
                                        Read More <span className="arrow">→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Missions Section */}
            <section className="missions-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Impact</span>
                        <h2 className="section-title">Our Missions (Sewa Projects)</h2>
                        <p className="section-subtitle">
                            Long-term initiatives dedicated to Gurmat and Heritage preservation
                        </p>
                    </div>

                    <div className="missions-grid">
                        {missions.map((mission, index) => (
                            <div
                                key={mission._id}
                                className="mission-card"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="mission-image-container">
                                    <Image
                                        src={mission.image}
                                        alt={mission.title}
                                        width={600}
                                        height={400}
                                        className="mission-image"
                                    />
                                    <div className="mission-tag">{mission.tag}</div>
                                </div>

                                <div className="mission-content">
                                    <div className="mission-header">
                                        <h3 className="mission-title">{mission.title}</h3>
                                        <span className="mission-status">{mission.status}</span>
                                    </div>

                                    <p className="mission-description">{mission.description}</p>

                                    {mission.goal && (
                                        <div className="mission-progress">
                                            <div className="progress-info">
                                                <span className="progress-text">
                                                    ₹{(mission.raised / 100000).toFixed(1)}L raised
                                                    of ₹{(mission.goal / 100000).toFixed(0)}L Goal
                                                </span>
                                                <span className="progress-percentage">
                                                    {Math.round(
                                                        (mission.raised / mission.goal) * 100
                                                    )}
                                                    %
                                                </span>
                                            </div>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${
                                                            (mission.raised / mission.goal) * 100
                                                        }%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}

                                    <Link href={`/missions/${mission._id}`} className="mission-cta">
                                        Learn More & Support
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="missions-cta">
                        <Link href="/missions" className="btn btn-primary-outline">
                            View All Missions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Activities Preview Section */}
            <section className="activities-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Community</span>
                        <h2 className="section-title">Sangat Initiatives</h2>
                        <Link href="/activities" className="view-all-link">
                            View All Events <span className="arrow">→</span>
                        </Link>
                    </div>

                    <div className="events-grid">
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={event._id}
                                className="event-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="event-date-badge">
                                    <div className="date-day">{formatDate(event.date).day}</div>
                                    <div className="date-month">{formatDate(event.date).month}</div>
                                </div>

                                <div className="event-image">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={500}
                                        height={300}
                                        className="card-image"
                                    />
                                </div>

                                <div className="event-content">
                                    <h3 className="event-title">{event.title}</h3>
                                    <div className="event-details">
                                        <div className="event-detail">
                                            <svg
                                                width="16"
                                                height="16"
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
                                                width="16"
                                                height="16"
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
                                    <Link
                                        href={`/activities/${event._id}`}
                                        className="event-register"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA Section */}
            <section className="footer-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Join the Movement of Seva</h2>
                        <p className="cta-text">
                            Every hand that serves, every heart that gives, strengthens our
                            community. Be part of something greater than yourself.
                        </p>
                        <Link href="/contact" className="btn btn-primary-large">
                            Volunteer Now
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* CSS Variables for Theme */
                :root {
                    --primary-gold: #d4af37;
                    --primary-dark: #1a1a2e;
                    --secondary-blue: #0f4c81;
                    --accent-orange: #ff6b35;
                    --bg-light: #f8f7f4;
                    --text-primary: #1a1a2e;
                    --text-secondary: #6b6b6b;
                    --white: #ffffff;
                }

                .homepage {
                    background: var(--bg-light);
                    overflow-x: hidden;
                }

                /* Hero Section */
                .hero {
                    position: relative;
                    height: 100vh;
                    min-height: 700px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .hero-video-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        135deg,
                        rgba(15, 76, 129, 0.85) 0%,
                        rgba(26, 26, 46, 0.9) 100%
                    );
                    z-index: 2;
                }

                .hero-content {
                    position: relative;
                    z-index: 3;
                    text-align: center;
                    padding: 0 20px;
                    max-width: 1100px;
                    margin: 0 auto;
                    animation: fadeInUp 1s ease-out;
                }

                .hero-headline {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 700;
                    color: var(--white);
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .hero-subheadline {
                    font-family: "Lora", serif;
                    font-size: clamp(1.1rem, 2vw, 1.5rem);
                    color: rgba(255, 255, 255, 0.95);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero-cta {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn {
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-block;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                }

                .btn-primary {
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    color: var(--primary-dark);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--white);
                    border: 2px solid rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.6);
                }

                .btn-primary-outline {
                    background: transparent;
                    color: var(--primary-gold);
                    border: 2px solid var(--primary-gold);
                }

                .btn-primary-outline:hover {
                    background: var(--primary-gold);
                    color: var(--primary-dark);
                }

                .btn-primary-large {
                    padding: 1.25rem 3rem;
                    font-size: 1.125rem;
                }

                .scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 3;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.875rem;
                    font-family: "Lato", sans-serif;
                    animation: fadeIn 1.5s ease-out 0.5s both;
                }

                .scroll-arrow {
                    width: 24px;
                    height: 24px;
                    border-left: 2px solid rgba(255, 255, 255, 0.8);
                    border-bottom: 2px solid rgba(255, 255, 255, 0.8);
                    transform: rotate(-45deg);
                    margin: 10px auto 0;
                    animation: bounce 2s infinite;
                }

                /* Container */
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Section Styles */
                section {
                    padding: 100px 0;
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

                .section-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .section-subtitle {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    max-width: 700px;
                    line-height: 1.6;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                    position: relative;
                }

                .view-all-link {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .view-all-link:hover {
                    color: var(--primary-gold);
                }

                .view-all-link .arrow {
                    display: inline-block;
                    transition: transform 0.3s ease;
                }

                .view-all-link:hover .arrow {
                    transform: translateX(5px);
                }

                /* Vision Section */
                .vision-section {
                    background: var(--white);
                }

                .vision-content {
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                }

                .vision-text {
                    font-family: "Lora", serif;
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: var(--text-primary);
                    margin-bottom: 4rem;
                }

                .vision-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    margin-top: 4rem;
                }

                .stat {
                    text-align: center;
                }

                .stat-number {
                    font-family: "Crimson Text", serif;
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                }

                /* Wisdom Section */
                .wisdom-section {
                    background: linear-gradient(135deg, #f8f7f4 0%, #e8e6e1 100%);
                }

                .wisdom-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                }

                .wisdom-card {
                    background: var(--white);
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .wisdom-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                }

                .wisdom-image {
                    position: relative;
                    height: 240px;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .wisdom-card:hover .card-image {
                    transform: scale(1.05);
                }

                .wisdom-category {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(212, 175, 55, 0.95);
                    color: var(--primary-dark);
                    padding: 0.4rem 0.9rem;
                    border-radius: 20px;
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .wisdom-content {
                    padding: 1.75rem;
                }

                .wisdom-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }

                .wisdom-excerpt {
                    font-family: "Lora", serif;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 1.25rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .read-more {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;
                }

                .read-more:hover {
                    color: var(--primary-gold);
                }

                .read-more .arrow {
                    transition: transform 0.3s ease;
                }

                .read-more:hover .arrow {
                    transform: translateX(4px);
                }

                /* Missions Section */
                .missions-section {
                    background: var(--white);
                }

                .missions-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }

                .mission-card {
                    background: linear-gradient(135deg, #f8f7f4 0%, #ffffff 100%);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .mission-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.15);
                }

                .mission-image-container {
                    position: relative;
                    height: 320px;
                    overflow: hidden;
                }

                .mission-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .mission-card:hover .mission-image {
                    transform: scale(1.08);
                }

                .mission-tag {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: rgba(15, 76, 129, 0.95);
                    color: var(--white);
                    padding: 0.6rem 1.2rem;
                    border-radius: 25px;
                    font-family: "Lato", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    backdrop-filter: blur(10px);
                }

                .mission-content {
                    padding: 2rem;
                }

                .mission-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    gap: 1rem;
                }

                .mission-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    line-height: 1.2;
                }

                .mission-status {
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--accent-orange);
                    background: rgba(255, 107, 53, 0.1);
                    padding: 0.4rem 0.8rem;
                    border-radius: 15px;
                    white-space: nowrap;
                }

                .mission-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }

                .mission-progress {
                    margin-bottom: 1.5rem;
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                }

                .progress-text {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }

                .progress-percentage {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                }

                .progress-bar {
                    width: 100%;
                    height: 8px;
                    background: rgba(212, 175, 55, 0.15);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary-gold) 0%, #b8941f 100%);
                    border-radius: 10px;
                    transition: width 1s ease-out;
                }

                .mission-cta {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    text-decoration: none;
                    padding: 0.75rem 1.5rem;
                    border: 2px solid var(--secondary-blue);
                    border-radius: 30px;
                    transition: all 0.3s ease;
                }

                .mission-cta:hover {
                    background: var(--secondary-blue);
                    color: var(--white);
                }

                .missions-cta {
                    text-align: center;
                    margin-top: 2rem;
                }

                /* Activities Section */
                .activities-section {
                    background: linear-gradient(135deg, #0f4c81 0%, #1a1a2e 100%);
                    color: var(--white);
                }

                .activities-section .section-label {
                    color: var(--primary-gold);
                }

                .activities-section .section-title {
                    color: var(--white);
                }

                .activities-section .view-all-link {
                    color: var(--primary-gold);
                }

                .activities-section .view-all-link:hover {
                    color: var(--white);
                }

                .events-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 2.5rem;
                }

                .event-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    overflow: hidden;
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .event-card:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
                }

                .event-date-badge {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    z-index: 10;
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    color: var(--primary-dark);
                    width: 70px;
                    height: 70px;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }

                .date-day {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 1;
                }

                .date-month {
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                }

                .event-image {
                    height: 220px;
                    overflow: hidden;
                }

                .event-content {
                    padding: 1.75rem;
                }

                .event-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--white);
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .event-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .event-detail {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                .event-detail svg {
                    flex-shrink: 0;
                    stroke-width: 2;
                }

                .event-register {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary-gold);
                    text-decoration: none;
                    padding: 0.65rem 1.5rem;
                    border: 2px solid var(--primary-gold);
                    border-radius: 25px;
                    transition: all 0.3s ease;
                }

                .event-register:hover {
                    background: var(--primary-gold);
                    color: var(--primary-dark);
                }

                /* Footer CTA Section */
                .footer-cta {
                    background: linear-gradient(135deg, var(--primary-gold) 0%, #b8941f 100%);
                    padding: 120px 0;
                }

                .cta-content {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .cta-title {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    color: var(--primary-dark);
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }

                .cta-text {
                    font-family: "Lora", serif;
                    font-size: 1.25rem;
                    color: rgba(26, 26, 46, 0.85);
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                }

                /* Animations */
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

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes bounce {
                    0%,
                    20%,
                    50%,
                    80%,
                    100% {
                        transform: translateY(0) rotate(-45deg);
                    }
                    40% {
                        transform: translateY(-10px) rotate(-45deg);
                    }
                    60% {
                        transform: translateY(-5px) rotate(-45deg);
                    }
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .missions-grid {
                        grid-template-columns: 1fr;
                    }

                    .events-grid {
                        grid-template-columns: 1fr;
                    }

                    .view-all-link {
                        position: static;
                        display: block;
                        margin-top: 1rem;
                    }
                }

                @media (max-width: 768px) {
                    section {
                        padding: 60px 0;
                    }

                    .hero {
                        min-height: 600px;
                    }

                    .wisdom-grid {
                        grid-template-columns: 1fr;
                    }

                    .vision-stats {
                        gap: 2rem;
                    }

                    .hero-cta {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .btn {
                        width: 100%;
                        max-width: 300px;
                    }

                    .mission-card {
                        margin-bottom: 2rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero-headline {
                        font-size: 2rem;
                    }

                    .hero-subheadline {
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 2rem;
                    }

                    .stat-number {
                        font-size: 2.5rem;
                    }
                }

                /* Load Google Fonts */
                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Lato:wght@400;700;900&display=swap");

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    );
}

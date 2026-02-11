"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MissionsPage() {
    const [activeTab, setActiveTab] = useState("overview");

    const missions = [
        {
            id: "raag-saaj",
            name: "Raag te Saaj",
            tagline: "Reviving the Tanti Saaj (String Instruments)",
            category: "Heritage Preservation",
            status: "Ongoing",
            raised: 500000,
            goal: 1000000,
            image: "/images/raag-saaj-hero.jpg",
            description:
                "Restoring the ancient tradition of Kirtan in the specified Raags using traditional string instruments.",
            longDescription: `The Raag te Saaj initiative is dedicated to reviving and preserving the rich musical heritage of Sikh Kirtan. For centuries, instruments like the Dilruba, Taus, and Saranda accompanied Gurbani recitation in specific Raags, creating a spiritually uplifting experience that is increasingly rare in modern times.

Our mission encompasses three core objectives: training the next generation of musicians in these traditional instruments, providing high-quality instruments to underprivileged students who show talent and dedication, and documenting the techniques and compositions that risk being lost forever.

Through this initiative, we are not merely preserving instruments—we are keeping alive a spiritual practice that connects us to our Gurus and their vision of divine music as a path to enlightenment.`,
            objectives: [
                "Train 100 students annually in traditional string instruments",
                "Provide instruments to 50 underprivileged students each year",
                "Document and archive 200+ traditional compositions",
                "Conduct workshops in 10 cities across Punjab and beyond",
                "Establish a museum of traditional Sikh musical instruments",
            ],
            impact: [
                {
                    number: "150+",
                    label: "Students Trained",
                    description: "Young musicians learning traditional instruments",
                },
                {
                    number: "75",
                    label: "Instruments Donated",
                    description: "High-quality Tanti Saaj provided to students",
                },
                {
                    number: "30",
                    label: "Workshops Conducted",
                    description: "Across Punjab, Haryana, and Delhi",
                },
            ],
            gallery: [
                "/images/raag1.jpg",
                "/images/raag2.jpg",
                "/images/raag3.jpg",
                "/images/raag4.jpg",
            ],
            sponsorOptions: [
                {
                    amount: "₹15,000",
                    title: "Sponsor an Instrument",
                    description: "Provide a complete Dilruba or Taus to a deserving student",
                },
                {
                    amount: "₹50,000",
                    title: "Sponsor a Workshop",
                    description: "Fund a 3-day workshop in a rural area",
                },
                {
                    amount: "₹2,00,000",
                    title: "Sponsor a Master Class Series",
                    description: "Year-long advanced training program for 20 students",
                },
            ],
        },
        {
            id: "vidyalay",
            name: "Vidyalay",
            tagline: "Raising the Next Generation of Gursikhs",
            category: "Education",
            status: "Upcoming Construction",
            raised: 200000,
            goal: 2000000,
            image: "/images/vidyalay-hero.jpg",
            description:
                "A modern Gurmat school focusing on Punjabi, History, Ethics, and spiritual education.",
            longDescription: `Vidyalay represents our vision for comprehensive Gurmat education in the 21st century. We are establishing a modern educational institution that seamlessly integrates traditional Sikh values with contemporary pedagogy, ensuring our children grow up rooted in their heritage while excelling in the modern world.

The school will offer free education to children from rural and economically disadvantaged backgrounds, with a curriculum designed by scholars that covers Punjabi language, Sikh history, ethics, meditation practices, and academic subjects aligned with national standards.

Beyond academics, Vidyalay will serve as a community hub, offering evening classes for adults, weekend programs for working families, and seasonal camps during holidays. Our goal is to create a space where Gurmat becomes a lived reality, not just a subject to be studied.`,
            objectives: [
                "Construct a purpose-built campus with modern facilities",
                "Provide free education to 200 children from rural areas",
                "Employ qualified teachers trained in Gurmat pedagogy",
                "Develop a comprehensive curriculum approved by education boards",
                "Create a residential program for students from distant villages",
            ],
            timeline: [
                {
                    phase: "Phase 1",
                    title: "Land Acquisition",
                    status: "Completed",
                    date: "January 2026",
                    description: "5 acres of land secured in a rural area with good accessibility",
                },
                {
                    phase: "Phase 2",
                    title: "Construction",
                    status: "In Progress",
                    date: "March 2026 - December 2026",
                    description: "Building classrooms, library, dining hall, and dormitories",
                },
                {
                    phase: "Phase 3",
                    title: "Classes Begin",
                    status: "Planned",
                    date: "January 2027",
                    description: "Admissions open for first batch of 100 students",
                },
            ],
            impact: [
                {
                    number: "5 Acres",
                    label: "Land Secured",
                    description: "Prime location with room for expansion",
                },
                {
                    number: "200+",
                    label: "Future Students",
                    description: "Children awaiting free quality education",
                },
                {
                    number: "15",
                    label: "Teachers Hired",
                    description: "Qualified educators committed to Gurmat",
                },
            ],
            gallery: [
                "/images/vid1.jpg",
                "/images/vid2.jpg",
                "/images/vid3.jpg",
                "/images/vid4.jpg",
            ],
            sponsorOptions: [
                {
                    amount: "₹50,000",
                    title: "Donate a Brick",
                    description: "Symbolic contribution toward construction",
                },
                {
                    amount: "₹1,00,000",
                    title: "Sponsor a Classroom",
                    description: "Name a classroom after a loved one",
                },
                {
                    amount: "₹5,00,000",
                    title: "Sponsor a Student (5 years)",
                    description: "Full scholarship covering education, meals, books",
                },
            ],
        },
    ];

    const [selectedMission, setSelectedMission] = useState(missions[0]);

    return (
        <div className="missions-page">
            {/* Header */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <span className="section-label">Long-term Impact</span>
                        <h1 className="page-title">Our Missions</h1>
                        <p className="page-description">
                            Dedicated Sewa projects that preserve Gurmat heritage, educate future
                            generations, and create lasting positive change in our communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Selector */}
            <section className="selector-section">
                <div className="container">
                    <div className="mission-selector">
                        {missions.map((mission) => (
                            <button
                                key={mission.id}
                                className={`selector-button ${
                                    selectedMission.id === mission.id ? "active" : ""
                                }`}
                                onClick={() => setSelectedMission(mission)}
                            >
                                <span className="selector-name">{mission.name}</span>
                                <span className="selector-status">{mission.status}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Hero */}
            <section className="mission-hero">
                <div className="hero-image-container">
                    <Image
                        src={selectedMission.image}
                        alt={selectedMission.name}
                        width={1920}
                        height={800}
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="mission-category">{selectedMission.category}</span>
                        <h2 className="mission-name">{selectedMission.name}</h2>
                        <p className="mission-tagline">{selectedMission.tagline}</p>

                        <div className="progress-section">
                            <div className="progress-info">
                                <span className="progress-raised">
                                    ₹{(selectedMission.raised / 100000).toFixed(1)}L raised
                                </span>
                                <span className="progress-goal">
                                    of ₹{(selectedMission.goal / 100000).toFixed(0)}L goal
                                </span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: `${
                                            (selectedMission.raised / selectedMission.goal) * 100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            <div className="progress-percentage">
                                {Math.round((selectedMission.raised / selectedMission.goal) * 100)}%
                                Complete
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="tabs-section">
                <div className="container">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === "overview" ? "active" : ""}`}
                            onClick={() => setActiveTab("overview")}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab ${activeTab === "impact" ? "active" : ""}`}
                            onClick={() => setActiveTab("impact")}
                        >
                            Impact & Progress
                        </button>
                        <button
                            className={`tab ${activeTab === "donate" ? "active" : ""}`}
                            onClick={() => setActiveTab("donate")}
                        >
                            Ways to Support
                        </button>
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="content-section">
                <div className="container">
                    {activeTab === "overview" && (
                        <div className="overview-content">
                            <div className="text-content">
                                <h3 className="content-title">About This Mission</h3>
                                {selectedMission.longDescription.split("\n\n").map((para, idx) => (
                                    <p key={idx} className="content-paragraph">
                                        {para}
                                    </p>
                                ))}

                                <h3 className="content-title">Our Objectives</h3>
                                <ul className="objectives-list">
                                    {selectedMission.objectives.map((obj, idx) => (
                                        <li key={idx}>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>

                                {selectedMission.id === "vidyalay" && selectedMission.timeline && (
                                    <>
                                        <h3 className="content-title">Project Timeline</h3>
                                        <div className="timeline">
                                            {selectedMission.timeline.map((phase, idx) => (
                                                <div key={idx} className="timeline-item">
                                                    <div className="timeline-marker">
                                                        <span className="phase-label">
                                                            {phase.phase}
                                                        </span>
                                                    </div>
                                                    <div className="timeline-content">
                                                        <div className="timeline-header">
                                                            <h4>{phase.title}</h4>
                                                            <span
                                                                className={`status-badge ${phase.status
                                                                    .toLowerCase()
                                                                    .replace(" ", "-")}`}
                                                            >
                                                                {phase.status}
                                                            </span>
                                                        </div>
                                                        <p className="timeline-date">
                                                            {phase.date}
                                                        </p>
                                                        <p className="timeline-description">
                                                            {phase.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === "impact" && (
                        <div className="impact-content">
                            <h3 className="content-title">Current Impact</h3>
                            <div className="impact-grid">
                                {selectedMission.impact.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="impact-card"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="impact-number">{stat.number}</div>
                                        <div className="impact-label">{stat.label}</div>
                                        <p className="impact-description">{stat.description}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="content-title">Gallery</h3>
                            <div className="gallery-grid">
                                {selectedMission.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="gallery-item"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${selectedMission.name} ${idx + 1}`}
                                            width={500}
                                            height={400}
                                            className="gallery-image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "donate" && (
                        <div className="donate-content">
                            <h3 className="content-title">
                                Ways to Support {selectedMission.name}
                            </h3>
                            <p className="donate-intro">
                                Your contribution directly enables this mission. Choose a
                                sponsorship level that resonates with you:
                            </p>

                            <div className="sponsor-grid">
                                {selectedMission.sponsorOptions.map((option, idx) => (
                                    <div
                                        key={idx}
                                        className="sponsor-card"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="sponsor-amount">{option.amount}</div>
                                        <h4 className="sponsor-title">{option.title}</h4>
                                        <p className="sponsor-description">{option.description}</p>
                                        <Link href="/donate" className="sponsor-button">
                                            Support This
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="donate-cta">
                                <h3>Or Make a Custom Donation</h3>
                                <p>
                                    Every amount helps. Visit our donation page to contribute any
                                    amount of your choice.
                                </p>
                                <Link href="/donate" className="cta-button">
                                    Go to Donation Page
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <style jsx>{`
                .missions-page {
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

                .selector-section {
                    background: white;
                    padding: 3rem 0;
                    border-bottom: 1px solid #e0e0e0;
                }

                .mission-selector {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                }

                .selector-button {
                    font-family: "Lato", sans-serif;
                    background: white;
                    border: 2px solid #e0e0e0;
                    padding: 1.25rem 2.5rem;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .selector-button:hover,
                .selector-button.active {
                    border-color: var(--primary-gold);
                    background: linear-gradient(
                        135deg,
                        rgba(212, 175, 55, 0.1) 0%,
                        rgba(184, 148, 31, 0.1) 100%
                    );
                }

                .selector-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .selector-status {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }

                .mission-hero {
                    position: relative;
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                }

                .hero-image-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-image {
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
                        rgba(15, 76, 129, 0.9) 0%,
                        rgba(26, 26, 46, 0.85) 100%
                    );
                    z-index: 2;
                }

                .hero-content {
                    position: relative;
                    z-index: 3;
                    color: white;
                    max-width: 900px;
                }

                .mission-category {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--primary-gold);
                    margin-bottom: 1rem;
                }

                .mission-name {
                    font-family: "Crimson Text", serif;
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-weight: 700;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                }

                .mission-tagline {
                    font-family: "Lora", serif;
                    font-size: clamp(1.25rem, 2vw, 1.75rem);
                    margin-bottom: 3rem;
                    opacity: 0.95;
                    line-height: 1.5;
                }

                .progress-section {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 2.5rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .progress-raised {
                    font-family: "Crimson Text", serif;
                    font-size: 2rem;
                    font-weight: 700;
                }

                .progress-goal {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    opacity: 0.9;
                }

                .progress-bar {
                    width: 100%;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 0.75rem;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary-gold) 0%, #b8941f 100%);
                    border-radius: 10px;
                    transition: width 1s ease-out;
                }

                .progress-percentage {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-align: right;
                    color: var(--primary-gold);
                }

                .tabs-section {
                    background: white;
                    padding: 0;
                    border-bottom: 2px solid #e0e0e0;
                }

                .tabs {
                    display: flex;
                    gap: 0;
                }

                .tab {
                    font-family: "Lato", sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    background: transparent;
                    border: none;
                    padding: 1.5rem 2.5rem;
                    cursor: pointer;
                    border-bottom: 3px solid transparent;
                    transition: all 0.3s ease;
                }

                .tab:hover {
                    color: var(--text-primary);
                }

                .tab.active {
                    color: var(--primary-gold);
                    border-bottom-color: var(--primary-gold);
                }

                .content-section {
                    padding: 80px 0;
                    background: white;
                }

                .text-content {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .content-title {
                    font-family: "Crimson Text", serif;
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 3rem 0 1.5rem;
                    line-height: 1.2;
                }

                .content-title:first-child {
                    margin-top: 0;
                }

                .content-paragraph {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    line-height: 1.9;
                    color: var(--text-primary);
                    margin-bottom: 1.5rem;
                }

                .objectives-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin: 2rem 0;
                }

                .objectives-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-family: "Lora", serif;
                    font-size: 1.0625rem;
                    line-height: 1.7;
                    color: var(--text-primary);
                }

                .objectives-list svg {
                    flex-shrink: 0;
                    margin-top: 0.25rem;
                    stroke-width: 2.5;
                    color: var(--primary-gold);
                }

                .timeline {
                    margin: 2rem 0;
                }

                .timeline-item {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .timeline-marker {
                    text-align: center;
                }

                .phase-label {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: white;
                    background: var(--primary-gold);
                    padding: 0.75rem 1.5rem;
                    border-radius: 30px;
                }

                .timeline-content {
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    padding: 2rem;
                    border-radius: 16px;
                    border-left: 4px solid var(--primary-gold);
                }

                .timeline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .timeline-header h4 {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .status-badge {
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 0.4rem 0.9rem;
                    border-radius: 20px;
                }

                .status-badge.completed {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                }

                .status-badge.in-progress {
                    background: rgba(255, 107, 53, 0.1);
                    color: var(--accent-orange);
                }

                .status-badge.planned {
                    background: rgba(107, 107, 107, 0.1);
                    color: var(--text-secondary);
                }

                .timeline-date {
                    font-family: "Lato", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary-gold);
                    margin-bottom: 0.75rem;
                }

                .timeline-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .impact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    margin: 3rem 0;
                }

                .impact-card {
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    border-radius: 20px;
                    padding: 2.5rem;
                    text-align: center;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                    animation: fadeInUp 0.6s ease-out both;
                }

                .impact-number {
                    font-family: "Crimson Text", serif;
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                    line-height: 1;
                    margin-bottom: 0.75rem;
                }

                .impact-label {
                    font-family: "Lato", sans-serif;
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .impact-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin: 3rem 0;
                }

                .gallery-item {
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                    animation: fadeInUp 0.6s ease-out both;
                }

                .gallery-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .gallery-item:hover .gallery-image {
                    transform: scale(1.05);
                }

                .donate-intro {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 3rem;
                    line-height: 1.7;
                }

                .sponsor-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                    margin: 3rem 0;
                }

                .sponsor-card {
                    background: linear-gradient(135deg, #f8f7f4 0%, white 100%);
                    border-radius: 20px;
                    padding: 2.5rem;
                    text-align: center;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .sponsor-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                }

                .sponsor-amount {
                    font-family: "Crimson Text", serif;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--primary-gold);
                    margin-bottom: 1rem;
                }

                .sponsor-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .sponsor-description {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }

                .sponsor-button {
                    display: inline-block;
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: white;
                    background: var(--secondary-blue);
                    padding: 0.8rem 2rem;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .sponsor-button:hover {
                    background: var(--primary-gold);
                    color: var(--primary-dark);
                }

                .donate-cta {
                    background: linear-gradient(135deg, #0f4c81 0%, #1a1a2e 100%);
                    border-radius: 24px;
                    padding: 4rem;
                    text-align: center;
                    color: white;
                    margin-top: 4rem;
                }

                .donate-cta h3 {
                    font-family: "Crimson Text", serif;
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .donate-cta p {
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    opacity: 0.95;
                    margin-bottom: 2rem;
                }

                .cta-button {
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

                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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

                @media (max-width: 768px) {
                    .page-header {
                        padding: 80px 0 60px;
                    }

                    .selector-section {
                        padding: 2rem 0;
                    }

                    .mission-selector {
                        gap: 1rem;
                    }

                    .mission-hero {
                        min-height: 500px;
                    }

                    .tabs {
                        overflow-x: auto;
                    }

                    .tab {
                        padding: 1.25rem 1.5rem;
                        white-space: nowrap;
                    }

                    .content-section {
                        padding: 60px 0;
                    }

                    .timeline-item {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .donate-cta {
                        padding: 2.5rem 2rem;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

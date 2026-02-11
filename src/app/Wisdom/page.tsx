"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WisdomPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [wisdomPosts, setWisdomPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    const categories = ["All", "Gurbani", "Philosophy", "Tradition"];

    useEffect(() => {
        // Mock data - replace with Sanity CMS fetch
        const mockPosts = [
            {
                _id: "1",
                title: "Understanding Naam Simran",
                excerpt:
                    "The practice of remembering the Divine Name is the cornerstone of Sikh spirituality. Through continuous remembrance, we connect with the infinite.",
                category: "Gurbani",
                publishedDate: "2026-02-01",
                slug: "understanding-naam-simran",
                coverImage: "/images/wisdom1.jpg",
                readTime: "5 min read",
            },
            {
                _id: "2",
                title: "The Philosophy of Seva",
                excerpt:
                    "Selfless service without expectation forms the heart of Gurmat teachings. Every act of seva purifies the mind and connects us to humanity.",
                category: "Philosophy",
                publishedDate: "2026-01-28",
                slug: "philosophy-of-seva",
                coverImage: "/images/wisdom2.jpg",
                readTime: "7 min read",
            },
            {
                _id: "3",
                title: "Sikh Traditions in Modern Times",
                excerpt:
                    "Preserving our heritage while adapting to contemporary challenges requires wisdom, commitment, and understanding of core principles.",
                category: "Tradition",
                publishedDate: "2026-01-25",
                slug: "sikh-traditions-modern",
                coverImage: "/images/wisdom3.jpg",
                readTime: "6 min read",
            },
            {
                _id: "4",
                title: "The Power of Gurbani",
                excerpt:
                    "Sacred verses from Sri Guru Granth Sahib Ji illuminate our path and provide guidance for every situation in life.",
                category: "Gurbani",
                publishedDate: "2026-01-20",
                slug: "power-of-gurbani",
                coverImage: "/images/wisdom4.jpg",
                readTime: "8 min read",
            },
            {
                _id: "5",
                title: "Equality and Justice in Sikhism",
                excerpt:
                    "The revolutionary concept of equality transcends all boundaries of caste, creed, and gender in Sikh philosophy.",
                category: "Philosophy",
                publishedDate: "2026-01-15",
                slug: "equality-justice-sikhism",
                coverImage: "/images/wisdom5.jpg",
                readTime: "6 min read",
            },
            {
                _id: "6",
                title: "Preserving Sikh Heritage",
                excerpt:
                    "Our responsibility to future generations includes maintaining traditions, documenting history, and teaching values.",
                category: "Tradition",
                publishedDate: "2026-01-10",
                slug: "preserving-sikh-heritage",
                coverImage: "/images/wisdom6.jpg",
                readTime: "9 min read",
            },
        ];

        setWisdomPosts(mockPosts);
        setFilteredPosts(mockPosts);
    }, []);

    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredPosts(wisdomPosts);
        } else {
            setFilteredPosts(wisdomPosts.filter((post) => post.category === activeFilter));
        }
    }, [activeFilter, wisdomPosts]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="wisdom-page">
            {/* Header Section */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <span className="section-label">Teachings</span>
                        <h1 className="page-title">Gurmat Wisdom & Insights</h1>
                        <p className="page-description">
                            Explore the timeless teachings of our Gurus, philosophical insights, and
                            reflections on preserving Sikh traditions in the modern world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="filter-section">
                <div className="container">
                    <div className="filter-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-tab ${
                                    activeFilter === category ? "active" : ""
                                }`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="content-section">
                <div className="container">
                    <div className="wisdom-grid">
                        {filteredPosts.map((post, index) => (
                            <article
                                key={post._id}
                                className="wisdom-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Link href={`/wisdom/${post.slug}`} className="card-link">
                                    <div className="card-image-wrapper">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            className="card-image"
                                        />
                                        <div className="card-category">{post.category}</div>
                                    </div>

                                    <div className="card-content">
                                        <div className="card-meta">
                                            <span className="publish-date">
                                                {formatDate(post.publishedDate)}
                                            </span>
                                            <span className="read-time">{post.readTime}</span>
                                        </div>

                                        <h2 className="card-title">{post.title}</h2>
                                        <p className="card-excerpt">{post.excerpt}</p>

                                        <div className="read-more">
                                            Read Article <span className="arrow">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-results">
                            <p>No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <style jsx>{`
                .wisdom-page {
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

                /* Filter Section */
                .filter-section {
                    padding: 40px 0;
                    background: white;
                    border-bottom: 1px solid #e0e0e0;
                }

                .filter-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .filter-tab {
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    padding: 0.75rem 2rem;
                    border: 2px solid #e0e0e0;
                    background: white;
                    color: var(--text-secondary);
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .filter-tab:hover {
                    border-color: var(--primary-gold);
                    color: var(--text-primary);
                }

                .filter-tab.active {
                    background: var(--primary-gold);
                    border-color: var(--primary-gold);
                    color: var(--primary-dark);
                }

                /* Content Section */
                .content-section {
                    padding: 80px 0 100px;
                }

                .wisdom-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
                    gap: 3rem;
                }

                .wisdom-card {
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                    transition: all 0.3s ease;
                    animation: fadeInUp 0.6s ease-out both;
                }

                .wisdom-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                }

                .card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }

                .card-image-wrapper {
                    position: relative;
                    height: 280px;
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

                .card-category {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(212, 175, 55, 0.95);
                    color: var(--primary-dark);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-family: "Lato", sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .card-content {
                    padding: 2rem;
                }

                .card-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    font-family: "Lato", sans-serif;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .card-title {
                    font-family: "Crimson Text", serif;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .card-excerpt {
                    font-family: "Lora", serif;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }

                .read-more {
                    font-family: "Lato", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--secondary-blue);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .read-more .arrow {
                    transition: transform 0.3s ease;
                }

                .wisdom-card:hover .read-more .arrow {
                    transform: translateX(5px);
                }

                .no-results {
                    text-align: center;
                    padding: 60px 0;
                    font-family: "Lora", serif;
                    font-size: 1.125rem;
                    color: var(--text-secondary);
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
                    .wisdom-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .page-header {
                        padding: 80px 0 60px;
                    }

                    .content-section {
                        padding: 60px 0;
                    }

                    .filter-tabs {
                        gap: 0.75rem;
                    }

                    .filter-tab {
                        padding: 0.6rem 1.5rem;
                        font-size: 0.875rem;
                    }
                }

                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600&family=Lato:wght@400;700;900&display=swap");
            `}</style>
        </div>
    );
}

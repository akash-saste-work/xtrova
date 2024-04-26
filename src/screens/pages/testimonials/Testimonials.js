import React from "react";
import "./index.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Ritu Shaarma",
            image: "/path/to/profile1.jpg",
            testimony:
                "Vanya's insights into my relationship were illuminating. Her guidance brought clarity and deeper connection to my love life. Grateful for her wisdom!",
        },
        {
            id: 2,
            name: "Ankit Jain",
            image: "/path/to/profile2.jpg",
            testimony:
                "Vanya's astrology advice guided me through academic challenges with confidence. Her understanding of the stars propelled me towards success.",
        },
        {
            id: 3,
            name: "Rajni Patel",
            image: "/path/to/profile3.jpg",
            testimony:
                "With Vanya's guidance, my business flourished. Her insights into market trends and cosmic influences shaped our strategic decisions.",
        },
        {
            id: 4,
            name: "Deepak Shinde",
            image: "/path/to/profile4.jpg",
            testimony:
                "Vanya's astrological insights empowered me to overcome health challenges. Her holistic approach to wellness transformed my life.",
        },
        {
            id: 5,
            name: "Lakshmi Rajput",
            image: "/path/to/profile5.jpg",
            testimony:
                "Vanya's expertise helped me banish dark energies and negative forces. With her guidance, I reclaimed peace and positivity in my life.",
        },

    ];

    return (
        <section
            className="testimonials"
            style={{ background: 'url("/path/to/galaxy-background.jpg")' }}
        >
            <div className="container">
                <h2 className="section-title" style={{ color: "#fff" }}>
                    Testimonials
                </h2>
                <div className="testimonials-content">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-content">
                                <img
                                    src={`https://picsum.photos/seed/${testimonial.id}/100/100`}
                                    alt={testimonial.name}
                                    className="testimonial-img"
                                />

                                <p className="testimonial-text" style={{ color: "#fff" }}>
                                    {testimonial.testimony}
                                </p>
                                <p className="testimonial-author" style={{ color: "#fff" }}>
                                    {testimonial.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from "react";
import "./index.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            image: "/path/to/profile1.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "/path/to/profile2.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 3,
            name: "Alice Johnson",
            image: "/path/to/profile3.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 4,
            name: "Bob Brown",
            image: "/path/to/profile4.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 5,
            name: "Emma White",
            image: "/path/to/profile5.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 6,
            name: "Michael Smith",
            image: "/path/to/profile6.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 7,
            name: "Olivia Johnson",
            image: "/path/to/profile7.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 8,
            name: "William Davis",
            image: "/path/to/profile8.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 9,
            name: "Sophia Martinez",
            image: "/path/to/profile9.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
            id: 10,
            name: "James Taylor",
            image: "/path/to/profile10.jpg",
            testimony:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
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

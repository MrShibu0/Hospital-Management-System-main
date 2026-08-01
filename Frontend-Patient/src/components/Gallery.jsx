import React from "react";

const Gallery = () => {
  const facilities = [
    {
      title: "Modern ICU & Critical Care",
      description: "Equipped with advanced multi-parameter patient monitors and life-support systems.",
      image: "/gallery_icu.jpg",
    },
    {
      title: "Advanced Operation Theaters",
      description: "Laminar airflow technology and robotic-assisted surgical infrastructure.",
      image: "/gallery_theater.jpg",
    },
    {
      title: "State-of-the-Art Radiology",
      description: "High-resolution MRI and CT scanning facilities for accurate diagnostics.",
      image: "/gallery_radiology.jpg",
    },
    {
      title: "Premium Recovery Suites",
      description: "Comfortable private rooms offering a serene environment for recovery.",
      image: "/gallery_room.jpg",
    },
  ];

  return (
    <div className="container gallery-section">
      <div className="gallery-header">
        <p className="subtitle">Our Infrastructure</p>
        <h2>World-Class Medical Facilities</h2>
        <p className="description">
          Explore our state-of-the-art infrastructure designed to offer maximum patient safety, 
          comfort, and top-tier clinical outcomes.
        </p>
      </div>

      <div className="gallery-grid">
        {facilities.map((item, index) => (
          <div className="gallery-card" key={index}>
            <div className="gallery-img-wrapper">
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

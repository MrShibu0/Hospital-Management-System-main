import React from "react";
import { FaHeart, FaEye, FaShieldAlt } from "react-icons/fa";

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      description: "To provide top-tier, compassionate, and affordable healthcare services to the community of Odisha through medical innovation and empathetic care.",
      icon: <FaHeart />,
      color: "#e74c3c",
    },
    {
      title: "Our Vision",
      description: "To be recognized as the leading healthcare institution in Eastern India, setting new benchmarks in clinical excellence, safety, and research.",
      icon: <FaEye />,
      color: "#2ecc71",
    },
    {
      title: "Our Core Values",
      description: "Rooted in integrity, empathy, excellence, and transparency. We believe in puting patient health and well-being at the heart of everything we do.",
      icon: <FaShieldAlt />,
      color: "#3498db",
    },
  ];

  return (
    <div className="container mission-vision-section">
      <div className="mission-grid">
        {cards.map((card, index) => (
          <div className="mission-card" key={index}>
            <div className="icon-wrapper" style={{ color: card.color }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;

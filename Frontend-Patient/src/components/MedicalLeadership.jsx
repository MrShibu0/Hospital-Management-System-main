import React from "react";

const MedicalLeadership = () => {
  const leaders = [
    {
      name: "Dr. Alok Mohanty",
      role: "Chief Medical Director",
      experience: "25+ Years Experience",
      education: "MD, DM (Cardiology) - AIIMS",
      image: "/doctor_leader_1.jpg",
    },
    {
      name: "Dr. Priyadarshini Das",
      role: "Chief of Surgical Services",
      experience: "18+ Years Experience",
      education: "MS, MCh (Neurosurgery)",
      image: "/doctor_leader_2.jpg",
    },
    {
      name: "Dr. Manoj K. Patnaik",
      role: "Director of Clinical Research",
      experience: "20+ Years Experience",
      education: "MD (Pediatrics), Fellowship in Neonatology",
      image: "/doctor_leader_3.jpg",
    },
  ];

  return (
    <div className="container leadership-section">
      <div className="leadership-header">
        <p className="subtitle">Our Team</p>
        <h2>Medical Board & Leadership</h2>
        <p className="description">
          Meet the visionary healthcare leaders and specialists driving clinical excellence and 
          patient safety standards at Life Care Hospital.
        </p>
      </div>

      <div className="leadership-grid">
        {leaders.map((leader, index) => (
          <div className="leadership-card" key={index}>
            <div className="leader-img-wrapper">
              <img src={leader.image} alt={leader.name} className="leader-img" />
            </div>
            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
              <p className="leader-edu">{leader.education}</p>
              <span className="leader-exp">{leader.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalLeadership;

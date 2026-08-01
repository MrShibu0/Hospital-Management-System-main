import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner biography-image-wrapper">
        <img src={imageUrl} alt="About Life Care" className="biography-img" />
      </div>

      <div className="banner biography-text">
        <p className="subtitle">Biography</p>
        <h3>Who We Are & What We Stand For</h3>
        <p className="lead">
          Life Care Hospital is a premier, world-class healthcare provider dedicated to
          delivering comprehensive medical services with exceptional expertise and care.
        </p>
        <p>
          Since our founding, we have been at the forefront of medical innovation. Our
          facility features advanced surgical suites, modern diagnostic imaging, and 
          integrated therapeutic centers. Each department is designed to foster recovery 
          and provide the highest level of safety and patient comfort.
        </p>
        <p>
          We employ a holistic, patient-centered approach. By combining the skills of 
          leading specialists, compassionate nurses, and cutting-edge technology, we 
          create personalized care plans tailored to each individual's unique needs.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h4>15+</h4>
            <p>Years of Service</p>
          </div>
          <div className="stat-card">
            <h4>250+</h4>
            <p>Qualified Doctors</p>
          </div>
          <div className="stat-card">
            <h4>100k+</h4>
            <p>Happy Patients</p>
          </div>
          <div className="stat-card">
            <h4>99%</h4>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

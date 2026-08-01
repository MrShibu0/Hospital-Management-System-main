import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MissionVision from "../components/MissionVision";
import MedicalLeadership from "../components/MedicalLeadership";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Life Care Hospital"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"}/>
      <MissionVision />
      <MedicalLeadership />
    </>
  );
};

export default AboutUs;

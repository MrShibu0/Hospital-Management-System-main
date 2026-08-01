import React from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";

const DepartmentsPage = () => {
  return (
    <>
      <Hero
        title={"Our Medical Departments | Life Care Hospital"}
        imageUrl={"/about.png"}
      />
      <Departments />
    </>
  );
};

export default DepartmentsPage;

import React from "react";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";

const ContactUs = () => {
  return (
    <>
      <Hero
        title={"Contact Us | Life Care Hospital"}
        imageUrl={"/about.png"}
      />
      <MessageForm />
    </>
  );
};

export default ContactUs;

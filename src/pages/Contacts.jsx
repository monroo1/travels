import React from "react";
import ContactsCard from "../components/contacts-card/ContactsCard";
import Gallery from "../components/gallery/Gallery";
import Testimonials from "../components/testimonials/Testimonials";

const Contacts = () => {
  return (
    <>
      <Gallery />
      <Testimonials />
      <ContactsCard />
    </>
  );
};

export default Contacts;

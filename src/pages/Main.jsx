import React from "react";
import Booking from "../components/booking/Booking";
import Gallery from "../components/gallery/Gallery";
import TravelGuideline from "../components/travel-guideline/TravelGuideline";
import Testimonials from "../components/testimonials/Testimonials";
import ContactsCard from "../components/contacts-card/ContactsCard";

const Main = () => {
  return (
    <>
      <Booking />
      <TravelGuideline />
      <Testimonials />
      <Gallery />
      <ContactsCard />
    </>
  );
};

export default Main;

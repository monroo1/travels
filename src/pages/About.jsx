import React from "react";
import AboutUs from "../components/about-us/AboutUs";
import TravelGuideline from "../components/travel-guideline/TravelGuideline";
import ContactsCard from "../components/contacts-card/ContactsCard";
import StepsJourney from "../components/steps-journey/StepsJourney";

const About = () => {
  return (
    <>
      <AboutUs />
      <TravelGuideline />
      <StepsJourney />
      <ContactsCard />
    </>
  );
};

export default About;

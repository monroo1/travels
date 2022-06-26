import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Booking from "./components/booking/Booking";
import StepsJourney from "./components/steps-journey/StepsJourney";
import Location from "./components/location/Location";
import TravelGuideline from "./components/travel-guideline/TravelGuideline";
import AboutUs from "./components/about-us/AboutUs";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/gallery/Gallery";
import ContactsCard from "./components/contacts-card/ContactsCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Booking />
        <StepsJourney />
        <Location />
        <TravelGuideline />
        <AboutUs />
        <Testimonials />
        <Gallery />
        <ContactsCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Booking from "./components/booking/Booking";
import StepsJourney from "./components/seteps-journey/StepsJourney";
import Location from "./components/location/Location";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Booking />
        <StepsJourney />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;

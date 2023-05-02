import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Bridegroom from "./components/Bridegroom";
import RSVP from "./components/RSVP";
import Where from "./components/Where";

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Where />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;

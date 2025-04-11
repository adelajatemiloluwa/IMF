import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import IMFPressRelease from './Components/IMFPressRelease/IMFPressRelease';
import IMFBanner from './Components/IMFBanner/IMFBanner';
import LatestReleases from './Components/LatestReleases/LatestReleases';
import Publications from './Components/Publications/Publications';
import IMFNavigation from './Components/IMFNavigation/IMFNavigation';
import ResourcesNav from './Components/ResourcesNav/ResourcesNav';
import TopicsSection from './Components/TopicsSection/TopicsSection';
import AccountabilitySection from './Components/AccountabilitySection/AccountabilitySection';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/ContactPage/ContactPage';

const HomePage = () => {
  return (
    <>
      <IMFPressRelease />
      <IMFBanner />
      <LatestReleases />
      <Publications />
      <IMFNavigation />
      <ResourcesNav />
      <TopicsSection />
      <AccountabilitySection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import './style.css';
import { Navigate, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './components/navbar';
import HomeScreen from './components/homescreen';
import { Routes, Route } from "react-router-dom";
import AboutUs from './components/aboutus';
import OurClients from './components/ourclients';
import Footer from './components/footer';
import MissionSection from './components/MissionSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import StrategicEdgeSection from './components/StrategicEdgeSection';
import FeaturesSection from './components/FeaturesSection';
import Connect from './components/Connect';
import CapabilitiesMain from './components/pages/capabilities/CapabilitiesMain';
import IndustriesSection from './components/industriessections';
import CardGrid from './components/cardgrid';
import IndustryGrid from './components/industrygrid';
import ListPage from './components/pages/blog/listpage'
import FinanceBlog from './components/pages/blog/financeblog';
import MarketingBlog from './components/pages/blog/marketingblog';
import ReArchitecting from './components/pages/blog/ReArchitecting'
import Strategy from './components/pages/blog/strategy';
import HealthCare from './components/pages/blog/healthcareblog';
import ProfileCards from './components/pages/profile/profilecards';
import Profilecta from './components/pages/profile/profilecta';
import ProfileHome from './components/pages/profile/profilehome';
import AdminLogin from './components/pages/admin/adminlogin';
import AdminDashboard from './components/pages/admin/adminhero'
import PrivacyPolicy from './components/privacypolicyanddatacollection';
import Overview from './components/overview';

// routes

function App() {
  const location = useLocation(); // Get the current route
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='app'>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Overview/>}
          />
          <Route path="/industry-focus" element={
            <>
              <IndustriesSection />
              <CardGrid />
              <IndustryGrid />
            </>
          } />
          <Route path="/case-study" element={
            <>
              <ProfileHome />
              <ProfileCards />
              <Profilecta />
            </>
          } />
          <Route path="/connect" element={<Connect />} />
          <Route path="/capabilities" element={<CapabilitiesMain />} />
          <Route path="/blogs" element={<ListPage />} />
          <Route path="/wealthai" element={<FinanceBlog />} />
          <Route path="/marketai" element={<MarketingBlog />} />
          <Route path="/thinkai" element={<Strategy />} />
          <Route path="/learnai" element={<ReArchitecting />} />
          <Route path="/healthai" element={<HealthCare />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/admin"
            element={
              isAuthenticated
                ? <Navigate to="/admindashboard" replace />
                : <AdminLogin onLoginSuccess={handleLoginSuccess} />
            }
          />
          <Route
            path="/admindashboard"
            element={
              isAuthenticated
                ? <AdminDashboard />
                : <Navigate to="/admin" replace />
            }
          />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
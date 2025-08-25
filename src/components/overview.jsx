import React from 'react';
import HomeScreen from './homescreen';
import MissionSection from './MissionSection';
import AboutUs from './aboutus';
import CapabilitiesSection from './CapabilitiesSection';
import StrategicEdgeSection from './StrategicEdgeSection';
import FeaturesSection from './FeaturesSection';
import OurClients from './ourclients';

const Overview = () => {
    return (
        <div>
            <HomeScreen />
            <MissionSection />
            <AboutUs />
            <CapabilitiesSection />
            <StrategicEdgeSection />
            <FeaturesSection />
            <OurClients />
        </div>
    );
}

export default Overview;
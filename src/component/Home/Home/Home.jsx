import React from 'react';
import About from '../About/About';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import BuildTools from '../BuildTools/BuildTools';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';


const Home = () => {
    return (
      <main>
        <Header />
        <BuildTools />
        <BrowserSupport/>
        <Pricing />
        <About />

        
        <HappyClient />

        <Contact />
        <Footer />
        {/* <ScrollTop/>   */}
      </main>
    );
};

export default Home;
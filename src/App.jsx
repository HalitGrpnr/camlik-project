import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SiteLocation from "./components/SiteLocation";

const App = () => {
    return (
        <div>
            <Hero />
            <About />
            <SiteLocation />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

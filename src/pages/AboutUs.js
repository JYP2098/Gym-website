import React from 'react';
import About from '../components/About';
import FAQSection from '../components/FAQSection';
import ServicesSection from '../components/ServicesSection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    return(
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <About />
        <ServicesSection/>
        <FAQSection />
        <ScrollTop />
    </motion.div>
    );
}
export default AboutUs;
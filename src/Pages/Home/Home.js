import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <Appointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;
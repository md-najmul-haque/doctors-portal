import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';

import Info from '../Info/Info';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <Appointment />
        </div>
    );
};

export default Home;
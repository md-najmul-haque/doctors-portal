import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const Info = () => {

    const infoCards = [
        { id: 1, img: clock, title: 'Opening Hours', body: 'Lorem Ipsum is simply dummy text of the pri', bgClass: 'bg-gradient-to-r from-secondary to-primary' },
        { id: 2, img: marker, title: 'Visit our location', body: 'Brooklyn, NY 10036, United States', bgClass: 'bg-accent' },
        { id: 3, img: phone, title: 'Contact us now', body: '+000 123 456789', bgClass: 'bg-gradient-to-r from-secondary to-primary' }
    ]

    return (
        <div className='grid grid-rows-3 lg:grid-rows-1 grid-flow-col gap-5 p-12'>
            {
                infoCards.map(infoCard => <InfoCard key={infoCard.id} infoCard={infoCard} />)
            }
        </div>
    );
};

export default Info;
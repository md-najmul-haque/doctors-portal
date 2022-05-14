import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {

    const services = [
        { id: 1, img: fluoride, title: 'Fluoride Treatment', body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { id: 2, img: cavity, title: 'Cavity Filling', body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { id: 3, img: whitening, title: 'Teeth Whitening', body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' }
    ]

    return (

        <div>
            <div className='my-16'>
                <h3 className='text-sm font-bold text-center text-secondary'>OUR SERVICES</h3>
                <h1 className='text-3xl text-center'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    services.map(service => <Service key={service.id} service={service} />)
                }

            </div>
        </div>
    );
};

export default Services;
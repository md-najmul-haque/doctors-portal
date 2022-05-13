import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {

    const infoCards = [
        { _id: 1, img: clock, body: 'Lorem Ipsum is simply dummy text of the pri', name: 'Winson Herry' },
        { _id: 2, img: marker, body: 'Brooklyn, NY 10036, United States', name: 'Winson Herry' },
        { _id: 3, img: phone, body: '+000 123 456789', name: 'Winson Herry' }
    ]

    return (
        <section>
            <div>
                <h3>Testimonial</h3>
                <p>What Our Patients Says</p>
            </div>
        </section>
    );
};

export default Testimonial;
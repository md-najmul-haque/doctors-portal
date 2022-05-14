import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Quote from './Quote'


const Testimonial = () => {

    const quotes = [
        { _id: 1, img: people1, body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', location: 'New York' },
        { _id: 2, img: people2, body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', location: 'Taxas' },
        { _id: 3, img: people3, body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', name: 'Winson Herry', location: 'California' }
    ]

    return (
        <section className="my-16">
            <div className='flex justify-between '>
                <div>
                    <h3 className='text-sm font-bold text-secondary'>Testimonial</h3>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    quotes.map(quote => <Quote key={quote._id} quote={quote} />)
                }
            </div>

        </section >
    );
};

export default Testimonial;
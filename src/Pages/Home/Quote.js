import React from 'react';

const Quote = ({ quote }) => {
    const { img, body, name, location } = quote;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{body}</p>
                </div>
                <div className='flex justify-start items-center p-5'>
                    <div>
                        <img className='border-secondary rounded-full' src={img} alt="Shoes" />
                    </div>
                    <div className='pl-5'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
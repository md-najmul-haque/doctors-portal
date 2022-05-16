import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-xl font-bold text-secondary">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }</p>

                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                    <div class="card-actions justify-center">
                        <label htmlFor="booking-modal" onClick={() => { setTreatment(service) }} disabled={slots.length === 0} class="btn btn-secondary bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
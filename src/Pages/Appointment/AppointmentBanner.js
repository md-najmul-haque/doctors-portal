import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img src={chair} class="rounded-lg w-full shadow-2xl" alt='doctor-chair' />
                    </div>
                    <div className='flex-1'>
                        <div className='w-full'>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                            <p className='ml-5'>You selected {format(date, 'PP')}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
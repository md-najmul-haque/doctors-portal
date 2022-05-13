import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';



const Appointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center p-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-175px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl text-bold'>Appointment</h3>
                <p className='text-white text-4xl'>Make an appointment Today</p>
                <p className='text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button children={'Get Started'} />
            </div>
        </section>
    );
};

export default Appointment;
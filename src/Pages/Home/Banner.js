import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div class="bg-[url('/src/assets//images/bg.png')]">
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img src={chair} class="rounded-lg w-full shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1 ml-0'>
                        <div className='w-full'>
                            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
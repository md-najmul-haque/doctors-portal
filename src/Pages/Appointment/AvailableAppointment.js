import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://doctors-portal-server-q0mf.onrender.com/available?date=${formattedDate}`)
        .then(res => res.json())

    )

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://doctors-portal-server-q0mf.onrender.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center mt-12'>Available Appointments on {format(date, 'PP')}</h4>
            <h4 className='text-xl text-center my-5'>Please select service</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></Service>)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch} />
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;
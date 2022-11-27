import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1YV6JtSRYbvKOdrPL64Md7CBgYuMHNSQH3MyRFxn5fXVs2vZWWRLo9YSzkltLiEMzAElnRagop5JyZwzVNDtr400sMyB71OK');

const Payment = () => {
    const { id } = useParams();

    const url = `https://doctors-portal-server-q0mf.onrender.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')} ` }

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
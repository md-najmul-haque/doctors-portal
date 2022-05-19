import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {

    const { image, name, specialty, email } = doctor;

    const handleDelete = email => {
        const url = `http://localhost:5000/doctor/${email}`;

        fetch(url, {
            method: 'delete',
            headers: {
                authorization: `{bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`doctor: ${name} is deleted`)
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-error">Delete</button></td>
        </tr>

    );
};

export default DoctorRow;
import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {

    const { image, name, specialty } = doctor;

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
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>

    );
};

export default DoctorRow;
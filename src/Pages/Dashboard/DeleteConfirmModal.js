import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {

    const { name, email } = deletingDoctor;

    const handleDelete = () => {
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
                    setDeletingDoctor(null);
                    refetch()
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p class="py-4">If you delete then it will be remove forever.</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteConfirmModal;



import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>

            </tr>
        </div>
    );
};

export default UserRow;
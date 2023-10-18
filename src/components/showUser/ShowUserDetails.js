// src/components/ShowUserDetails.js
import React from 'react';

  // user Details list component
function ShowUserDetails({users}) {

    return (
    <div >
       <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUserDetails;

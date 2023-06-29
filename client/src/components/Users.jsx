import React from 'react';

const Users = ({ currentUsers }) => {
  if (currentUsers.length > 0) {
    return (
      <table className="organizationsTableContainer">
        <tbody>
          <tr>
            <th className="organizationName">Name</th>
            <th className="organizationId">Email</th>
          </tr>
          {currentUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    );
  } else {
    return (<div></div>)
  }
}

export default Users;


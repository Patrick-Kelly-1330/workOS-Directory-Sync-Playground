import React from 'react';

const Directories = ({ currentDirectories }) => {
  if (currentDirectories.length > 0) {
    return (
      <table className="organizationsTableContainer">
        <tbody>
          <tr>
            <th className="organizationName">Directory Name</th>
            <th className="organizationId">Directory Id</th>
          </tr>
          {currentDirectories.map((directory) => {
              return (
                <tr key={directory.id}>
                  <td>{directory.name}</td>
                  <td>{directory.id}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    );
  } else {
    return <div className="organizationsTableContainer noOrganizations">Loading Directories...</div>
  }
}

export default Directories;

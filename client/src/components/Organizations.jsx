import React from 'react';

const Organizations = ({ currentOrganizations, setDeleteConfirmationVisible, deleteConfirmationVisible, handleDelete }) => {
  if (currentOrganizations.length > 0) {
    return (
      <table className="organizationsTableContainer">
        <tbody>
          <tr>
            <th className="organizationName">Organization Name</th>
            <th className="organizationId">Organization Id</th>
          </tr>
          {currentOrganizations.map((organization) => {
            return (
              <tr key={organization.id}>
                <td>{organization.name}</td>
                <td>{organization.id}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  } else {
    return <div className="organizationsTableContainer noOrganizations">Loading Organizations...</div>
  }
}

export default Organizations;

import React from 'react';

const DirectoryPlayground = ({ setDeleteConfirmationVisible, deleteConfirmationVisible, handleDelete }) => {
    if (true) {
      return (
      <table className="organizationsTableContainer">
        <tbody>
          <tr>
            <th className="organizationName">Directories</th>
            <th className="organizationId">Organization Id</th>
          </tr>
          {/* {currentOrganizations.map((organization) => {
            if (organization.name === 'oneLogin') {
              return (
                <tr key={organization.id}>
                  <td>{organization.name}</td>
                  <td>{organization.id}</td>
                </tr>
              )
            }
          })} */}
        </tbody>
      </table>
    );
  } else {
    return <div className="organizationsTableContainer noOrganizations">Loading Organizations...</div>
  }
}

export default DirectoryPlayground;

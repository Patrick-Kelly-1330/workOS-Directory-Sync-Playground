import React from 'react';

const OrganizationsList = ({currentOrganizations}) => {

  if (currentOrganizations.length > 0) {
    return (
    <div className="organizationContainer">
     {currentOrganizations.map((organization) => {
              return (
               <div className="individualOrganization" key={organization}>{organization}</div>
              )
        })}
    </div>
  );
  } else {
    return (
      <div></div>
    )
  }
}

export default OrganizationsList;

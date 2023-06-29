import React from 'react';

const NewOrganization = ({ setNewOrganizationVisible, newOrganizationVisible, handleNewOrganization, handleNewOrganizationName, handleNewOrganizationDomain }) => {
  if (newOrganizationVisible) {
    return (
      <div className="modalCover">
        <div className="newOrganizationContainer">
            <form className="newOrganizationForm">
              <label>Organization Name</label>
              <input type="text" onChange={handleNewOrganizationName}/>
              <label>Organization Domain(s)</label>
              <input type="text" onChange={handleNewOrganizationDomain}/>
            </form>
            <div className="newOrganizationNav">
              <i className="fa-regular fa-circle-left fa-xl" onClick={()=> setNewOrganizationVisible(!newOrganizationVisible)}></i>
              <input type="submit" value="Create Organization" className="submitOrganization" onClick={handleNewOrganization}/>
            </div>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default NewOrganization;

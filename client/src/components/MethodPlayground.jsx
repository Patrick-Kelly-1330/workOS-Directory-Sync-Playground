import React from 'react';
import OrganizationsList from './OrganizationsList.jsx';

const MethodPlayground = ({ handleMethodTest, currentOrganizations}) => {

  return (
    <div className="containerComponent">
        <div className="componentHeader">Method Playground</div>
        <div className="loginOrganizationContainer">
          <button className="Button" onClick={handleMethodTest}>Test Method</button>
        </div>
        <OrganizationsList currentOrganizations={currentOrganizations} />
    </div>
  );
}

export default MethodPlayground;

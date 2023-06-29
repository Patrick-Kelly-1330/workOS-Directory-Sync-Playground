import React from 'react';
import Users from './Users.jsx';

const DirectoryInfo = ({ handleDirectorySelection, handleGetUsers, currentDirectories, currentUsers }) => {

  return (
    <div className="containerComponent">
        <div className="componentHeader">Login Playground</div>
        <div className="loginOrganizationContainer">
          <div className="selectHeader">Select your Identity Provider</div>
          <select className="selectText" onChange={handleDirectorySelection}>{currentDirectories.map((directory)=> {
              return <option value={directory.id} key={directory.name}>{directory.name}</option>
              })
            }
          </select>
          <button className="Button" onClick={handleGetUsers}>Locate Users</button>
          <Users currentUsers={currentUsers} />
        </div>
    </div>
  );
}

export default DirectoryInfo;

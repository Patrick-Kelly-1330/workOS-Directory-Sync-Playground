import React from 'react';

const MethodPlayground = ({ handleMethodTest}) => {

  return (
    <div className="containerComponent">
        <div className="componentHeader">Method Playground</div>
        <div className="loginOrganizationContainer">
          <button className="Button" onClick={handleMethodTest}>Test Method</button>
        </div>
    </div>
  );
}

export default MethodPlayground;

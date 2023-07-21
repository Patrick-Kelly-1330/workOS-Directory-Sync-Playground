import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Directories from './Directories.jsx';
import DirectoryInfo from './DirectoryInfo.jsx'; 
import MethodPlayground from './MethodPlayground.jsx';

const App = () => {
  const [currentDirectories, setCurrentDirectories] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selectedDirectory, setSelectedDirectory] = useState('');  

  const handleGetDirectories = () => {
    Axios.get('/listDirectories')
      .then((directories) => {
        setCurrentDirectories(directories.data);
        setSelectedDirectory(directories.data[0].id)
      })
      .catch((err) => {
        console.log('unable to get directories with error ', err);
      })
  }

  const handleGetUsers = () => {
    Axios.get('/listDirectoryUsers', {
      params: {
        directoryId: selectedDirectory
      }
    })
      .then((users) => {
        console.log('USERS ', users.data)
        setCurrentUsers(users.data)
      })
      .catch((err) => {
        console.log('unable to get users with error ', err);
      })
  }

  const handleMethodTest = () => {
    Axios.get('/testMethod')
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log('unable to get users with error ', err);
      })
  }

  const handleDirectorySelection = (e) => {
    setSelectedDirectory(e.target.value);
  }

  useEffect(()=> {
    handleGetDirectories()
  }, [])


  return (
    <div className="componentHolder">
       <div className="containerComponent">
        <div className="componentHeader">Directories</div>
        <Directories currentDirectories={currentDirectories} />
      </div>
      {/* <button onClick={()=> {console.log(currentSSOConnections)}}>Value Test Button</button> */}
      <DirectoryInfo handleDirectorySelection={handleDirectorySelection} handleGetUsers={handleGetUsers} currentDirectories={currentDirectories} currentUsers={currentUsers} />
      <MethodPlayground handleMethodTest={handleMethodTest} />
    </div>
  );
}

export default App;

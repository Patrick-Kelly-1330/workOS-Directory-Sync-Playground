import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Organizations from './Organizations.jsx';
import NewOrganization from './NewOrganization.jsx';
import DeleteConfirmation from './DeleteConfirmation.jsx';

const App = () => {
  const [currentOrganizations, setCurrentOrganizations] = useState([]);
  const [currentSSOConnections, setCurrentSSOConnections] = useState([]);
  const [newOrganizationVisible, setNewOrganizationVisible] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [newOrganizationName, setNewOrganizationName] = useState('');
  const [newOrganizationDomain, setNewOrganizationDomain] = useState('');
  const [organizationDelete, setOrganizationDelete] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');  

  const handleNewOrganizationName = (e) => {
    setNewOrganizationName(e.target.value);
  }

  const handleNewOrganizationDomain = (e) => {
    setNewOrganizationDomain(e.target.value);
  }

  const handleNewOrganization = () => {
    if (newOrganizationName.length > 0 && newOrganizationDomain.length > 0) {
      setNewOrganizationVisible(!newOrganizationVisible);
      Axios.post('/newOrganization', {
      name: newOrganizationName,
      domains: newOrganizationDomain,
    })
      .then(()=> {
        console.log('success')
      })
      .catch((err)=> {
        console.log('unable to add new organization - error ', err);
      })
    } else {
      console.log('please provide a name and domain(s)')
      setNewOrganizationVisible(!newOrganizationVisible);
    }
  }

  const handleGetOrganizations = () => {
    Axios.get('/organizations')
      .then((organizations) => {
        setCurrentOrganizations(organizations.data);
        setSelectedOrg(organizations.data[0].id);
      })
      .catch((err) => {
        console.log('unable to get organizations with error ', err);
      })
  }

  const handleGetSSOConnections = () => {
    Axios.get('/connections')
    .then((connections) => {
      setCurrentSSOConnections(connections.data);
    })
    .catch((err) => {
      console.log('unable to get organizations with error ', err);
    })
  }

  const handleOrgSelection = (e) => {
    setSelectedOrg(e.target.value);
  }

  const handleConfirmationDelete = () => {
    setDeleteConfirmationVisible(!deleteConfirmationVisible)
    Axios.post('/deleteOrganization', {
      id: organizationDelete,
    })
      .then(() => {
        console.log('organization deleted')
      })
      .catch((err) => {
        console.log('unable to delete organization - error : ', err);
      })
  }

  const handleDelete = (id) => {
    setDeleteConfirmationVisible(!deleteConfirmationVisible);
    setOrganizationDelete(id);
  }

  useEffect(()=> {
    handleGetOrganizations()
    handleGetSSOConnections()
  }, [])


  return (
    <div className="componentHolder">
       <div className="containerComponent">
        <div className="componentHeader">Organizations</div>
        <Organizations currentOrganizations={currentOrganizations} setDeleteConfirmationVisible={setDeleteConfirmationVisible} deleteConfirmationVisible={deleteConfirmationVisible} />
        <div className="Button" onClick={()=>setNewOrganizationVisible(!newOrganizationVisible)}>Create new Organization</div>
        <NewOrganization setNewOrganizationVisible={setNewOrganizationVisible} newOrganizationVisible={newOrganizationVisible} handleNewOrganization={handleNewOrganization} handleNewOrganizationName={handleNewOrganizationName} handleNewOrganizationDomain={handleNewOrganizationDomain}/>
        <DeleteConfirmation setDeleteConfirmationVisible={setDeleteConfirmationVisible} deleteConfirmationVisible={deleteConfirmationVisible} handleConfirmationDelete={handleConfirmationDelete}/>
      </div>
      {/* <button onClick={()=> {console.log(currentSSOConnections)}}>Value Test Button</button> */}
    </div>
  );
}

export default App;

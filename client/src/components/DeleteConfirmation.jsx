import React from 'react';

const DeleteConfirmation = ({ deleteConfirmationVisible, handleConfirmationDelete, setDeleteConfirmationVisible }) => {
  if (deleteConfirmationVisible) {
    return (
      <div className="modalCover">
        <div className="modalContainer">
          <div className="deleteConfirmationText">Are you sure you want to delete this organization?</div>
          <input className="deleteConfirmationCancel" type="submit" value="cancel" onClick={() => setDeleteConfirmationVisible(!deleteConfirmationVisible)}></input>
          <input className="deleteConfirmationYes" type="submit" value="delete" onClick={handleConfirmationDelete}></input>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default DeleteConfirmation;

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return(
    <Modal
      isOpen={ !!props.selectedOption }
      contentLabel="Selected Option"
      >
      <h3>{ props.selectedOption }</h3>
      <button onClick={ props.handleClick }>Close</button>
    </Modal>
  )
}

export default OptionModal;

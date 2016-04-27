import React, { PropTypes } from 'react';
import VisibleDemandList from 'containers/visibleDemandList';
import 'styles/modal.scss'

const Modal = ({closeModal, displayModal}) => {
	return (
		<div className={ displayModal ? 'show-modal ngo-modal' : 'close-modal'}>
			<VisibleDemandList />
			<button onClick={()=> closeModal()}>close this modal</button>
		</div>
	) 
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
  displayModal: PropTypes.bool.isRequired
};

export default Modal;
import React, { PropTypes } from 'react';
import DemandListConatiner from 'containers/demandListContainer';
import NgoContainer from 'containers/ngoContainer';
import 'styles/modal.scss'

const Modal = ({closeModal, displayModal}) => {
	return (
		<div className={ displayModal ? 'show-modal ngo-modal' : 'close-modal'}>
			<NgoContainer />
			<DemandListConatiner />
			<button onClick={()=> closeModal()}>close this modal</button>
		</div>
	) 
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
  displayModal: PropTypes.bool.isRequired
};

export default Modal;

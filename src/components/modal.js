import React, { PropTypes } from 'react';
import DemandList from 'components/demandList';
import 'styles/modal.scss'

const Modal = ({closeModal, demands}) => {
	return (
		<div className='ngo-modal'>
			<DemandList demands={demands} />
			<button onClick={()=> closeModal()}>close this modal</button>
		</div>
	) 
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
  demands: PropTypes.array.isRequired
};

export default Modal;

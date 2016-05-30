import React, { PropTypes } from 'react';
import DemandList from 'components/demandList';
import 'styles/modal.scss'

const Modal = ({closeModal, demands}) => {
	return (
		<div className='ngo-modal'>
			<button className='close-btn pull-right'
							value='X'
							type='text'
							onClick={()=> closeModal()}>X</button>
			<DemandList demands={demands} />
		</div>
	) 
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
  	demands: PropTypes.array.isRequired
};

export default Modal;

import React, { PropTypes } from 'react';
import DemandList from 'components/demandList';
import Ngo from 'components/ngo';
import 'styles/modal.scss'

const Modal = ({closeModal, displayModal, ngo, demands}) => {
	return (
		<div className={ displayModal ? 'show-modal ngo-modal' : 'close-modal'}>
			<Ngo ngo={ngo}/>
			<DemandList demands={demands} />
			<button onClick={()=> closeModal()}>close this modal</button>
		</div>
	) 
}


Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
  displayModal: PropTypes.bool.isRequired
};

export default Modal;

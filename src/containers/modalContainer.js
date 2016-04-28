import { connect } from 'react-redux';
import Modal from 'components/modal';
import { closeModal } from 'redux/reducers/modal';

function mapStateToProps(state) {
  return {
		displayModal: state.modal.displayModal,
		ngo: state.modal.ngo,
		demands: state.modal.demands
  };
}

const ModalContainer = connect(
  mapStateToProps, 
  {closeModal}
)(Modal)

export default ModalContainer;
import React from 'react';
import { connect } from 'react-redux';
import Modal from './../components/modal';
import { closeModal } from './../redux/reducers/modal';

function mapStateToProps(state) {
  return {
		displayModal: state.modal
  };
}

const ModalContainer = connect(
  mapStateToProps, 
  {closeModal}
)(Modal)

export default ModalContainer;
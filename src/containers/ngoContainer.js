import { connect } from 'react-redux';
import Ngo from 'components/ngo';

const mapStateToProps = (state) => {
  return {
    ngo: state.ngo
  }
}

const NgoContainer = connect(
  mapStateToProps
)(Ngo)

export default NgoContainer;

import { connect } from 'react-redux';
import DemandList from 'components/demandList';

const mapStateToProps = (state) => {
  return {
    //something is not right here, Siva?
    demands: state.demands.demands
  }
}

const DemandListConatiner = connect(
  mapStateToProps
)(DemandList)

export default DemandListConatiner;

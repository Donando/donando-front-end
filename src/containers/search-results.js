import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './../components/modal';

import { load_location_data } from 'redux/reducers/filter-reducer'

import Map from 'components/map'

import 'styles/search-results.scss'

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentWillMount() {
    this.props.dispatch(load_location_data(this.props.params.name));
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    //MODAL WONT CLOSE!!!!
    console.log(this.state.isOpen, 'this')
    console.log(this, 'true')
    this.setState({ isOpen: false });
    console.log(this.state, 'false')
  }

  render() {
    const { demands } = this.props;
    var modalContainer = this.state.isOpen ? <Modal closeModal={this.closeModal} demands={demands}/> : '';
    let markerObjects = [];
    let searchResult = this.props.demands && this.props.demands.map((item, index) => {
      markerObjects.push(item.ngo);
      return (
        <div className='search-result' key={index}>
          <p>{item.data}</p>
          <p>{item.ngo.name}</p>
          <p>{item.ngo.phone}</p>
          <p>{item.ngo.email}</p>
          <p>{item.ngo.address}</p>
        </div>
      )
    });

    return (
      <div onClick={this.openModal}>
        <p>You search query: {this.props.params.name}</p>
        <Map markers = {markerObjects} />
        <p>Current value of API call : {this.props.searchStatus}</p>
        {
          searchResult
        }
        {modalContainer}
      </div>
    )
  }
}
SearchResults.propTypes = {
  demands: React.PropTypes.array,
  searchStatus: React.PropTypes.string
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchResults)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './../components/modal';

import { change_filter_location } from 'redux/reducers/filter-reducer';

import 'styles/search-results.scss'

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      test: null
    }
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(change_filter_location(this.props.params.name));
  }
  openModal() {
    this.setState({isOpen: true});
  }
  closeModal(){
    console.log(this, 'this')
    this.setState({isOpen: false, test: "something"});
  }

  render() {
    const {
      demands
    } = this.props;
    var modalContainer = this.state.isOpen ? <Modal closeModal={()=> this.closeModal()} demands={demands}/> : '';
    return (
      <div onClick={()=> this.openModal()}>
        <p>You search query: {this.props.params.name}</p>
        <p>Current value of API call : {this.props.searchStatus}</p>
        {
          demands && demands.map((item, index) => {
            return (
              <div className='search-result' key={index}>
                <p>{item.data}</p>
                <p>{item.ngo.name}</p>
                <p>{item.ngo.phone}</p>
                <p>{item.ngo.email}</p>
                <p>{item.ngo.address}</p>
              </div>
            )
          })
        }
        {modalContainer}
      </div>
    )
  }
}
SearchResults.propTypes = {
  demands: React.PropTypes.Array,
  searchStatus: React.PropTypes.string
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchResults)

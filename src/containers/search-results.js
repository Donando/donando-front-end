// Library
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Modal from 'components/modal'
import Map from 'components/map'

// Actions
import { load_data } from 'redux/reducers/filter-reducer'

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    const { location, item } = this.props.location.query;
    this.props.dispatch(load_data(location, item));
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { demands } = this.props;
    var modalContainer = this.state.isOpen ? <Modal closeModal={this.closeModal} demands={demands}/> : '';
    let markerObjects = [];
    let searchResult = this.props.demands && this.props.demands.map((item, index) => {
      markerObjects.push(item.ngo);
      return (
        <div className = 'ngo' key={index} onClick={this.openModal}>
          {/*
            item.demands.map((item, index) => ((<p key={index}>{item}</p>)))
          */}
          
          <div className = 'col name'>
            {item.ngo.name}
          </div>
          <div className = 'col address'>
            {item.ngo.address}
          </div>
          <div className = 'col contact'>
            <div className = {item.ngo.email ? 'email' : 'email hide'}>
              <span className = 'icon email-icon'><img src = '../static/images/icons/contact_mail.svg' /></span>
              <span>{item.ngo.email}</span>
            </div>
            
            <div className = {item.ngo.phone ? 'phone' : 'phone hide'}>
              <span className = 'icon phone-icon'><img src = '../static/images/icons/contact_phone.svg' /></span>
              <span>{item.ngo.phone}</span>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className = 'search-results-container'>
        <div className = 'ngo-container'>
          {
            searchResult
          } 
        </div>
        { //FIX: we don't need this modal
          modalContainer
        }
        <div className = 'map-container'>
          <Map markers={markerObjects} openModal={this.openModal}/>
        </div>
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

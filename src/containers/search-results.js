// Library
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Modal from 'components/modal'
import Map from 'components/map'

// Actions
import { load_data } from 'redux/reducers/filter-reducer'

// Styles
import 'styles/search-results.scss'

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
        <div className='search-result' key={index} onClick={this.openModal}>
          {item.demands.map((item, index) => ((<p key={index}>{item}</p>)))}
          <p>{item.ngo.name}</p>
          <p>{item.ngo.phone}</p>
          <p>{item.ngo.email}</p>
          <p>{item.ngo.address}</p>
        </div>
      )
    });

    return (
      <div>
        <Map markers={markerObjects} openModal={this.openModal}/>
        {
          searchResult
        }
        {
          modalContainer
        }
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

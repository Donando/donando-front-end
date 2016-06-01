// Library
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Map from 'components/map'

// Actions
import { load_data } from 'redux/reducers/filter-reducer'

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      index: ''
    };
    this.toggleNgo = this.toggleNgo.bind(this);
  }

  componentWillMount() {
    const { location, item } = this.props.location.query;
    this.props.dispatch(load_data(location, item));
  }

  toggleNgo(value) {
    this.setState({ index: value });
  }

  render() {
    const { demands } = this.props;
    let markerObjects = [];
    let searchResult = this.props.demands && this.props.demands.map((item, index) => {
      markerObjects.push(item.ngo);
      return (
        <div className = 'ngo' key = {index} onClick = {() => this.toggleNgo(index)} ref = {(ref) => this['ngo' + index] = ref}>
          
          <div className = 'ngo-metadata'>
            <div className = 'col name'>
              {item.ngo.name}
            </div>
            <div className = 'col address'>
              {item.ngo.address}
            </div>
            <div className = 'col contact'>
              <div className = 'email'>
                <span className = 'icon email-icon'><img src = '../static/images/icons/contact_mail.svg' /></span>
                <span>{item.ngo.email || 'NA'}</span>
              </div>
              
              <div className = 'phone'>
                <span className = 'icon phone-icon'><img src = '../static/images/icons/contact_phone.svg' /></span>
                <span>{item.ngo.phone || 'NA'}</span>
              </div>
            </div>
          </div>

          <div className = {index == this.state.index ? 'ngo-demands' : 'ngo-demands hide'}>
            <ul>
              {
                item.demands.map((demand, i) => {
                  return(
                    <li key = {i}>{demand}</li>    
                  )
                })
              }
            </ul>
          </div>

        </div>
      )
    });

    return (
      <div className = 'search-results-container'>
        <div className = 'map-container'>
          <Map markers = {markerObjects} />
        </div>

        <div className = 'ngo-container'>
          {
            searchResult
          } 
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

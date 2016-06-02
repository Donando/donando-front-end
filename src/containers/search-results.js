// Library
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Map from 'components/map'

// Actions
import { load_data } from 'redux/reducers/filter-reducer'
import { set_notification_message } from 'redux/reducers/common-reducer'

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngo: []
    };
    this.redirect = this.redirect.bind(this);
    this.toggleNgo = this.toggleNgo.bind(this);
  }

  componentWillMount() {
    const { location, item } = this.props.location.query;
    this.redirect(location, item); 
  }

  componentWillReceiveProps(nextProps) {
    //FIX: need to write this logic better

    let newParams = nextProps.location.query;
    let oldParams = this.props.location.query;
    
    if(oldParams.location != newParams.location || oldParams.item != newParams.item)
      this.redirect(newParams.location, oldParams.item);
    
    let newDemandsLength = nextProps.demands && nextProps.demands.length;
    let oldDemandsLength = this.props.demands && this.props.demands.length;
    if(newDemandsLength != oldDemandsLength) {
      let result = newDemandsLength > 0 ? 'results' : 'result';
      this.props.dispatch(set_notification_message({message: newDemandsLength + ' NGO ' + result + ' found!'}));
    }
  }

  redirect(location, item) {
    this.props.dispatch(load_data(location, item));
  }

  toggleNgo(value) {
    let ngoTemp = this.state.ngo;
    ngoTemp[value] = !this.state.ngo[value];
    
    this.setState({ ngo: ngoTemp });
  }

  render() {
    let markerObjects = [];
    let searchResults = this.props.demands && this.props.demands.map((item, index) => {
      markerObjects.push(item.ngo);
      return (
        <div className = 'ngo' key = {index} onClick = {() => this.toggleNgo(index)}>
          
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

          <div className = {this.state.ngo[index] ? 'ngo-demands' : 'ngo-demands hide'}>
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
        <div className = 'ngo-container'>
          { searchResults } 
        </div>
        <div className = 'map-container'>
          <Map markers = {markerObjects} />
        </div>
      </div>
    )
  }
}
SearchResults.propTypes = {
  demands: React.PropTypes.array
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchResults)

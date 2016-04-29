import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainLayout from 'layouts/main'
import LocationSearch from 'containers/location-search'
import SearchResults from 'containers/search-results'

export default () => {
  return (
    <Route path='/' component={MainLayout}>
      <IndexRoute component={LocationSearch}></IndexRoute>
      <Route path='/search' component={LocationSearch}></Route>
      <Route path='/search/location' component={LocationSearch}></Route>
      <Route path='/search/location/:name' component={SearchResults}></Route>
    </Route>
  )
}

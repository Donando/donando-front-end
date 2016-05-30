import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainLayout from 'layouts/main'
import SearchResults from 'containers/search-results'
import LocationSearch from 'containers/location-search'

export default () => {
  return (
    <Route path='/' component={MainLayout}>
      <IndexRoute component={LocationSearch}></IndexRoute>
      <Route path='/location' component={LocationSearch}>
          <Route path='/search' component={SearchResults}>
              <Route path='?location=:location&item=:item' component={SearchResults}></Route>
          </Route>
      </Route>
    </Route>
  )
}

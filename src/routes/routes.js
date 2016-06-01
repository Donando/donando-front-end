import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainLayout from 'layouts/main'
import SearchResults from 'containers/search-results'

export default () => {
  return (
    <Route path='/' component={MainLayout}>
      { //FIX: we need an index route!
        <IndexRoute component={SearchResults}></IndexRoute>
      }
      <Route path='/search' component={SearchResults}>
          <Route path='?location=:location&item=:item' component={SearchResults}></Route>
      </Route>
    </Route>
  )
}

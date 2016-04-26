import React from 'react'
import { Route } from 'react-router'

import MainLayout from 'layouts/main'

export default () => {
  return (
    <Route path='/' component={MainLayout}>
    </Route>
  )
}

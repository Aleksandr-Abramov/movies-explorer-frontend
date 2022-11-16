import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
    // console.log(props.path);
  return (
    <Route exact path={props.path}>
      {props.loggedIn ? <Component {...props} /> : <Redirect to='/' />}
    </Route>
  )
}

export default ProtectedRoute; 
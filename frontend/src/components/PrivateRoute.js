import React from 'react';
import {Navigate} from 'react-router-dom';

const PrivateRoute=({children})=>{
  const token = localStorage.getItem('token');
  return token ? children :<Navigate to="/login"/>
}

export default PrivateRoute

//This Page checks if the user is loggedin or not
//If not then it redirects to /login authenricated
//a
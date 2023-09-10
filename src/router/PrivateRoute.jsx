import React from 'react'
import { homePagePath } from './path';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({element,inProp,navigateTo}) => {
   return (
       inProp ? <Navigate to={navigateTo || homePagePath} replace={true} /> : element
   )
}

export default PrivateRoute
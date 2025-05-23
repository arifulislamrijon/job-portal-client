import React, { useContext } from 'react';
import AuthContext from './AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    if(user){
        return children;
    }
    return (
       <Navigate to={'/signin'}></Navigate>
    );
};

export default PrivateRoute;
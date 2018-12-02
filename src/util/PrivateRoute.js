import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { handleStorage } from './localStorage';
import jwtDecode from 'jwt-decode';
import { USER_ADMIN } from '../config/config';


const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <Route render={(props) => {
            const token = handleStorage.getToken();
            const decodedData = jwtDecode(token);

            return decodedData.user.username == USER_ADMIN ?
                (<Component  {...rest} {...props} />)
                :
                (<Redirect to="/" />)
        }}
        />
    )
};


export default PrivateRoute
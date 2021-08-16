import React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PrivateRoutes = ({ component: Component, ...rest }) => {
    const token = useSelector((state => state.token));
    // const token =localStorage.getItem("jwt_token");
    const id = useSelector((state => state.userId));
    console.log("private token", token)
    console.log("private", id)
    return (
        <Route
            {...rest}
            render={props => (
                token ? (
                    <Component{...rest}{...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            )}
        />
    );
};


export default PrivateRoutes;

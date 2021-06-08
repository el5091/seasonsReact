import './Error.css';
import React from 'react';


const Error = props => {


    return (
        <div className="ui active dimmer">
            <i className="x-icon huge times icon"></i>
            <div className="message"> {props.message} </div>
        </div>
    );

};

export default Error;
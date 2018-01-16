import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            customState = 'if required';
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e){
        console.log(e);
    }

    render(){
        return(
            <div className = 'webPart webPart-small' onClick = {this.handleClick(e)} >Hi!</div>
        )
    }
};
CustomApp.propTypes={
    customData: PropTypes.array
};
export default CustomApp;
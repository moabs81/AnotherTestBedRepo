import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CardFrontBottom extends Component {
    render() {
        return (
            <div className='cardFrontBottom cardBottom-small'>
                <ul>
                    <li className='locName'>
                        <h3>{this.props.name}</h3>
                    </li>
                    <li className='locManager'>{this.props.manager}</li>
                    <li className='locPhone'>{this.props.primaryPhone}</li>
                </ul>
            </div>
        );
    };
};
CardFrontBottom.propTypes = {
    name: PropTypes.string,
    manager: PropTypes.string,
    primaryPhone: PropTypes.string
};
export default CardFrontBottom;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardBack extends Component {
    render() {
        const cardBackStyle = {
            backgroundColor: this.props.region
        };
        return (
            <div className='cardBack cardContainer-small' style={cardBackStyle}>
                <div className='cardBackContent'>
                    <ul>
                        <li>
                            <h3>{this.props.name}</h3>
                        </li>
                        <li>data placeholder</li>
                        <li>data placeholder</li>
                        <li>data placeholder</li>
                    </ul>
                </div>
            </div>
        );
    };
};
CardBack.propTypes = {
    name: PropTypes.string,
    region: PropTypes.string
};
export default CardBack;
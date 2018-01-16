import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CardFrontTop extends Component {
    render() {
        const cardFrontTopInlineStyle = {
            backgroundColor: this.props.region
        };
        return (
            <div className='cardFrontTop cardTop-small' style={cardFrontTopInlineStyle}>
                <div className='backgroundImg'></div>
                <div className='locID'>Dist {this.props.district}/Br {this.props.id}</div>
            </div>
        );
    };
};
CardFrontTop.propTypes = {
    district: PropTypes.string,
    id: PropTypes.string,
    region: PropTypes.string
};
export default CardFrontTop;
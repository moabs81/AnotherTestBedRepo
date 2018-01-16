import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardFrontTop from './CardFrontTop';
import CardFrontBottom from './CardFrontBottom';

class CardFront extends Component {
    render() {
        return (
            <div className='cardFront'>
                <CardFrontTop district={this.props.cardFrontData.district} id={this.props.cardFrontData.id} region={this.props.cardFrontData.region} />
                <CardFrontBottom name={this.props.cardFrontData.name} manager={this.props.cardFrontData.manager} primaryPhone={this.props.cardFrontData.primaryPhone} />
            </div>
        );
    };
};
CardFront.propTypes = {
    cardFrontData: PropTypes.object
};
export default CardFront;
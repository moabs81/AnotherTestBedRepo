import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardFront from './CardFront';
import CardBack from './CardBack';

class CardUIContainer extends Component {
    render() {
        return (
            <label>
                <input type='checkbox' defaultChecked={this.props.checkedState} onChange={this.props.handleClick} />
                <CardFront cardFrontData={this.props.cardUIContainerData} />
                <CardBack name={this.props.cardUIContainerData.name} region={this.props.cardUIContainerData.region} />
            </label>
        );
    };
};
CardUIContainer.propTypes = {
    cardUIContainerData: PropTypes.object
};
export default CardUIContainer;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardUIContainer from './CardUIContainer';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontOrBack: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.state.frontOrBack == false ? this.setState({ frontOrBack: true }) : this.setState({ frontOrBack: false });
    };

    render() {
        return (
            <div className='cardContainer cardContainer-small'>
                <CardUIContainer
                    cardUIContainerData={this.props.cardContainerData}
                    checkedState={this.state.frontOrBack}
                    handleClick={this.handleClick}
                />
            </div>
        );
    };
};
CardContainer.propTypes = {
    cardContainerData: PropTypes.object
};
export default CardContainer;
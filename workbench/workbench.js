import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import backgroundImage from './chalkboard.jpeg';
import './workbench.less';


//initial UI State
const initialState = {
    position: 200,
    isIE: false
};
//Action
const getScrollPos = function (position) {
    return { type: 'GET_POSITION', position };
};
const isBrowserIE = function (isIE) {
    return { type: 'GET_BROWSER_TYPE', isIE };
};
//Reducer
const scrollPosReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'GET_POSITION':
            return Object.assign(
                {},
                state,
                { position: action.position }
            );
        case 'GET_BROWSER_TYPE':
            return Object.assign(
                {},
                state,
                { isIE: action.isIE }
            );
        default:
            return state;
    };
    return state;
};

//Create Store
const store = createStore(scrollPosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Presentational Components
export const TopMenu = ({ position }) => (
    <div className={position < 140 ? 'titleContainer titleContainerSolid' : 'titleContainer'}>
        <div className='menu'>
            <div className='menuContent leftTitle'>
                <h2>Component Demo Workbench</h2>
            </div>
        </div>
    </div>
);
TopMenu.proptypes = {
    position: PropTypes.number.isRequired
};

export const BodyContent = ({ scrollEvent }) => (
    <div className='parallaxClass' id='allContentDiv' onScroll={scrollEvent}>
        <div className='parallax background'>
            <img id='backgroundImg' src={backgroundImage} />
        </div>
        <div className='parallax foreground'>
            <div className='contentContainer' id='contentContainer'></div>
        </div>
    </div>
);
BodyContent.propTypes = {
    scrollEvent: PropTypes.func.isRequired
};

export const WorkBenchComponent = () => (
    <div className='workBenchMain'>
        <AnchoringTopContent />
        <ScrollingBottomContent />
    </div>
);

//Connect Functions
const mapStateToProps = state => {
    return {
        position: scrollPosReducer(state.position, getScrollPos)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        scrollEvent: () => {
            dispatch(getScrollPos(document.getElementById('contentContainer').getBoundingClientRect().top));
        }
    };
};

//Container Components
export const AnchoringTopContent = connect(mapStateToProps, null)(TopMenu);
export const ScrollingBottomContent = connect(null, mapDispatchToProps)(BodyContent);

//Main
ReactDOM.render(
    <Provider store={store}>
        <WorkBenchComponent />
    </Provider>,
    document.getElementById('workBenchTarget')
);
import * as React from 'react';
import * as ReactDom from 'react-dom';

import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    onOff: false
};

const setOnOff = onOff => {
    return { type: 'SET_ON_OFF', onOff };
};

const switchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ON_OFF':
            return Object.assign(
                {},
                state,
                { onOff: action.onOff }
            );
        default:
            return state;
    };
};

const store = createStore(switchReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const SwitchVisualComponent = ({ onOrOff, onOffEvent }) => <label><input type='checkbox' /> hi! </label>

const SwitchComponent = () => {
    <div className='switchMain'>
        <SwitchContainerComponent />
    </div>
};

const mapSwitchStateToProps = state => {
    return {
        onOff: switchReducer(state.onOff, setOnOff)
    };
};
const mapSwitchDispatchToProps = dispatch => {
    return {
        onOffEvent: () => {
            dispatch(setOnOff());
        }
    };
};

const SwitchContainerComponent = connect(mapSwitchStateToProps, mapSwitchDispatchToProps)(SwitchVisualComponent);

ReactDom.render(
    <Provider store={store}>
        <SwitchComponent />
    </Provider>,
    document.getElementById('contentContainer')
);
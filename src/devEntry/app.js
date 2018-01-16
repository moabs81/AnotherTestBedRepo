//SET MODULE
import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './components/locationCard/jsModules/fetchData';

//IMPORT COMPONENT AND ANY REQUIRED COMPONENT DEPENDENCIES
import CustomApp from '../components/CustomApp/jsModules/CustomApp';

buildTableComponent(function (result) { //callback function returns the DOM target for your app   
    const targetDiv = result;
    const xHrReqParams = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        searchURI: '/officeCards100',
        paramsURI: '?_limit=10',
        method: 'GET'
    };
    fetchData.call(xHrReqParams, (function (result) {
        ReactDOM.render(
            <CustomApp customData={JSON.parse(result.target.responseText)} />, document.getElementById(targetDiv)
        );
    }));
});
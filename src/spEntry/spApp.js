import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from '../components/locationCard/jsModules/fetchData';
const generateColor = require('color-generator');

const spRestParams = {
    baseURI: 'base-uri',
    searchURI: '/_api/web/lists/getbytitle(<list_title>)/items',
    paramsURI: '',// '?$select=&$filter=&$top=&$orderby=',
    method: 'GET',
    headers: [{ 'header': 'Accept', 'value': 'application/json' }, { 'header': 'odata', 'value': 'verbose' }]
};

fetchData.call(spRestParams, function (result) {    
    {
        let tempArr;
        const returnObj = JSON.parse(result.target.responseText);
        Object.keys(returnObj).forEach(el => {
            el == 'value' ? tempArr = returnObj[el] : null;
        });        
    }
    ReactDOM.render(
        <CustomApp fakeData={arrBranches} />, document.getElementById('appContainer')
    );
});

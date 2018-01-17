import * as React from 'react';
import * as ReactDom from 'react-dom';

const SampleThing = () => <div className = 'sampleApp'>Hi, let's try breaking the cache, for real this time...</div>

ReactDom.render(
    <SampleThing />, document.getElementById('contentContainer')
);
//SET TEST MODULE HERE
import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

//IMPORT YOUR COMPONENT UNDER TEST AND ANY OF ITS COMPONENT DEPENDENCIES HERE
import CustomApp from '../src/components/CustomApp/jsModules/CustomApp';
//IMPORT YOUR TEST DATA HERE
import testData from './testData';

let testSubject = shallow(<CustomApp customData={testData} />);
describe('The Component Under Test',()=>{
    it('should do something, for sure',()=>{
        chai.expect(testSubject).TODOSOMETHING;
    });
});
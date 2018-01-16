//SET TEST MODULE HERE
import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import { TopMenu, BodyContent } from './workbench';

let testSubject = shallow(<TopMenu />);
describe('The <TopMenu /> Component',()=>{
    it('should do a thing',()=>{
        //chai.expect(testSubject)
    });
});
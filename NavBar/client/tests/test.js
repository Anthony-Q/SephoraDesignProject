import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import spy from 'sinon';
import spyChai from 'sinon-chai';
import mocha from 'mocha';
import NavDropDown from '../components/navDropDown.jsx';
const shallow = Enzyme.shallow;
Enzyme.configure({ adapter: new Adapter() });
describe('testing to see if test even work', () => {
  let wrapper;
  let toggleSpy;
  beforeEach(() => {
    toggleSpy = jest.fn().mockReturnValue(true);
    wrapper = shallow(<NavDropDown name="NEW" showDrop={toggleSpy} />);
  });

  it('testing the testing suite', () => {
    wrapper.find('div').simulate('onPointerEnter');
    expect(wrapper.state().whichTab).to.equal('NEW');
  });
});

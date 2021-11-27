import React from 'react';
import { shallow } from '../../../../config/enzyme';
import Header from '../index';

let wrapper;
const props ={
    title:"Landing Heading"
}
function renderShallow() {
  wrapper = shallow(<Header {...props}/>);
}


describe('Title Component', () => {

  it('#1: Snapshot testing', () => {
    renderShallow();
    expect(renderShallow).toMatchSnapshot();
  });
  it('#2: Check Title', () => {
    renderShallow();
    expect(wrapper.find('h1').text()).toBe("Landing Heading");
  });
});

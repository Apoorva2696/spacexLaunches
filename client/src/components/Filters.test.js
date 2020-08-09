import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Filters  from './Filters'
    
describe('Filters', () => {
  it('Filters renders without crashing given the required props', () => {
    
    const wrapper = shallow(<Filters filters={ {} } onClick={ () => {} } />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});

describe('Filters with filters', () => {
    it('filters renders with selected filters without crashing given the required props', () => {
      
      const wrapper = shallow(<Filters filters={ {launch_year: 2006} } onClick={ () => {} }/>)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });
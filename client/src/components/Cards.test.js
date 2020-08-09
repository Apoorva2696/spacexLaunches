import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Cards  from './Cards'
    
describe('Cards', () => {
  it('cards renders without crashing given the required props', () => {
    
    const wrapper = shallow(<Cards filters={ {} } />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});

describe('Cards with filters', () => {
    it('renders with filters without crashing given the required props', () => {
      
      const wrapper = shallow(<Cards filters={ {launch_year: 2006} } />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });
import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Cards  from './Cards'


describe('Cards', () => {
  it('cards renders without crashing given the required props', () => {
    
    const wrapper = mount(<Cards filters={ {} } />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});

describe('Cards with filters', () => {
    it('renders with filters without crashing given the required props', () => {
      
      const wrapper = mount(<Cards filters={ {launch_year: 2006} } />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });

  describe('Cards with all filters', () => {
    it('renders with all filters without crashing given the required props', () => {
      
      const wrapper = shallow(<Cards filters={ {launch_year: 2013,launch_success: false,land_success: false} } />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });

  // describe('Cards with all filters', () => {
  //   it('renders with all filters without crashing given the required props', () => {
      
  //     const wrapper = shallow(<Cards filters={ {launch_year: 2013,launch_success: false,land_success: false} } />)

  //     const form = component.find('input');
  //     // when
  //     form.props().onChange({target: {
  //       name: 'myName',
  //       value: 'myValue'
  //     }});
  //     expect(toJson(wrapper)).toMatchSnapshot()
  //   })
  // });


  
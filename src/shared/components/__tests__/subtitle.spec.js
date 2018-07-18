import React from 'react'
import {mount} from 'enzyme'

import {Subtitle} from '../subtitle'

describe('<Subtitle />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Subtitle>Github Repos</Subtitle>)
    expect(component).toMatchSnapshot()
  })
})

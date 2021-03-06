import {mount} from 'enzyme'
import React from 'react'

import {Header} from '../header'

describe('<Header />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Header title='Github Repos' url='http://repos/' />)
    expect(component).toMatchSnapshot()
  })
})

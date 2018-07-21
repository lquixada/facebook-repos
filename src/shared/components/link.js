import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import RepoIcon from 'react-octicons/lib/repo'

import {flex, imgUrl} from '../helpers'

export const Link = ({owner, repoName, contributorsCount, isLoading}) => (
  <Wrapper to={`/r/${owner}/${repoName}`}>
    <Icon />
    <Text>
      {repoName}
      {' '}
      (<Help title='number of contributors'>{contributorsCount}</Help>)
    </Text>
    {isLoading ? <img src={imgUrl('loading.gif')} /> : ''}
  </Wrapper>
)

Link.propTypes = {
  repoName: PropTypes.string,
  contributorsCount: PropTypes.number,
  isLoading: PropTypes.bool
}

const Wrapper = styled(NavLink)`
  ${flex.display()}
  ${flex.flow('row', 'nowrap')};
  text-decoration: none;
  padding: .8rem 1rem;
  color: #333;
  font-size: 1.2rem;
  border-left: .2rem solid transparent;

  &:hover {
    text-decoration: none;
    color: #327fc7;
    background-color: #fdfdfd;
  }

  &.active {
    color: #333;
    border-left: .2rem solid #d26911;
    background-color: #f4f4f4;
  }
`

const Icon = styled(RepoIcon)`
  margin-right: .5rem;
`

const Text = styled.span`
  ${flex('1')}
`

const Help = styled.span`
  color: #327fc7;
  font-size: 1.1rem;
  border-bottom: 1px dashed #327fc7;
  cursor: help;
`

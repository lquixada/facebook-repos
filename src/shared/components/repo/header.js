import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MarkIcon from 'react-octicons/lib/mark-github'

import {Subtitle} from '../subtitle'
import {flex} from '../../helpers'

export const Header = ({title, url}) => (
  <Wrapper>
    <Subtitle>{title}</Subtitle>

    <Link href={url} target='_blank'>
      <MarkIcon />
      <span>Github</span>
    </Link>
  </Wrapper>
)

Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

const Wrapper = styled.header`
  ${flex.display()}
  ${flex.justify()}
  ${flex.bottom()}
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ddd;
`

const Link = styled.a`
  ${flex.display()}
  ${flex.justify()}
  ${flex.middle()}
  margin-bottom: 1rem;
  color: #767676;
  font-size: 1.6rem;
  text-decoration: none;

  .octicon {
    fill: #767676;
    margin-right: .3rem;
  }
`

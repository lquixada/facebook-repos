import React from 'react';
import styled from 'styled-components';

export const Title = ({children}) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.h2`
  color: #3c4146;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -.1rem;
  line-height: 1.5;
  vertical-align: middle;
`;
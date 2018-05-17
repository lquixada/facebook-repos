import styled from 'styled-components';

import {flex} from '../helpers';

export const Main = styled.main`
  ${flex.display()};
  ${flex.flow('column', 'nowrap')};
  min-width: 35rem;
  height: 100%;
`;

export const Aside = styled.aside`
  margin-right: 3rem;
  width: 20rem;
  vertical-align: top;

  @media (max-width: 540px) {
    margin: 0;
    width: 100%;
    height: auto;
  }
`;

export const Content = styled.article`
  width: 55rem;
  color: #666;
`;

export const Container = styled.div`
  ${flex.display()}
  ${flex.justify()} 
  ${flex.top()}
  width: 100%;
`;

export const Header = styled.header`
  ${flex.display()}
  ${flex.left()}
  ${flex('none')}
  padding: 2rem;
  background-color: #3c4146;
`;

export const HeaderContainer = Container.extend`
  @media (max-width: 540px) {
    ${flex.wrap('wrap')}
  }
`;

export const Section = styled.section`
  ${flex.display()}
  ${flex.left()}
  ${flex('1 0 auto')}
  padding: 2rem;
`;

export const SectionContainer = Container.extend`
  ${flex.left()} 

  @media (max-width: 540px) {
    ${flex.left()}
    ${flex.dir('column')}
  }
`;

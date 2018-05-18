import React from 'react';
import {Route} from 'react-router';

import Repo from '../containers/repo';
import Menu from '../containers/menu';

import {Footer} from './footer';
import {Title} from './title';
import {Main, Aside, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';

export const App = () => (
  <Main>
    <Header>
      <HeaderContainer>
        <Title />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Aside>
          <Menu />
          <Footer />
        </Aside>
        <Content>
          <Route path="/r/:repo" component={Repo}/>
        </Content>
      </SectionContainer>
    </Section>
  </Main>
);

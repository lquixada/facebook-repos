import React from 'react';
import {Helmet} from 'react-helmet';

import Repo from '../containers/repo';
import Menu from '../containers/menu';
import {Footer} from './footer';
import {Title} from './title';
import {Main, Aside, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';

export const RepoPage = ({match}) => (
  <Main>
    <Helmet>
      <title>{match.params.repo} - Facebook Repos</title>
    </Helmet>

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
          <Repo match={match} />
        </Content>
      </SectionContainer>
    </Section>
  </Main>
);

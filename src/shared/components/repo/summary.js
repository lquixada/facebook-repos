import React from 'react';
import styled from 'styled-components';
import Octicon from 'react-component-octicons';

import {flex, issuesUrl, forksUrl, watchersUrl, stargazersUrl, addSeparator} from '../../helpers';

export const Summary = ({repo}) => (
  <List>
    <Item>
      <Link href={stargazersUrl(repo.name)}>
        <Octicon name="star"/>{addSeparator(repo.stargazers_count)} stars
      </Link>
    </Item>
    <Item>
      <Link href={watchersUrl(repo.name)}>
        <Octicon name="eye"/>{addSeparator(repo.subscribers_count)} watchers
      </Link>
    </Item>
    <Item>
      <Link href={forksUrl(repo.name)}>
        <Octicon name="repo-forked"/>{addSeparator(repo.forks_count)} forks
      </Link>
    </Item>
    <Item>
      <Link href={issuesUrl(repo.name)}>
        <Octicon name="issue-opened"/>{addSeparator(repo.open_issues_count)} issues
      </Link>
    </Item>
    {repo.license && <Item>
      <NoLink><Octicon name="law"/>{repo.license.name}</NoLink>
    </Item>}
  </List>
);

const List = styled.ul`
  ${flex.display()}
  ${flex.around()}
  ${flex.flow('row', 'wrap')};
  margin-top: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: .6rem;
`;

const Item = styled.li`
  ${flex('1 0 auto')}
  overflow: hidden;

  &:first-child {
    border-radius: .6rem 0 0 .6rem;
  }

  &:last-child {
    border-radius: 0 .6rem .6rem 0;
  }
`;

const BaseLink = `
  ${flex.display()}
  ${flex.center()}
  ${flex.middle()}
  text-decoration: none;
  padding: 1rem;
  color: #333;
  font-size: 1.2rem;
  border-left: .2rem solid transparent;

  svg {
    margin-right: .5rem;
  }
`;

const Link = styled('a').attrs({
  target: '_blank'
})`
  ${BaseLink}

  &:hover {
    text-decoration: none;
    color: #327fc7;
    background-color: #f8f8f8;
  }
`;

const NoLink = styled.span`
  ${BaseLink}
`;

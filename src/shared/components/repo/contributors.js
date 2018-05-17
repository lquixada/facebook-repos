import React from 'react';
import styled from 'styled-components';
import fetch from 'cross-fetch';

import {flex} from '../../helpers';

export class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    console.log(this.props.repo.name, 'componentDidMount');
    const url = `https://api.github.com/repos/facebook/${this.props.repo.name}/contributors?page=1&per_page=40`;
    fetch(url).then((res) => res.json()).then((contributors) => this.setState({contributors}));
  }

  componentDidUpdate() {
    console.log(this.props.repo.name, 'componentDidUpdate');
  }

  render() {
    return (
      <Wrapper>
        <Title>Contributors ({this.props.repo.contributors_count})</Title>

        <List>
          {this.state.contributors.map((contributor) =>
            <Item>
              <Link href={contributor.html_url}>
                <Image src={contributor.avatar_url} />
                <Text>{contributor.login}</Text>
              </Link>
            </Item>
          )}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h3`
  color: #767676;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.5;
`;

const List = styled.ul`
  ${flex.display()}
  ${flex.left()}
  ${flex.flow('row', 'wrap')};
  margin-top: 1rem;
`;

const Item = styled.li`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  margin-bottom: 1rem;
  width: 25%;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const Link = styled.a`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Image = styled.img`
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;
`;

const Text = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
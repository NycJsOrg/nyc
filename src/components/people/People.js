import React from 'react';
import shuffle from 'lodash/shuffle';
import styled from 'styled-components';

import PeopleGrid from './PeopleGrid';

const Container = styled.div`
  flex-direction: column;
`;

class People extends React.Component {

  state = {
    loading: true,
    people: []
  };

  componentDidMount() {
    const query = {
      'content_type': 'person'
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        people: shuffle(response.items),
        loading: false
      }));


    window.ga('set', 'page', '/people');
    window.ga('send', 'pageview');
  }

  render() {
    const { loading, people } = this.state;

    return (
      <Container>
        <h2>We all love (or hate) JavaScript</h2>

        { loading ? 'Loading' : <PeopleGrid people={people}/> }
      </Container>
    );
  }
}

export default People;
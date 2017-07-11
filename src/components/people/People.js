import React from 'react';
import shuffle from 'lodash/shuffle';
import styled from 'styled-components';

import PeopleGrid from './PeopleGrid';
import {getPeople} from '../../services/people';

const Container = styled.div`
  flex-direction: column;
`;

class People extends React.Component {

  state = {
    loading: true,
    people: []
  };

  componentDidMount() {
    getPeople()
      .then(items => this.setState({
        people: shuffle(items),
        loading: false
      }));


    global.ga('set', 'page', '/people');
    global.ga('send', 'pageview');
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
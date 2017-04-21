import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 4rem;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Person = styled.div`
  margin-right: 2rem;
`;

const PersonName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

class People extends React.Component {

  state = {
    loading: true,
    people: []
  };

  componentDidMount() {
    this.fetchPeople(this.props);
  }

  fetchPeople = () => {
    const query = {
      'content_type': 'person'
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        people: response.items,
        loading: false
      }));
  };

  renderPerson = (person) => {
    const { fullName, photo } = person.fields;
    const photoUrl = photo ? photo.fields.file.url : 'https://placebear.com/400/400';

    return (
      <Person key={person.sys.id}>
        <img src={photoUrl} alt={fullName} width="200rem" height="200rem"/>

        <PersonName>
          { fullName }
        </PersonName>
      </Person>
    );
  };

  peopleList = () => (
    <Grid>
      { this.state.people.map(this.renderPerson) }
    </Grid>
  );

  render() {
    const { loading, people } = this.state;
    console.log(people);

    return (
      <Container>
        <h2>NYC has some amazing front-end people!</h2>

        { loading && 'Loading' }
        { !loading && people.length ? this.peopleList() : 'No people found' }
      </Container>
    );
  }
}

export default People;
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Community = styled.div`
  width: 25%;
  padding-right: 3rem;
  margin-bottom: 4rem;
`;

const CommunityName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CommunityDescription = styled.div`
  margin-bottom: 1rem;
`;

const Links = styled.div`
  & > a {
    margin-right: 0.5rem;
  }
`;

class Communities extends React.Component {

  state = {
    loading: true,
    communities: []
  };

  componentDidMount() {
    this.fetchCommunities(this.props);
  }

  fetchCommunities = () => {
    const query = {
      'content_type': 'community'
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        communities: response.items,
        loading: false
      }));
  };

  renderCommunity = (community) => {
    const { communityName, description, website, slack } = community.fields;

    return (
      <Community key={ community.sys.id }>
        <CommunityName>
          <a href={ website } target="_blank">{ communityName }</a>
        </CommunityName>

        <CommunityDescription>
          { description }
        </CommunityDescription>

        <Links>
          <a href={ website } target="_blank">Join</a>
          { slack && <a href={ slack } target="_blank">Slack</a> }
        </Links>
      </Community>
    );
  };

  communitiesGrid = () => (
    <Grid>
      { this.state.communities.map(this.renderCommunity) }
    </Grid>
  );

  render() {
    const { loading, communities } = this.state;

    return (
      <Container>
        <main>
          <h2>NYC has some amazing front-end communities!</h2>

          { loading && 'Loading' }
          { !loading && communities.length ? this.communitiesGrid() : 'No communities found' }
        </main>
      </Container>
    );
  }
}

export default Communities;
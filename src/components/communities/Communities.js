import React from 'react';
import shuffle from 'lodash/shuffle';
import CommunityGrid from './CommunityGrid';

class Communities extends React.Component {

  state = {
    loading: true,
    communities: []
  };

  componentDidMount() {
    const query = {
      'content_type': 'community'
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        communities: shuffle(response.items),
        loading: false
      }));

    window.ga('set', 'page', '/communities');
    window.ga('send', 'pageview');
  }

  render() {
    const { loading, communities } = this.state;

    return (
      <div>
        <h2>Join the most active communities</h2>

        { loading ? 'Loading' : <CommunityGrid communities={communities}/> }
      </div>
    );
  }
}

export default Communities;
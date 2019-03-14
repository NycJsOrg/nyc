import React from 'react';
import shuffle from 'lodash/shuffle';
import CommunityGrid from './CommunityGrid';
import {getCommunities} from '../../services/communities';

class Communities extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    loading: true,
    communities: []
  };
}


  componentDidMount() {
    getCommunities()
      .then(items => this.setState({
        communities: shuffle(items),
        loading: false
      }));

    global.ga('set', 'page', '/communities');
    global.ga('send', 'pageview');
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
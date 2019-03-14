import React from 'react';
import TrackableLink from '../TrackableLink';
import styled from 'styled-components';

const JoinButton = styled(TrackableLink)`
  display: inline-block;
  background-color: #4990e2;
  color: white;
  border-radius: 10px;
  font-size: 2rem;
  padding: 20px 40px;
  text-decoration: none;
  
  &:hover, &:visited {
    background-color: #2464af;
    color: white;
  }
`;

class Chat extends React.Component {
  render() {
    return (
      <div>
        <h2>Where all the cool kids in town hang out</h2>

        <p>
          We chose discord over slack, because it has some advantages:
        </p>

        <ul>
          <li>It's free for organizers</li>
          <li>It doesn't have a history limitation of 10,000 messages</li>
          <li>You only need one account for all servers</li>
          <li>It has a dark color scheme</li>
        </ul>

        <br/><br/>

        <JoinButton href="https://nycjsorg.now.sh">
          Join NYC.JS.ORG on Slack
        </JoinButton>
      </div>
    );
  }
}

export default Chat;

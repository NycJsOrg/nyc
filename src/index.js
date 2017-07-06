import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

import TrackableLink from './components/TrackableLink';
import Companies from './components/companies/Companies';
import Communities from './components/communities/Communities';
import Events from './components/events/Events';
import People from './components/people/People';
import Chat from './components/chat/Chat';

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Header = styled.div`
  padding: 4rem 4rem 1rem 4rem;
`;

const MainNavigation = styled.ul`
  padding: 0;
  
  & > li {
    list-style: none;
    display: inline-block;
    font-size: 1.2rem;
    margin-right: 0.8rem;
  }
`;

const SecondaryNavigation = styled(MainNavigation)`
  & > li {
    font-size: 1rem;
  }
`;

const MainTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  padding: 1rem 4rem 4rem 4rem;
`;

const Stretch = styled.div`
  flex: 1;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: 1rem;
`;

const activeLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  cursor: 'default',
  fontWeight: 'bold'
};

ReactDOM.render(
  <Router>
    <App>
      <Header>
        <MainTitle>
          JavaScript in New York City
        </MainTitle>

        <MainNavigation>
          <li><NavLink to="/communities" activeStyle={activeLinkStyle}>Communities</NavLink></li>
          <li><NavLink to="/events" activeStyle={activeLinkStyle}>Events</NavLink></li>
          <li><NavLink to="/companies" activeStyle={activeLinkStyle}>Companies</NavLink></li>
          <li><NavLink to="/people" activeStyle={activeLinkStyle}>People</NavLink></li>
          <li><NavLink to="/chat" activeStyle={activeLinkStyle}>Chat</NavLink></li>
        </MainNavigation>

        <Route path="/companies" render={() => (
          <SecondaryNavigation>
            <li><NavLink to="/companies/React" activeStyle={activeLinkStyle}>React</NavLink></li>
            <li><NavLink to="/companies/React Native" activeStyle={activeLinkStyle}>React Native</NavLink></li>
            <li><NavLink to="/companies/Angular" activeStyle={activeLinkStyle}>Angular</NavLink></li>
          </SecondaryNavigation>
        )}/>
      </Header>

      <Stretch>
        <Route exact path="/communities" component={Communities}/>
        <Route exact path="/events" component={Events}/>
        <Route exact path="/people" component={People}/>
        <Route exact path="/chat" component={Chat}/>
        <Route path="/companies/:framework" component={Companies}/>
      </Stretch>

      <Footer>
        Created by <TrackableLink href="https://twitter.com/ilyagelman" target="_blank">@ilyagelman</TrackableLink>
        {', '}
        <TrackableLink href="https://twitter.com/kirjs" target="_blank">@kirjs</TrackableLink>
        {' and '}
        <TrackableLink href="https://github.com/maniator" target="_blank">@maniator</TrackableLink>
      </Footer>

      <Route path="/companies" render={() => (
        <Redirect to="/companies/React"/>
      )}/>
    </App>
  </Router>,
  document.getElementById('root')
);

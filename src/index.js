import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import styled from 'styled-components';
import { createClient } from 'contentful';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Companies from './components/companies/Companies';
import AddCompany from './components/companies/AddCompany';
import Communities from './components/communities/Communities';
import Events from './components/events/Events';
import People from './components/people/People';

const Header = styled.div`
  padding: 4rem 4rem 1rem 4rem;
  
  & > ul {
    padding: 0;
  }
  
  & > ul > li {
    list-style: none;
    display: inline-block;
    font-size: 1.2rem;
    margin-right: 0.8rem;
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

const AppContainer = styled.div`
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Stretch = styled.div`
  flex: 1;
  margin-bottom: 3rem;
`;

window.client = createClient({
  space: 'j1vuikz5psjc',
  accessToken: '8c1c2d8a076eaef423845f207d8da00b5e0544bf1777e0f3b7335a768226238b'
});

const activeLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  cursor: 'default',
  fontWeight: 'bold'
};

ReactDOM.render(
  <AppContainer>
    <Router>
      <Content>
        <Header>
          <MainTitle>
            JavaScript in New York City
          </MainTitle>

          <ul>
            <li><NavLink to="/communities" activeStyle={activeLinkStyle}>Communities</NavLink></li>
            <li><NavLink to="/events" activeStyle={activeLinkStyle}>Events</NavLink></li>
            <li><NavLink to="/companies/React" activeStyle={activeLinkStyle}>Companies</NavLink></li>
            <li><NavLink to="/people" activeStyle={activeLinkStyle}>People</NavLink></li>
          </ul>
        </Header>

        <Stretch>
          <Route exact path="/communities" component={Communities}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/people" component={People}/>

          <Route exact path="/companies/new" component={AddCompany}/>
          <Route exact path="/companies/:framework" component={Companies}/>
        </Stretch>

        <Footer>
          Created by <a href="https://twitter.com/ilyagelman" target="_blank">@ilyagelman</a>
          {' and '}
          <a href="https://twitter.com/kirjs" target="_blank">@kirjs</a>
        </Footer>
      </Content>
    </Router>
  </AppContainer>,
  document.getElementById('root')
);

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
  position: sticky;
  top: 3rem;
  width: 24rem;
  margin-left: 8rem;
`;

const SidebarBlock = styled.div`
  margin-bottom: 2rem;
  
  & > a {
    display: block;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const FHTBanner = styled(SidebarBlock)`
  background-color: #2c2c2c;
  color: white;
  border-radius: 6px;
  padding: 1.6rem 1.2rem;
  margin-left: -1.2rem;
  
  & > a {
    color: white;
    font-size: 1.2rem;
  } 
`;

const BannerText = styled.div`
  margin: 1.6rem 0 1.2rem 0;
`;

const CompaniesSidebar = () => (
  <Sidebar>
    <SidebarBlock>
      Don’t see your company in the list?
      <Link to="/companies/new">Add a company</Link>
    </SidebarBlock>

    <FHTBanner>
      <a href="http://500tech.com" target="_blank">
        <img src="/500-logo.png" alt="500Tech" width={240}/>
      </a>

      <BannerText>
        Need on-site development, consulting, or training?
      </BannerText>

      <a href="mailto:nyc@500tech.com">Get in touch</a>
    </FHTBanner>

    <SidebarBlock>
      Looking for job?
      <a href="">Send your resume to everyone</a>
    </SidebarBlock>

    <SidebarBlock>
      Have open positions?
      <a href="">Advertise them (for free)</a>
    </SidebarBlock>
  </Sidebar>
);

export default CompaniesSidebar;
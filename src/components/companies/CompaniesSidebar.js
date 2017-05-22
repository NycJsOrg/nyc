import React from 'react';
import styled from 'styled-components';

import TrackableLink from '../TrackableLink';

import { NEED_HELP_SUBJECT, NEED_HELP_BODY } from '../../constants/templates';

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
    font-weight: 400;
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
      <TrackableLink href="https://docs.google.com/forms/d/e/1FAIpQLScixexO3Yves4FYrHwfFcu4D6iCC8eghLofBZGiu0lTxrYydA/viewform" target="_blank">
        Add a company
      </TrackableLink>
    </SidebarBlock>

    <FHTBanner>
      <TrackableLink href="http://500tech.com" target="_blank">
        <img src="/500-logo.png" alt="500Tech" width="100%"/>
      </TrackableLink>

      <BannerText>
        Need on-site development, consulting, or training?
      </BannerText>

      <TrackableLink href={`mailto:nyc@500tech.com?subject=${NEED_HELP_SUBJECT}&body=${NEED_HELP_BODY}`}>Get in touch</TrackableLink>
    </FHTBanner>

    <SidebarBlock>
      Looking for job?
      <TrackableLink href="https://docs.google.com/forms/d/e/1FAIpQLSfyOHc8NZiBRG6-ug3FpdjXC8rsxrPOSPwCCEhdYsDWTcKiQw/viewform" target="_blank">
        Send your resume
      </TrackableLink>
    </SidebarBlock>

    <SidebarBlock>
      Hiring developers?
      <TrackableLink href="https://docs.google.com/forms/d/e/1FAIpQLSedcW89tu4BHvv8oOMta1_-zb0ep_pV_1PCQ8BoCigjEngLxw/viewform" target="_blank">
        Advertise open positions for free
      </TrackableLink>
    </SidebarBlock>
  </Sidebar>
);

export default CompaniesSidebar;
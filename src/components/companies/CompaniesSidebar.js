import React from 'react';
import styled from 'styled-components';

import {
  ADD_COMPANY_SUBJECT,
  ADD_COMPANY_BODY,
  APPLY_FOR_JOB_SUBJECT,
  APPLY_FOR_JOB_BODY,
  HIRE_DEVELOPERS_SUBJECT,
  HIRE_DEVELOPERS_BODY,
  NEED_HELP_SUBJECT,
  NEED_HELP_BODY
} from '../../constants/templates';

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
      <a href={`mailto:ilya@500tech.com?cc=kirjs@google.com&subject=${ADD_COMPANY_SUBJECT}&body=${ADD_COMPANY_BODY}`}>Add a company</a>
    </SidebarBlock>

    <FHTBanner>
      <a href="http://500tech.com" target="_blank">
        <img src="/500-logo.png" alt="500Tech" width="100%"/>
      </a>

      <BannerText>
        Need on-site development, consulting, or training?
      </BannerText>

      <a href={`mailto:nyc@500tech.com?subject=${NEED_HELP_SUBJECT}&body=${NEED_HELP_BODY}`}>Get in touch</a>
    </FHTBanner>

    <SidebarBlock>
      Looking for job?
      <a href={`mailto:ilya@500tech.com?cc=kirjs@google.com&subject=${APPLY_FOR_JOB_SUBJECT}&body=${APPLY_FOR_JOB_BODY}`}>Send your resume</a>
    </SidebarBlock>

    <SidebarBlock>
      Hiring developers?
      <a href={`mailto:ilya@500tech.com?cc=kirjs@google.com&subject=${HIRE_DEVELOPERS_SUBJECT}&body=${HIRE_DEVELOPERS_BODY}`}>Advertise open positions for free</a>
    </SidebarBlock>
  </Sidebar>
);

export default CompaniesSidebar;
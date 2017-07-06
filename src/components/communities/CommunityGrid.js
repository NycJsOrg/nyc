import React from 'react';
import styled from 'styled-components';

import TrackableLink from '../TrackableLink';

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

const Name = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const SlackLogo = styled.img`
  width: 1rem;
  margin-right: 0.2rem;
  vertical-align: middle;
`;

const Links = styled.div`
  & > a {
    margin-right: 0.7rem;
  }
`;

const ComunityGrid = ({ communities }) => {
  if (!communities.length) {
    return <div>No communities found</div>;
  }

  const renderCommunity = (community) => {
    const { communityName, description, website, slack } = community.fields;

    return (
      <Community key={ community.id }>
        <Name>
          <TrackableLink href={website} target="_blank">{ communityName }</TrackableLink>
        </Name>

        <Description>
          { description }
        </Description>

        <Links>
          <TrackableLink href={website} target="_blank">Join</TrackableLink>
          {
            slack &&
            <TrackableLink href={slack} target="_blank">
              <SlackLogo src="/slack.svg" alt="Slack Logo"/>
              Slack
            </TrackableLink>
          }
        </Links>
      </Community>
    );
  };

  return (
    <Grid>
      { communities.map(renderCommunity) }
    </Grid>
  );
};

export default ComunityGrid;
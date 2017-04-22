import React from 'react';
import styled from 'styled-components';

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

const Links = styled.div`
  & > a {
    margin-right: 0.5rem;
  }
`;

const ComunityGrid = ({ communities }) => {
  if (!communities.length) {
    return <div>No communities found</div>;
  }

  const renderCommunity = (community) => {
    const { communityName, description, website, slack } = community.fields;

    return (
      <Community key={ community.sys.id }>
        <Name>
          <a href={website} target="_blank">{ communityName }</a>
        </Name>

        <Description>
          { description }
        </Description>

        <Links>
          <a href={website} target="_blank">Join</a>
          { slack && <a href={slack} target="_blank">Slack</a> }
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
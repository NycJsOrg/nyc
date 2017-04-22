import React from 'react';
import styled from 'styled-components';
import { ADD_PROFILE_SUBJECT, ADD_PROFILE_BODY } from '../../constants/templates';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Person = styled.div`
  margin-right: 2rem;
`;

const PersonName = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.6rem;
`;

const SocialLink = styled.div`
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`;

const SocialIcon = styled.img`
  height: 0.8rem;
  width: 0.8rem;
  margin-right: 0.5rem;
`;

const PeopleGrid = ({ people }) => {
  if (!people.length) {
    return <div>No people found</div>;
  }

  const renderPerson = (person) => {
    const { fullName, photo, twitter, github, linkedIn } = person.fields;
    const photoUrl = photo ? photo.fields.file.url : 'https://placebear.com/400/400';

    return (
      <Person key={person.sys.id}>
        <img src={photoUrl} alt={fullName} width="200rem" height="200rem"/>

        <PersonName>
          { linkedIn ? (
              <div>
                <SocialIcon src="/linkedin.svg" alt="LinkedIn logo"/>
                <a href={linkedIn}>{ fullName }</a>
              </div>
            ) : fullName }
        </PersonName>

        {
          twitter &&
          <SocialLink>
            <SocialIcon src="/twitter.svg" alt="Twitter logo"/>
            <a href={`https://twitter.com/${twitter}`}>@{ twitter }</a>
          </SocialLink>
        }

        {
          github &&
          <SocialLink>
            <SocialIcon src="/github.svg" alt="GitHub logo"/>
            <a href={`https://github.com/${github}`}>{ github }</a>
          </SocialLink>
        }
      </Person>
    );
  };

  return (
    <Grid>
      <Person>
        <a href={`mailto:ilya@500tech.com?cc=kirjs@google.com&subject=${ADD_PROFILE_SUBJECT}&body=${ADD_PROFILE_BODY}`}>
          <img src="/passport.png" alt="Add profile" width="200rem" height="200rem" style={{ border: '1px solid #f1f1f1' }}/>

          <PersonName>
            Add your profile
          </PersonName>
        </a>
      </Person>

      { people.map(renderPerson) }
    </Grid>
  );
};

export default PeopleGrid;
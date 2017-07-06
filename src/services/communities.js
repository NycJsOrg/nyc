import {queryContentful} from './contentful';

export const getCommunities = () => {
  return queryContentful({
    'content_type': 'community'
  }).then(({ items }) => items);
};

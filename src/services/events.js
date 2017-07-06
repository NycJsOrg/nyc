import {queryContentful} from './contentful';

export const getEvents = () => {
  return queryContentful({
    'content_type': 'event'
  }).then(({ items }) => items);
};

import {queryContentful} from './contentful';

export const getPeople = () => {
  return queryContentful({
    'content_type': 'person'
  }).then(({ items }) => items);
};

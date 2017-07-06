import sortBy from 'lodash/sortBy';
import {queryContentful} from './contentful';

export const getCompaniesByFramework = (framework) => {
  return queryContentful({
    'content_type': 'company',
    'fields.frameworks[in]': framework
  }).then(({ items }) => sortBy(items, 'fields.name'));
};

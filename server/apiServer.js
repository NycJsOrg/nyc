import express from 'express';
import {queryContentful} from './contentful';
import sortBy from 'lodash/sortBy';

const queryForContent = (res, query) => {
  return queryContentful(query).then(
    ({ items }) => items
  ).then(
    (data) => res.json(data),
    (data) => res.status(400).json([])
  ).catch((data) => res.status(401).json(data));
};

export const apiServer = () => {
  const router = express.Router();
  
  router.get('/communities', (req, res) => {
    return queryForContent(res, {
      'content_type': 'community'
    });
  });
  
  router.get('/companies', (req, res) => {
    return queryForContent(res, {
      'content_type': 'company',
      'fields.frameworks[in]': (res.params || {}).framework,
    }).then(
      (items) => sortBy(items, 'fields.name')
    );
  });
  
  router.get('/events', (req, res) => {
    return queryForContent(res, {
      'content_type': 'event',
    });
  });
  
  router.get('/people', (req, res) => {
    return queryForContent(res, {
      'content_type': 'person',
    });
  });
  
  return router;
};

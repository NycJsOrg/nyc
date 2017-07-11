import { createClient } from 'contentful';

// @todo move the keys etc to env variables
const client = createClient({
  space: 'j1vuikz5psjc',
  accessToken: '8c1c2d8a076eaef423845f207d8da00b5e0544bf1777e0f3b7335a768226238b'
});

// @todo update this function to query the express server when off of contentful
export const queryContentful = (query) => {
  return client.getEntries(query);
};

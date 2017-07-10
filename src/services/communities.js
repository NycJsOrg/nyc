export const getCommunities = () => {
  return fetch(`${global.apiServiceURL}/api/communities`).then(response => response.json());
};

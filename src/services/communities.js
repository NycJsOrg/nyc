export const getCommunities = () => {
  return fetch('/api/communities').then(response => response.json());
};

export const getPeople = () => {
  return fetch(`${global.apiServiceURL}/api/people`)
    .then(response => response.json());
};

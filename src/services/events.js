export const getEvents = () => {
  return fetch(`${global.apiServiceURL}/api/events`)
    .then(response => response.json());
};

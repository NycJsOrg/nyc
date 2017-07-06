export const getEvents = () => {
  return fetch('/api/events')
    .then(response => response.json());
};

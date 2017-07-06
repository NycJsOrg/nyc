export const getPeople = () => {
  return fetch('/api/people')
    .then(response => response.json());
};

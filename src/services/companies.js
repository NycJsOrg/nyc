export const getCompaniesByFramework = (framework) => {
  return fetch(`/api/companies?framework=${framework}`)
    .then(response => response.json());
};

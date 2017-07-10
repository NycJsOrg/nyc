export const getCompaniesByFramework = (framework) => {
  return fetch(`${global.apiServiceURL}/api/companies?framework=${framework}`)
    .then(response => response.json());
};

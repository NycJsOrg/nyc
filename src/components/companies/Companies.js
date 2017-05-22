import React  from 'react';
import sortBy from 'lodash/sortBy';
import styled from 'styled-components';

import CompanyTable from './CompanyTable';
import CompaniesSidebar from './CompaniesSidebar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Companies extends React.Component {

  state = {
    loading: true,
    companies: []
  };

  componentDidMount() {
    this.fetchCompanies(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchCompanies(newProps);
  }

  fetchCompanies = (props) => {
    const query = {
      'content_type': 'company',
      'fields.frameworks[in]': props.match.params.framework
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        companies: sortBy(response.items, 'fields.name'),
        loading: false
      }));

    window.ga('set', 'page', '/companies/' + props.match.params.framework);
    window.ga('send', 'pageview');
  };

  render() {
    const { loading, companies } = this.state;

    return (
      <Container>
        <div>
          <h2>{ loading ? 'Loading' : companies.length } companies use { this.props.match.params.framework }</h2>

          { loading ? 'Loading' : <CompanyTable companies={companies}/> }
        </div>

        <CompaniesSidebar/>
      </Container>
    );
  }
}

export default Companies;

import React  from 'react';
import styled from 'styled-components';

import CompanyTable from './CompanyTable';
import CompaniesSidebar from './CompaniesSidebar';
import {getCompaniesByFramework} from '../../services/companies';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class Companies extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    loading: true,
    companies: []
  };
  
  this.fetchCompanies = (props) => {
    getCompaniesByFramework(props.match.params.framework)
      .then(items => this.setState({
        companies: items,
        loading: false
      }));
  
    global.ga('set', 'page', '/companies/' + props.match.params.framework);
    global.ga('send', 'pageview');
  };
}


  componentDidMount() {
    this.fetchCompanies(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchCompanies(newProps);
  }


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

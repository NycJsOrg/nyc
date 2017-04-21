import React  from 'react';
import styled from 'styled-components';

import CompaniesSidebar from './CompaniesSidebar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  margin-top: 1rem;
`;

const HiringLabel = styled.div`
  &:after {
    content: 'Hiring';
    text-transform: uppercase;
    position: absolute;
    left: calc(100% + 0.5rem);
    font-weight: bold;
    color: orange;
    height: 1.2rem;
    font-size: 0.8rem;
  }
`;

const TableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  font-weight: bold;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const TableRow = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1.5rem;
`;

const Cell = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  padding-right: ${props => !!props.last ? '0' : '1rem'};
  text-align: ${props => props.align || 'left'};
  ${props => props.width ? 'width: ' + props.width : 'flex: 1'};
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
        companies: response.items,
        loading: false
      }));
  };

  renderCompanies = (company) => {
    const { name, description, size, website, isHiring } = company.fields;

    return (
      <TableRow key={ company.sys.id }>
        <Cell width="10rem">
          <img src={ website + '/favicon.ico' } alt="Favicon" width="16" height="16" style={{ position: 'absolute', left: '-26px' }}/>
          <a href={ website }>{ name }</a>
        </Cell>

        <Cell>{ description }</Cell>
        <Cell last width="4rem" align="right">{ size }</Cell>

        { isHiring && <HiringLabel/> }
      </TableRow>
    );
  };

  companiesTable = () => (
    <div>
      <TableHeader>
        <Cell width="10rem">Company</Cell>
        <Cell>Description</Cell>
        <Cell last width="4rem">Size</Cell>
      </TableHeader>

      { this.state.companies.map(this.renderCompanies) }
    </div>
  );

  render() {
    const { loading, companies } = this.state;

    return (
      <Container>
        <main>
          <h2>{ loading ? 'Loading' : companies.length } companies use { this.props.match.params.framework }</h2>

          { loading && 'Loading' }
          { !loading && companies.length ? this.companiesTable() : 'No companies found' }
        </main>

        <CompaniesSidebar/>
      </Container>
    );
  }
}

export default Companies;

import React from 'react';
import styled from 'styled-components';

const HiringLabel = styled.div`
  &:after {
    content: 'Hiring';
    text-transform: uppercase;
    position: absolute;
    left: calc(100% + 0.5rem);
    font-weight: 400;
    color: orange;
    height: 1.2rem;
    font-size: 0.8rem;
  }
`;

const TableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  font-weight: 400;
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

const CompanyTable = ({ companies }) => {
  if (!companies.length) {
    return <div>No companies found</div>;
  }

  const renderCompanies = (company) => {
    const { name, description, size, website, isHiring } = company.fields;

    return (
      <TableRow key={ company.sys.id }>
        <Cell width="10rem">
          <img src={website + '/favicon.ico'} alt="Favicon" width="16" height="16" style={{ position: 'absolute', left: '-26px' }}/>
          <a href={website}>{ name }</a>
        </Cell>

        <Cell>{ description }</Cell>
        <Cell last width="4rem" align="right">{ size }</Cell>

        { isHiring && <HiringLabel/> }
      </TableRow>
    );
  };

  return (
    <div>
      <TableHeader>
        <Cell width="10rem">Company</Cell>
        <Cell>Description</Cell>
        <Cell last width="4rem">Size</Cell>
      </TableHeader>

      { companies.map(renderCompanies) }
    </div>
  );
};

export default CompanyTable;
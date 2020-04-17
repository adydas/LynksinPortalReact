import React from 'react';
import Table from '../Table';
import { get } from 'lodash-es';

import './style.scss';

const CustomTable = ({ title, data }) => {
  const headerStyle = {
    fontSize: '14px',
    color: 'black',
    fontWeight: '900',
    textTransform: 'uppercase',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const cellStyle = {
    fontSize: '14px',
    color: 'black',
    fontWeight: '900',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const leaderStyle = {
    justifyContent: 'flex-start',
    paddingLeft: '25px',
    color: '#003c7a'
  }

  return (
    <div className="custom-table">
      <h1>{title}</h1>
      <Table
        columns={[
          {
            Header: 'RANK',
            id: 'rank',
            accessor: 'rank',
            filterable: false,
            headerStyle,
            style: cellStyle,
            width: 90,
          },
          {
            Header: 'LEADER',
            id: 'leader',
            accessor: 'leader',
            filterable: false,
            headerStyle,
            style: { ...cellStyle, ...leaderStyle },
          },
          {
            Header: 'EVENTS',
            id: 'events',
            accessor: 'events',
            filterable: false,
            headerStyle,
            style: cellStyle,
            width: 115,
          },
          {
            Header: 'POINTS',
            id: 'points',
            accessor: 'points',
            filterable: false,
            headerStyle,
            style: cellStyle,
            width: 120,
          },
        ]}
        manual // Forces table not to paginate or sort automatically, so we can handle it server-side
        data={data.slice(1)}
        className="-striped -highlight mb-10"
        showPagination={false}
      />
    </div>
  )
}

export default CustomTable;
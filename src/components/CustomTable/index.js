import React, { useState } from 'react';
import Table from '../Table';
import { get } from 'lodash-es';

import StateModal from '../StateModal';
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

  const [seeAll, setSeeAll] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProps, setModalProps] = useState(null)
  const MIN_RECORD_COUNT = 5

  const show = () => {
    setSeeAll(!seeAll)
  }

  const showModal = (event, data) => {
    console.log('#$%: event = ', event)
    setModalProps(data)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
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
            Footer: () => 'AVERAGE'
          },
          {
            Header: 'LEADER',
            id: 'leader',
            accessor: d => (
              <div className="custom-table-leader" onClick={event => showModal(event, d)}>
                {get(d, 'leader')}
              </div>
            ),
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
            Footer: info => {
              const total = React.useMemo(
                () => info.data.reduce((sum, row) => row.events + sum, 0),
                [info.data]
              )
              return <>{Math.floor(total / info.data.length)}</>
            }
          },
          {
            Header: 'POINTS',
            id: 'points',
            accessor: d => new Intl.NumberFormat('ja-JP').format(get(d, 'points')),
            filterable: false,
            headerStyle,
            style: cellStyle,
            width: 120,
            Footer: info => {
              const total = React.useMemo(
                () => info.data.reduce((sum, row) => parseInt(row.points.replace(',', '')) + sum, 0),
                [info.data]
              )
              return <>{(total / info.data.length).toFixed(3)}</>
            }
          },
        ]}
        manual // Forces table not to paginate or sort automatically, so we can handle it server-side
        data={seeAll ? data.slice(1) : data.slice(1, MIN_RECORD_COUNT + 1)}
        className="-striped -highlight mb-10"
        showPagination={false}
      />
      <div className="d-flex justify-content-end mt-4">
        <button className="custom-table-seeall btn btn-link" type="button" onClick={() => show()}>
          <i className="fa fa-chevron-right"></i>
          {seeAll ? 'SEE LESS' : 'SEE ALL'}
        </button>
      </div>
      <StateModal open={modalOpen} data={modalProps} handleClose={closeModal}/>
    </div>
  )
}

export default CustomTable;
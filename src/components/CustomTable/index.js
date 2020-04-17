import React from 'react';

import './style.scss';

const CustomTable = ({ title, data }) => {
  return (
    <div className="custom-table">
      <h1>{title}</h1>
      <table className="custom-table-table">
        <tr className="custom-table-table-header">
          {Object.keys(data[0]).map(k =>
            <th>{k}</th>
          )}
        </tr>
        {
          data.slice(1).map((item, index) => (
            <tr className="custom-table-table-data" key={index}>
              {
                Object.keys(item).map((k, id) => (
                  <td key={id} className={`custom-table-table-data-${id}`}>{item[k]}</td>
                ))
              }
            </tr>
          ))
        }
        <tr>
          <td colspan="2">AVERAGE</td>
          <td>9</td>
          <td>12341234</td>
        </tr>
      </table>
    </div>
  )
}

export default CustomTable;
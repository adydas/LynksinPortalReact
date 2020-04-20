import React from 'react';

import './style.scss';

const MemberDetail = ({ data }) => {
  const { professionalName, general, professional } = data;

  return (
    <div className="member-detail">
      <div className="member-detail-header">
        <div className="member-detail-header-img">
          <img src={data.img} alt="member-img" />
        </div>
        <span className="member-detail-header-name">{professionalName}</span>
      </div>
      {
        general.map(({ label, value, icon }, index) =>
          <div className="member-detail-info" key={index}>
            <div className="member-detail-info-left">
              <i className={icon} aria-hidden="true"></i>
            </div>
            <div className="member-detail-info-right">
              <h5>{label}</h5>
              <h6>{value}</h6>
            </div>
          </div>
        )
      }
      <div className="member-detail-divider">
        <i className="fa fa-arrows-v" aria-hidden="true"></i>
        <span>Professional info</span>
      </div>
      {
        professional.map(({ label, value, icon }, index) =>
          <div className="member-detail-info" key={index}>
            <div className="member-detail-info-left">
            </div>
            <div className="member-detail-info-right ml-0">
              <h5>{label}</h5>
              <h6>{value}</h6>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MemberDetail;
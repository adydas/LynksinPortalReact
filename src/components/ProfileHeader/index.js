import React from 'react';

import './style.scss';
import Avatar from '../../images/img-portrait.png';

const ProfileHeader = ({ data }) => {
  return (
    <div className="profile-header">
      <div className="profile-header-avatar">
        <img src={Avatar} alt="profile image" />
      </div>
      <div className="profile-header-desc">
        <h1 className="profile-header-desc-name">{data.name}</h1>
        <h2 className="profile-header-desc-location">{data.location}</h2>
        <div className="row profile-header-row">
          <div className="col-sm-6 col-md-3">
            <h5>{data.age}</h5>
            <h6>AGE</h6>
          </div>
          <div className="col-sm-6 col-md-9">
            <h5>{data.college}</h5>
            <h6>COLLEGE</h6>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>{data.matchesPlayed}</h5>
            <h6>MATCHES PLAYED</h6>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>{data.index}</h5>
            <h6>INDEX</h6>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>{data.matchesWon}</h5>
            <h6>MATCHES WON</h6>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>{data.matchesLost}</h5>
            <h6>MATCHES LOST</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;
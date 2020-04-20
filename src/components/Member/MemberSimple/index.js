import React from 'react';

import './style.scss';

const MemberSimple = ({ data }) => {

  const { img, name, handicapIndex, general } = data;
  let location = general.find(x => x.label === 'Location')
  location = location ? location.value : 'N/A';

  return (
    <div className="member-simple">
      <div className="member-simple-left">
        <div className="member-simple-left-container">
          <img className="member-simple-left-img" src={img} alt="member-img" />
        </div>
      </div>
      <div className="member-simple-right">
        <h4>{name}</h4>
        <div><i className="fa fa-map-marker" aria-hidden="true"></i><span>{location}</span></div>
          <h6>Handicap Index <span>{handicapIndex}</span></h6>
      </div>
      </div>
  )
}

export default MemberSimple;
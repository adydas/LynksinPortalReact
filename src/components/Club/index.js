import React from 'react';

import './style.scss';

const Club = ({ className, img, name, location }) => {
  return (
    <div className={`club ${className}`}>
      <div className='club-image'>
        <img src={img} alt='club-img' />
      </div>
      <div className='club-content'>
        <div className='club-content-left'>
          <h5 className='club-content-left-name'>{name}</h5>
          <h5 className='club-content-left-location'>{location}</h5>
        </div>
        <div className='club-content-right'>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Club;
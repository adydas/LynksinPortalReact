import React from 'react';

import { Club } from '../../components';
import './style.scss';

const ClubList = () => {
  const clubList = [
    {
      img: 'images/club/club-1.png',
      name: 'Hyannisport Club',
      location: '2 Irving Ave Hyannis Port MA USA (58.0 miles)',
    },
    {
      img: 'images/club/club-2.png',
      name: 'Marshfield Country Club',
      location: '515 Moraine St Marshfield MA USA (37.4 miles)',
    },
    {
      img: 'images/club/club-3.png',
      name: 'Old Sandwich Country Club',
      location: '515 Moraine St Marshfield MA USA (37.4 miles)',
    },
    {
      img: 'images/club/club-2.png',
      name: 'Marshfield Country Club',
      location: '515 Moraine St Marshfield MA USA (37.4 miles)',
    },
    {
      img: 'images/club/club-3.png',
      name: 'Old Sandwich Country Club',
      location: '515 Moraine St Marshfield MA USA (37.4 miles)',
    },
  ]
  return (
    <div className='club-list'>
      <div className='club-list-title'>
        <span>Our Clubs</span>
      </div>
      <div className="club-list-content">
        {
          clubList.map(({ img, name, location }, index) =>
            <Club className='club-list-item' img={img} name={name} location={location} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default ClubList;
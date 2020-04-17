import React from 'react';
import { CustomTable } from '../../components';
import './style.scss';

const LeaderboardStats = () => {

  const standings = [
    {
      rank: 0,
      leader: '',
      events: 0,
      points: 0,
    },
    {
      rank: 1,
      leader: 'Doug K',
      events: 14,
      points: 1458,
    },
    {
      rank: 2,
      leader: 'Doug K',
      events: 8,
      points: 1403,
    },
    {
      rank: 3,
      leader: 'Walter O',
      events: 6,
      points: 1179,
    },
    {
      rank: 4,
      leader: 'Rick R',
      events: 14,
      points: 1110,
    },
    {
      rank: 5,
      leader: 'Kara P',
      events: 5,
      points: 1083,
    },
  ];

  return (
    <div className="leaderboard-stats">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <CustomTable title="LYNKSIN STANDINGS" data={standings}/>
        </div>
        <div className="col-sm-12 col-md-6">
          <CustomTable title="TOP 10 SCORES" data={standings}/>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardStats;
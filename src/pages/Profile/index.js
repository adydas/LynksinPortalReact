import React from 'react';
import { ProfileHeader } from '../../components'; 
import './style.scss'

const ProfilePage = () => {
  const profile = {
    name: 'Rob Headley',
    location: 'Black Rock Country Club, Hingam, MA',
    age: '51',
    college: 'Virgina Tech',
    matchesPlayed: '11',
    index: '7.1',
    matchesWon: '7',
    matchesLost: '4'
  };

  return (
    <div className="profile-page">
      <ProfileHeader data={profile}/>
    </div>
  )
}

export default ProfilePage;
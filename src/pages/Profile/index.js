import React from 'react';
import { ProfileHeader, ProfileInfo } from '../../components';
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

  const profileInfo = {
    left: [
      {
        title: 'Hobbies outside of golf',
        type: 'badge list',
        badges: ['Reading', 'Beach', 'Working Out']
      },
      {
        title: 'Sports you played in school',
        type: 'badge list',
        badges: ['Football', 'Wrestling']
      },
      {
        title: 'Tunes while playing',
        type: 'yesno',
        value: 'no',
      },
      {
        title: 'Favorite music genres',
        type: 'badge list',
        badges: ['modern country', 'classic rock', 'Mo-Town']
      }
    ],
    right: [
      {
        title: 'Best Golf memories',
        type: 'badge list',
        badges: ['2 Double Eagles', 'Scotland Golf trip with Dad and Best Friend (50 Birthday)']
      },
      {
        title: 'Favorite golf courses',
        type: 'badge list',
        badges: ['Pebble Beach', 'Fisher Island', 'Spyglass', 'Bandon Dunes', 'course']
      },
    ]
  }

  return (
    <div className="profile-page">
      <ProfileHeader data={profile} />
      <ProfileInfo data={profileInfo} />
    </div>
  )
}

export default ProfilePage;
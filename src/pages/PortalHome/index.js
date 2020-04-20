import React from 'react';

import { MemberSimple } from '../../components/Member';

import './style.scss';
import VideoPoster from '../../images/img-video.png';


const PortalHome = () => {

  const nameList = [
    'Rob H, (Black Rock CC)',
    'Doug K (South Shore CC)',
    'Rick R (South Shore CC)',
    'Walter O (Hyannisport CC)'
  ]

  const members = [
    {
      name: 'Kevin Karo',
      img: 'images/members/member-1.png',
      professionalName: 'Featured Golfer: Kevin K',
      location: 'Hingham, MA',
      email: 'kevinjkaro@bpsma.org',
      mobile: '781-424-5393',
      handicapIndex: '8.2',
      professional: {
        college: 'St. Edwards University, Austin, TX',
      }
    },
    {
      name: 'Matt Gregory',
      img: 'images/members/member-2.png',
      professionalName: 'Featured Golfer: Kevin ',
      location: '320 Thacher St., Milton, MA 02186, MA',
      email: 'kevinjkaro@bpsma.org',
      mobile: '781-424-5393',
      handicapIndex: '2.8',
      professional: {
        college: 'St. Edwards University, Austin, TX',
      }
    },
    {
      name: 'Matt Parziale',
      img: 'images/members/member-3.png',
      professionalName: 'Featured Golfer: Kevin K',
      location: 'N/A',
      email: 'kevinjkaro@bpsma.org',
      mobile: '781-424-5393',
      handicapIndex: 'N/A',
      professional: {
        college: 'St. Edwards University, Austin, TX',
      }
    },
    {
      name: 'Matt Gregory',
      img: 'images/members/member-2.png',
      professionalName: 'Featured Golfer: Kevin ',
      location: 'Hingham, MA',
      email: 'kevinjkaro@bpsma.org',
      mobile: '781-424-5393',
      handicapIndex: '2.8',
      professional: {
        college: 'St. Edwards University, Austin, TX',
      }
    },
    {
      name: 'Kevin Karo',
      img: 'images/members/member-3.png',
      professionalName: 'Featured Golfer: Kevin K',
      location: 'Hingham, MA',
      email: 'kevinjkaro@bpsma.org',
      mobile: '781-424-5393',
      handicapIndex: '8.2',
      professional: {
        college: 'St. Edwards University, Austin, TX',
      }
    },
  ]

  return (
    <div className="portal-home">
      <div className="portal-home-header">
        <div className="portal-home-header-matches">
          <div className="matches-list">
            <div className="matches-list-item">
              <h5>Match #101, Black Rock</h5>
              <h6>Win Rob H, Doug K</h6>
            </div>
            <div className="matches-list-item">
              <h5>Match #102, Old Sandwich CC</h5>
              <h6>Win Rob H, Doug K</h6>
            </div>
          </div>
          <div className="matches-action">
            <span className="badge badge-danger">Open Matches</span>
          </div>
        </div>
        <div className="portal-home-header-list">
          <ul>
            {nameList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="portal-home-header-action">
          <span>View Leaderboard</span>
        </div>
      </div>
      <div className="portal-home-container">
        <div className="row portal-home-container-row">
          <div className="col-9">
            <div className="portal-home-container-left">
              <div className="row">
                <div className="col-8">
                  <video src="movie.mp4" type="video/mp4" poster={VideoPoster} controls />
                </div>
                <div className="col-4">
                  <div className="portal-home-new-members">
                    <div className="portal-home-new-members-title">
                      <span>New members</span>
                    </div>
                    {
                      members.map(({ img, name, location, handicapIndex }, index) =>
                        <MemberSimple img={img} name={name} location={location} handicapIndex={handicapIndex} key={index} />
                      )
                    }
                  </div>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="right-container">

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PortalHome;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MemberSimple, MemberDetail } from '../../components/Member';
import { ImageGallery } from '../../components';
import { Shop, ClubList } from '../../containers';
import { INTERNAL_LINKS } from '../../enum';
import './style.scss';
import VideoPoster from '../../images/img-video.png';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

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
      handicapIndex: '8.2',
      general: [
        {
          label: 'Date of birth',
          value: '09 May',
          icon: 'fa fa-gift',
        },
        {
          label: 'Location',
          value: 'Hingham, MA',
          icon: 'fa fa-map-marker',
        },
        {
          label: 'Email',
          value: 'kevinjkaro@bpsma.org',
          icon: 'fa fa-bullseye',
        },
        {
          label: 'Mobile',
          value: '781-424-5393',
          icon: 'fa fa-mobile',
        },
      ],
      professional: [
        {
          label: 'College',
          value: 'St. Edwards University, Austin, TX',
        },
      ]
    },
    {
      name: 'Matt Gregory',
      img: 'images/members/member-2.png',
      professionalName: 'Featured Golfer: Matt G',
      handicapIndex: '2.8',
      general: [
        {
          label: 'Date of birth',
          value: '09 May',
          icon: 'fa fa-gift',
        },
        {
          label: 'Location',
          value: '320 Thacher St., Milton, MA 02186, MA',
          icon: 'fa fa-map-marker',
        },
        {
          label: 'Email',
          value: 'kevinjkaro@bpsma.org',
          icon: 'fa fa-bullseye',
        },
        {
          label: 'Mobile',
          value: '781-424-5393',
          icon: 'fa fa-mobile',
        },
      ],
      professional: [
        {
          label: 'College',
          value: 'St. Edwards University, Austin, TX',
        },
      ]
    },
    {
      name: 'Matt Parziale',
      img: 'images/members/member-3.png',
      professionalName: 'Featured Golfer: Matt P',
      handicapIndex: 'N/A',
      general: [
        {
          label: 'Date of birth',
          value: '09 May',
          icon: 'fa fa-gift',
        },
        {
          label: 'Location',
          value: 'N/A',
          icon: 'fa fa-map-marker',
        },
        {
          label: 'Email',
          value: 'kevinjkaro@bpsma.org',
          icon: 'fa fa-bullseye',
        },
        {
          label: 'Mobile',
          value: '781-424-5393',
          icon: 'fa fa-mobile',
        },
      ],
      professional: [
        {
          label: 'College',
          value: 'St. Edwards University, Austin, TX',
        },
      ]
    },
    {
      name: 'Kevin Karo',
      img: 'images/members/member-1.png',
      professionalName: 'Featured Golfer: Kevin K',
      handicapIndex: '8.2',
      general: [
        {
          label: 'Date of birth',
          value: '09 May',
          icon: 'fa fa-gift',
        },
        {
          label: 'Location',
          value: 'Hingham, MA',
          icon: 'fa fa-map-marker',
        },
        {
          label: 'Email',
          value: 'kevinjkaro@bpsma.org',
          icon: 'fa fa-bullseye',
        },
        {
          label: 'Mobile',
          value: '781-424-5393',
          icon: 'fa fa-mobile',
        },
      ],
      professional: [
        {
          label: 'College',
          value: 'St. Edwards University, Austin, TX',
        },
      ]
    },
    {
      name: 'Kevin Karo',
      img: 'images/members/member-1.png',
      professionalName: 'Featured Golfer: Kevin K',
      handicapIndex: '8.2',
      general: [
        {
          label: 'Date of birth',
          value: '09 May',
          icon: 'fa fa-gift',
        },
        {
          label: 'Location',
          value: 'Hingham, MA',
          icon: 'fa fa-map-marker',
        },
        {
          label: 'Email',
          value: 'kevinjkaro@bpsma.org',
          icon: 'fa fa-bullseye',
        },
        {
          label: 'Mobile',
          value: '781-424-5393',
          icon: 'fa fa-mobile',
        },
      ],
      professional: [
        {
          label: 'College',
          value: 'St. Edwards University, Austin, TX',
        },
      ]
    },
  ]

  useEffect(() => {
    const video = document.querySelector('#video');
    const memberList = document.querySelector('.portal-home-new-members');

    const setNewMembersWidth = () => {
      if (window.innerWidth > 1200) {
        const height = video.offsetHeight;
        memberList.style.height = `${height}px`;
      } else {
        memberList.style.maxHeight = '700px';
        memberList.style.height = '100%';
      }
    }

    setNewMembersWidth();

    const debouncedHandleResize = debounce(function handleResize() {
      setNewMembersWidth();
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

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
              <li key={index}>{`${index + 1} ${name}`}</li>
            ))}
          </ul>
        </div>
        <div className="portal-home-header-action">
          <Link to={INTERNAL_LINKS.LEEADERBOARD.STATS} className="portal-home-header-action-btn">View Leaderboard</Link>
        </div>
      </div>
      <div className="portal-home-container">
        <div className="row portal-home-container-row">
          <div className="col-md-12 col-lg-9">
            <div className="portal-home-container-left">
              <div className="row">
                <div className="col-lg-12 col-xl-8">
                  <video id='video' src="movie.mp4" type="video/mp4" poster={VideoPoster} controls />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="portal-home-new-members">
                    <div className="portal-home-new-members-title">
                      <span>New members</span>
                    </div>
                    {
                      members.map((member, index) =>
                        <MemberSimple data={member} key={index} />
                      )
                    }
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <MemberDetail data={members[0]} />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <ImageGallery />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <Shop />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="right-container">
              <ClubList />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PortalHome;
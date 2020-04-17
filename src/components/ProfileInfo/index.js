import React from 'react';
import Badge from '../Badge';
import CustomRadioButton from '../CustomRadioButton';

import './style.scss';

const ProfileInfo = ({ data }) => {

  const handleChange = (index, value) => {

  }

  return (
    <div className="profile-information">
      <div className="row w-100">
        {
          Object.values(data).map((side, sid) => (
            <div className="col-sm-12 col-md-6" key={sid}>
              {
                side.map((item, index) => (
                  <div className="badge-item" key={index}>
                    <h1>{item.title}</h1>
                    {
                      item.type === 'badge list' && (
                        item.badges.map((b, id) => (
                          <Badge title={b} key={id} />
                        ))
                      )
                    }
                    {
                      item.type === 'yesno' && (
                        <CustomRadioButton value={item.value} onChange={val => handleChange(index, val)} />
                      )
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProfileInfo;
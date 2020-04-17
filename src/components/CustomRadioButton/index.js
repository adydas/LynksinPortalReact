import React, { useState } from 'react';

import './style.scss';

const CustomRadioButton = ({ value }) => {

  const [option, setOption] = useState(value);

  const handleClick = val => {
    setOption(val);
    
  }
  return (
    <div className="custom-radio">
      <div className={`custom-radio-option ${option === 'yes' ? 'active' : ''}`} onClick={() => handleClick('yes')}>
        <span>Yes</span>
      </div>
      <div className={`custom-radio-option ${option === 'no' ? 'active' : ''}`} onClick={() => handleClick('no')}>
        <span>No</span>
      </div>
    </div>
  )
}

export default CustomRadioButton;
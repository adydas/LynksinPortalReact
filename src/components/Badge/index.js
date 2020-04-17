import React from 'react';
import './style.scss';

const Badge = ({ title }) => {
  return (
    <div className="custom-badge">
      <span className="custom-badge-title">{title}</span>
    </div>
  )
}

export default Badge;
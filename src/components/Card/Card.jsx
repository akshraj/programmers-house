import React from 'react'
import './Card.css';
import './Card.css';

const Card = ({ children, title, icon }) => {
  return (
    <div className="homepage-card">
      <div className="homepage-title">
        <img src={icon} alt="Emoji img" />
        <h1 className="heading">{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default Card
import React from 'react';

const ProfileCard = props => (
  <div className="profile-card">
    <div className="date">{props.date}</div>
    <div className="card-number">{props.cardNumber}</div>
  </div>
);

export default ProfileCard;

import React from 'react';
import User from './User.jsx';

const ReviewInfo = props => {
  return (<div>
    <div className='user'>
      <img className='userPicture' src={props.user.picture}/>
      <User user={props.user}/>
    </div>
    <div>
      <b>Eye Color</b>: {props.user.eyeColor}</div>
    <div>
      <b>Hair Color</b>: {props.user.hairColor}</div>
    <div>
      <b>Skin Tone</b>: {props.user.skinTone}</div>
    <div>
      <b>Skin Type</b>: {props.user.skinType}</div>
  </div>)
}

export default ReviewInfo;

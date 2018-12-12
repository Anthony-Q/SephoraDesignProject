import React from 'react';

const User = props => (<div>
  <div>
    {props.user.name}
  </div>
  <div>
    <span>
      <img src={props.user.rank1}/>
    </span>
    <span>
      <img src={props.user.rank2}/>
    </span>
  </div>
</div>)

export default User;

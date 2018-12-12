import React from 'react';

const RatingPercent = props => {
  var percent = props.users.map(user => {
    if (user.recommends) {
      return 1;
    } else {
      return 0;
    }
  }).reduce((acc, val) => acc + val, 0);
  //console.log('percent', percent)

  return (<div>
    <div className='percent'>
      {percent}%
    </div>
    <div>
      would recommend
    </div>
  </div>)
}

export default RatingPercent;

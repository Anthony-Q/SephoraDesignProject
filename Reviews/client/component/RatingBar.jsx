import React from 'react';

const RatingBar = props => {
  var five = 0;
  var four = 0;
  var three = 0;
  var two = 0;
  var one = 0;
  props.users.forEach(user => {
    if (user.rating === 5) {
      five++;
    }
    if (user.rating === 4) {
      four++;
    }
    if (user.rating === 3) {
      three++;
    }
    if (user.rating === 2) {
      two++;
    }
    if (user.rating === 1) {
      one++;
    }
  })

  return (<div className="row">
    <div className="side">
      <div>5 star</div>
    </div>
    <div className="middle">
      <div className="bar-container">
        <div className="bar-5" style={{
            width: `${five}%`
          }}></div>
      </div>
    </div>
    <div className="side right">
      <div>{five}</div>
    </div>
    <div className="side">
      <div>4 star</div>
    </div>
    <div className="middle">
      <div className="bar-container">
        <div className="bar-4" style={{
            width: `${four}%`
          }}></div>
      </div>
    </div>
    <div className="side right">
      <div>{four}</div>
    </div>
    <div className="side">
      <div>3 star</div>
    </div>
    <div className="middle">
      <div className="bar-container">
        <div className="bar-3" style={{
            width: `${three}%`
          }}></div>
      </div>
    </div>
    <div className="side right">
      <div>{three}</div>
    </div>
    <div className="side">
      <div>2 star</div>
    </div>
    <div className="middle">
      <div className="bar-container">
        <div className="bar-2" style={{
            width: `${two}%`
          }}></div>
      </div>
    </div>
    <div className="side right">
      <div>{two}</div>
    </div>
    <div className="side">
      <div>1 star</div>
    </div>
    <div className="middle">
      <div className="bar-container">
        <div className="bar-1" style={{
            width: `${one}%`
          }}></div>
      </div>
    </div>
    <div className="side right">
      <div>{one}</div>
    </div>
  </div>)
}

export default RatingBar;

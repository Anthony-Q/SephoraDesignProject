import React from 'react';
import SolidStar from './SolidStar.jsx';
import EmptyStar from './EmptyStar.jsx';
import StarRatings from 'react-star-ratings';

const RatingStar = props => {
  let stars = [];
  for (var i = 0; i < 5; i++) {
    if (i <= 3 - 1) {
      stars.push(<SolidStar key={i}/>)
    } else {
      stars.push(<EmptyStar key={i}/>)
    }
  }

  let avgStar = props.users.map(user => {
    return user.rating
  }).reduce((acc, val) => acc + val, 0) / 100;
  //console.log('avgStar', avgStar)

  return (<div>
    <StarRatings rating={avgStar} starRatedColor="black" numberOfStars={5} name='rating' starDimension='25px' starSpacing='0px'/>
    <div className="averageStarNumber">
      {avgStar}&nbsp;/ 5 stars
    </div>
  </div>)
}

export default RatingStar;

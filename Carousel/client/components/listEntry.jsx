import React from 'react';
import UncheckedStar from './uncheckedStar.jsx';
import CheckedStar from './checkedStar.jsx';

const ListEntry = props => {
  let starArray = [];

for (var i = 0; i < 5; i++) {
  if (i <= props.item.rating - 1) {
    starArray.push(<CheckedStar index={i}/>)
  } else {
    starArray.push(<UncheckedStar index={i}/>);
  }
}

    return (
      <div className="list-entry">
        <img className="list-entry-picture" src={props.item.picture}></img>
        <div className="list-entry-name">{props.item.name}</div>
        <div className="list-entry-about">{props.item.about}</div>
        <div className="list-entry-cost">{props.item.cost}</div>
       {starArray.map( star => {
         return star;
       })}
         
      </div>
      
    )
}

export default ListEntry;
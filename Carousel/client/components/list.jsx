import React from 'react';
import Carousel from './app.jsx';
import ListEntry from './listEntry.jsx';
// import AliceCarousel from 'react-alice-carousel';
import NukaCarousel from 'nuka-carousel';


// const List = props => {
//   const handleOnDragStart = e => e.preventDefault();
//   return (
//     <div className="list">
//     <AliceCarousel>
//       {props.items.map( (item, index) => {
//         return <ListEntry 
//           item={item}
//           key ={item.index} 
//           index = {props.index}
//           onDragStart={handleOnDragStart}
//         />
//       })}
//     </AliceCarousel>
//   </div>
//   )
// }


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
    
    this.galleryItems = this.galleryItems.bind(this);
  }


  galleryItems() {
    console.log("PROPS--->", this.props);
    return (this.props.items.map( (item, index) => {
      console.log("item list entry--->", item);
      return <ListEntry 
      item = {item}
      key = {item.index}
      />
    }))
  }

  render() {
    const items = this.galleryItems();
    console.log("RENDER ITEMS---->", items);
    return  (
      <NukaCarousel 
      slidesToShow = {5}
      slidesToScroll = {5}
      slideIndex = {0}
      // renderTopCenterControls={({ currentSlide }) => ()}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className="left-arrow" onClick={previousSlide}></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className="right-arrow" onClick={nextSlide}></button>
      )}
      >
        {this.props.items.map( (item, index) => {
          console.log("IM IN THE LIST.JSX RENDER BEFORE RETURN")
        return <ListEntry 
        item = {item}
        slideIndex = {index}
        key = {item.index}
      />
    })}
  </NukaCarousel>
    )}
}

export default List;
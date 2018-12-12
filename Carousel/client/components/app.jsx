import React from 'react';
import axios from 'axios';
import List from './list.jsx';
import StyledDiv from './style.js';
// d="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            currentIndex: 0
        }
        this.fetchData = this.fetchData.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        }

    componentDidMount() {
    this.fetchData();
    }

  
    fetchData() {
      axios
        .get('http://52.207.209.29:7777/api/mydb')
        .then( ({data}) => {
            console.log(data.data);
            this.setState({
              itemList: data,
              
            })
        })
        .catch(err => {
            console.log("FETCH ERROR--->", err)
        });
    }

    goToSlide(index) {
        this.setState({
            currentIndex: index
        });
    }

    goToPreviousSlide(e) {
        e.preventDefault();
        let index = this.state.currentIndex;
        let slideLength = this.props.length;

        if (index < 1) {
            index = slideLength;
        }
        --index;
        this.setState({
            currentIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();
        let index = this.state.currentIndex;
        let slideLength = this.props.length - 1;

       if (index === slideLength) {
           index = -1;
       }
       ++index; 
       this.setState({
           currentIndex: index
       })
    }

    render() {
        return (
            <StyledDiv>

            <div className="app-container">
                <div className="title">Similar Products</div>
                <div className="carousel">
                    <div>
                    {/* <button placeholder="LEFT" className="left-arrow" ></button> */}
                    </div>
                    <List 
                    items = {this.state.itemList}
                    currentIndex = {this.state.currentIndex}
                    />
                    <div>
                    {/* <button placeholder="RIGHT" className="right-arrow"></button> */}
                    </div>
                </div>
            </div>
          
                    </StyledDiv >
        )
    }
}


export default Carousel;
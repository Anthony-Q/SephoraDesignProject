import React from 'react';
import axios from 'axios';

class FilterSortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boo: false,
      users: [],
      sortKey: 'Most Helpful'
    }
    this.getUsers = this.getUsers.bind(this)
    this.showSortBar = this.showSortBar.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios.get('/review').then((users) => {
      console.log('got users', users.data)
      this.setState({users: users.data})
    })
  }

  showFilterBar() {
    var x = document.getElementById("filterBar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  showSortBar() {
    //document.getElementById("sortBar").classList.toggle("sortBar");
    var opposite = !this.state.boo;
    this.setState({boo: opposite})
  }

  changeSortKey(key) {
    //console.log('change key')
    this.setState({sortKey: key})
  }

  render() {
    return (<div className="filterSortBar">
      <span className="filter" onClick={this.showFilterBar}>
        <span>Filter</span>
        <span className="dropArrow">
          <svg viewBox="0 0 95 25" className="dropArrowSvg">
            <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
          </svg>
        </span>
      </span>
      <span className='filterSortVerticalBorder'></span>

      <span className='sort' onClick={this.showSortBar}>
        <span>Sort by:&nbsp;
          <b>{this.state.sortKey}</b>
        </span>
        <span className="dropArrow">
          <svg viewBox="0 0 95 25" className="dropArrowSvg">
            <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
          </svg>
        </span>
        <span>
          {
            this.state.boo
              ? <div id="sortBar">
                  <div className="sortOptions" onClick={() => {
                      this.props.sortByHelpful();
                      this.changeSortKey('Most Helpful');
                    }}>{
                      this.state.sortKey === 'Most Helpful'
                        ? <b>Most Helpful</b>
                        : <div>Most Helpful</div>
                    }
                  </div>
                  <div className="sortOptions" onClick={() => {
                      this.props.sortByHighest();
                      this.changeSortKey('Highest Rating');
                    }}>{
                      this.state.sortKey === 'Highest Rating'
                        ? <b>Highest Rating</b>
                        : <div>Highest Rating</div>
                    }</div>
                  <div className="sortOptions" onClick={() => {
                      this.props.sortByLowest();
                      this.changeSortKey('Lowest Rating');
                    }}>{
                      this.state.sortKey === 'Lowest Rating'
                        ? <b>Lowest Rating</b>
                        : <div>Lowest Rating</div>
                    }</div>
                </div>
              : <div></div>
          }
        </span>
      </span>
    </div>)
  }
}

export default FilterSortBar;

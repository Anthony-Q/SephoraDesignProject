import React from 'react';
import axios from 'axios';
import ReviewInfo from './ReviewInfo.jsx';
import ReviewComment from './ReviewComment.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    //this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount() {
    //this.getUsers()
    this.setState({users: this.props.users})
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('updated', prevState, this.props.users)
    if (prevState.users !== this.props.users) {
      this.setState({users: this.props.users})
    }
  }
  //
  // getUsers() {
  //   axios.get('/review').then((users) => {
  //     console.log('got users', users.data)
  //     this.setState({users: users.data})
  //   })
  // }

  render() {
    return (<div>
      <div>
        {
          this.state.users.map((user, i) => (<div key={i}>
            <div className='review'>
              <div className='reviewInfo'>
                <ReviewInfo user={user}/>
              </div>
              <div className=''>
                <ReviewComment user={user}/>
              </div>
            </div>
            <div className='userDivider'></div>
          </div>))
        }
      </div>
    </div>)
  }
}

export default Review;

import React from 'react';
import Image from 'react-svg-loader!../Images/Basket.svg';
import styled from 'styled-components';

import style from '../styles/Signup.css';

const StyledBasketDropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 400px;
  top: 0;
  right: 0;
  justify-content: center;
  background-color: white;
  word-wrap: normal;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  z-index: 1030;
`;

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropDown: false
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop() {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    });
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={this.handleDrop}
        onMouseLeave={this.handleDrop}
      >
        <div>
          <Image height={30} width={30} />

          <div
            style={{
              marginRight: '1200px',
              marginLeft: '30px',
              position: 'absolute'
            }}
          >
            {this.state.toggleDropDown ? (
              <StyledBasketDropDown>
                <div>Your basket is empty</div>
                <div className="row">
                  <p>Sign in to see items you may have added previously.</p>
                  <button className={style.button}>SIGN IN</button>
                </div>
                <p>See samples, rewards and promotions in </p>
                <a>basket</a>
              </StyledBasketDropDown>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;

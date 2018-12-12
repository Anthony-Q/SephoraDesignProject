import React from 'react';
import Image from 'react-svg-loader!../Images/heart.svg';
import styled from 'styled-components';

const LovesStyle = styled.div`
  position: absolute;
  z-index: 1;
  /* top: 100%; */
  /* left: 20p; */
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  background-color: #000;
  /* -webkit-transform: translate(-50%, 8px);
  -ms-transform: translate(-50%, 8px);
  transform: translate(-50%, 8px); */
  /* display: none; */
  padding-top: 0.375em;
  padding-bottom: 0.375em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  /* white-space: nowrap; */
  border-radius: 4px;
  font-size: 12px;
`;
class Loves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDrop: false
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop() {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  render() {
    return (
      <div onPointerEnter={this.handleDrop} onPointerLeave={this.handleDrop}>
        <Image width={30} height={30} />
        <div>
          {this.state.toggleDrop ? (
            <LovesStyle>loves list</LovesStyle>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
export default Loves;

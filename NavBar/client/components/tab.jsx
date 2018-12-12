import React from 'react';
import CssModules from 'react-css-modules';
// import NavDropDown from './navDropDown';
// import styles from './styles.css';
import styled from 'styled-components';
const TabDiv = styled.div`
  float: left;
  display: flex;
  justify-content: space-between;
  vertical-align: 0em;
  position: relative;
  text-transform: uppercase;
  height: 40px;
  cursor: default;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 22px;
  letter-spacing: 0.0625em;
  text-align: justify;
  &:hover {
    box-shadow: grey 0px 1px 8px;
  }
`;
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false
    };
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav() {
    this.setState({
      toggleNav: !this.state.toggleNav
    });
  }
  render() {
    return (
      <TabDiv
        style={{
          boxShadow:
            this.props.name === this.props.selected ? 'grey 0px 1px 8px' : ''
        }}
        onPointerEnter={() => {
          this.props.showDropDown(this.props.name, true);
        }}
        onPointerLeave={this.props.hideDropDown}
      >
        <div>{this.props.name}</div>
      </TabDiv>
    );
  }
}
export default Tab;

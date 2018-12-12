import React from 'react';
import Brands from './NavDropDown/Brands.jsx';
import New from './NavDropDown/New.jsx';
import Gifts from './NavDropDown/Gifts.jsx';
import Community from './NavDropDown/Community.jsx';
import HowTos from './NavDropDown/HowTos.jsx';
import StoresLocator from './NavDropDown/StoresLocator.jsx';
import styled from 'styled-components';
const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 99999;
`;
class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichTab: props.name,
      brands: props.brands
    };
  }
  render() {
    let navRender;
    if (this.props.name === 'NEW') {
      navRender = <New />;
    } else if (this.props.name === 'BRANDS') {
      navRender = <Brands brands={this.state.brands} />;
    } else if (this.props.name === 'GIFTS') {
      navRender = <Gifts />;
    } else if (this.props.name === 'COMMUNITY') {
      navRender = <Community />;
    } else if (this.props.name === 'HOW-TOS') {
      navRender = <HowTos />;
    } else {
      navRender = <StoresLocator />;
    }
    return (
      <StyledNav
        onPointerEnter={e => this.props.showDrop(this.props.name)}
        onPointerLeave={this.props.hideDropDown}
      >
        <div>{navRender}</div>
      </StyledNav>
    );
  }
}
export default NavDropDown;

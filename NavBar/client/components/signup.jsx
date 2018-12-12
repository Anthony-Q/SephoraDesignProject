import React from 'react';
import SignupDropdown from './SignupDropdown.jsx';
import styled from 'styled-components';
const StyledSignup = styled.div`
  display: block;
  position: relative;
  marginright: 8px;
  width: 180px;
  padding: 8px 20px 8px 20px;
`;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  handleDropdown() {
    this.setState({
      dropdown: !this.state.dropdown
    });
  }
  render() {
    return (
      <StyledSignup
        onMouseEnter={this.handleDropdown}
        onMouseLeave={this.handleDropdown}
      >
        <span className="spreadFlex">
          <span>
            <h3>Hi, beautiful</h3>
            <div>Sign In or Register</div>
          </span>
          {this.state.dropdown ? (
            <span className="upArrow" />
          ) : (
            <span className="downArrow" />
          )}
        </span>
        {this.state.dropdown ? (
          <SignupDropdown dropout={this.handleDropout} />
        ) : (
          <div />
        )}
      </StyledSignup>
    );
  }
}
export default Signup;

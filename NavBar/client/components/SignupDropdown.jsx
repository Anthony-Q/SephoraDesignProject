import React from 'react';
import styled from 'styled-components';
const StyledSignupDropDown = styled.div`
  position: absolute;
  display: block;
  background-color: white;
  padding: 8px 20px 8px 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  margin-right: 0px;
  width: 210;
  margin-bottom: 2em;
  line-height: 1.5em;
  font-size: 14;
  z-index: 999;
`;

var SignupDropdown = props => {
  return (
    <StyledSignupDropDown>
      <div>Profile</div>
      <div>Beauty Insider</div>
      <div>Lists</div>
      <div>Account</div>
      <br />
      <div>Orders</div>
      <div>Reservations</div>
      <div>Rewards Bazaar</div>
    </StyledSignupDropDown>
  );
};
export default SignupDropdown;

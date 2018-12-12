import React from 'react';
import Tab from './tab.jsx';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        'NEW',
        'BRANDS',
        'GIFTS',
        'COMMUNITY',
        'HOW-TOS',
        'STORES & SERVICES'
      ],
      toggleDropDown: false,
      dropDownName: ''
    };
    this.showDropDown = this.showDropDown.bind(this);
  }
  showDropDown() {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    });
  }
  render() {
    return (
      <div>
        <StyledFlex>
          {this.state.tabNames.map((name, index) => {
            return (
              <Tab
                key={index}
                name={name}
                showDropDown={this.props.showDrop}
                hideDropDown={this.props.hideDrop}
                selected={this.props.selected}
              />
            );
          })}
        </StyledFlex>
      </div>
    );
  }
}
export default Tabs;

import React from 'react';
import CategoryEntry from './ShopDropDowns/categoryentry.jsx';
import SpecificCatEntry from './ShopDropDowns/specificCatEntry.jsx';
import styled from 'styled-components';
const StyledShop = styled.div`
  height: 38px;
  padding: 22px 28px 0px 28px;
  z-index: 3000;
  &:hover {
    box-shadow: grey 0px 1px 8px;
  }
`;
const ShopBoxStyled = styled.div`
  height: 38px;
  z-index: 3000;
`;
const StyledBoxDrop = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  padding-top: 22px;
`;
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        'MAKEUP',
        'SKINCARE',
        'FRAGRANCE',
        'HAIR',
        'BATH & BODY',
        'TOOLS & BRUSHES',
        'MEN',
        'MINI SIZE',
        'GIFTS',
        'SEPHORA COLLECTION',
        'BEAUTY OFFERS',
        'SALE'
      ],
      toggleDrop: false,
      display: false
    };
    this.displayBox = this.displayBox.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }
  showDropDown() {
    // console.log('toggle');
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  displayBox(e) {
    console.log('this should activate', e);
    this.setState({
      display: true
    });
  }
  hideBox() {
    this.setState({
      display: false
    });
  }

  render() {
    return (
      <div>
        <StyledShop
          onMouseEnter={e => {
            this.showDropDown();
          }}
          onPointerLeave={e => {
            console.log('mouse left');
            this.showDropDown();
            this.hideBox();
          }}
        >
          <ShopBoxStyled>SHOP</ShopBoxStyled>
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              marginLeft: '-28px',
              marginRight: '28px',
              flexDirection: 'row',
              backgroundColor: 'white',
              zIndex: 3000
            }}
          >
            <StyledBoxDrop>
              {this.state.toggleDrop ? (
                this.state.entries.map((entry, index) => {
                  return (
                    <CategoryEntry
                      key={index}
                      name={entry}
                      displayBox={this.displayBox}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </StyledBoxDrop>
            <StyledBoxDrop>
              {this.state.display && this.state.toggleDrop ? (
                <SpecificCatEntry />
              ) : (
                <div />
              )}
            </StyledBoxDrop>
          </div>
        </StyledShop>
      </div>
    );
  }
}

export default Shop;

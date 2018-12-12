import React from 'react';
import Search from './search.jsx';
// import Banner from './banner.jsx';
import Shop from './shop.jsx';
import Tabs from './tabs.jsx';
import Signup from './signup.jsx';
import NavDropDown from './navDropDown.jsx';
import Basket from './Basket.jsx';
import Loves from './Loves.jsx';
import axios from 'axios';
import ImageTruck from 'react-svg-loader!../Images/Truck.svg';
import ImageLocator from 'react-svg-loader!../Images/Locator.svg';
import Country from './Country.jsx';
import AppStyled from '../styles.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDropDownToggle: false,
      navDropName: '',
      searches: [],
      brands: [],
      country: 'US'
    };
    this.showDrop = this.showDrop.bind(this);
    this.hideDrop = this.hideDrop.bind(this);
  }
  componentDidMount() {
    axios
      .get('/product', { params: {} })
      .then(({ data }) => {
        console.log('here is the response', data);
        this.setState({
          searches: data.map(search => {
            return search.search;
          })
        });
        this.setState({
          brands: data.map(brands => brands.brand)
        });
        console.log('inside app', this.state.searches);
      })
      .catch(err => {
        console.error('Something went wrong', err);
      });
  }
  showDrop(e) {
    this.setState({
      navDropName: e,
      navDropDownToggle: true
    });
  }
  hideDrop(e) {
    this.setState({
      navDropName: '',
      navDropDownToggle: false
    });
  }
  render() {
    return (
      <AppStyled>
        <div className="whole-body">
          <div className="row">
            <img src="https://www.sephora.com/contentimages/homepage/090418/Homepage/DesktopMweb/2018-09-04-hp-persistent-banner-labor-day-us-slice.jpg" />
          </div>
          {/* blackbar */}
          <span className="blackbar">
            <div className="shipping-info">
              3 Free Samples with every Purchase
            </div>
            <span className="row">
              <ImageTruck height={15} width={15} fill={'white'} />
              <div>Track Order</div>
            </span>
            <span className="row">
              <ImageLocator height={15} width={15} fill={'white'} />
              <div>Find a Store</div>
            </span>
            <Country country={this.state.country} />
          </span>
          <span className="titleRow">
            <Search searches={this.state.searches} />
            <h1>SEPHORA</h1>
            <Signup />
            <div>
              <Loves />
            </div>
            <div>
              <Basket />
            </div>
          </span>
          <span className="bottomBar">
            <Shop />
            <Tabs
              showDrop={this.showDrop}
              hideDrop={this.hideDrop}
              selected={this.state.navDropName}
            />
          </span>
          <div>
            {this.state.navDropDownToggle ? (
              <NavDropDown
                name={this.state.navDropName}
                hideDropDown={this.hideDrop}
                showDrop={this.showDrop}
                brands={this.state.brands}
              />
            ) : (
              <div />
            )}
          </div>
          <div className="blackbar">
            <a className="blackBarText" href="http:localhost:1337/product">
              SPOTS OPEN! GET THE BEST BEAUTY SUBSCRIPTION BOX FOR JUST
              $10/MONTH. SUBSCRIBE NOW >
            </a>
          </div>
        </div>
      </AppStyled>
    );
  }
}
export default App;

import React from 'react';
import Review from './Review.jsx';
import Rating from './Rating.jsx';
import FilterSortBar from './FilterSortBar.jsx';
import Styles from '../styles.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeColor: false,
      hairColor: false,
      skinTone: false,
      skinType: false,
      users: []
    }
    this.showEyeColor = this.showEyeColor.bind(this);
    this.showHairColor = this.showHairColor.bind(this);
    this.showSkinTone = this.showSkinTone.bind(this);
    this.showSkinType = this.showSkinType.bind(this);
    this.getSpecificUsers = this.getSpecificUsers.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.sortByHelpful = this.sortByHelpful.bind(this);
    this.sortByLowest = this.sortByLowest.bind(this);
    this.sortByHighest = this.sortByHighest.bind(this);
  }
  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios.get('/review').then((users) => {
      console.log('got users IN APP', users.data)
      this.setState({users: users.data});
      this.sortByHelpful();
    })
  }

  showEyeColor() {
    //console.log('eyes')
    var opposite = !this.state.eyeColor;
    this.setState({eyeColor: opposite})
  }

  showHairColor() {
    //console.log('hair')
    var opposite = !this.state.hairColor;
    this.setState({hairColor: opposite})
  }

  showSkinTone() {
    //console.log('skin tone')
    var opposite = !this.state.skinTone;
    this.setState({skinTone: opposite})
  }

  showSkinType() {
    //console.log('skin type')
    var opposite = !this.state.skinType;
    this.setState({skinType: opposite})
  }

  getSpecificUsers(spec1, spec2) {
    //console.log('get em', spec2)
    axios.get('/specific', {
      params: {
        spec1: spec1,
        spec2: spec2
      }
    }).then((users) => {
      console.log('got specific users', users.data)
      this.setState({users: users.data})
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.users, this.state.users)
  //   if (JSON.toString(prevState.users) !== JSON.toString(this.state.users)) {
  //     console.log('not the same')
  //     this.setState({users: this.state.users})
  //   }
  // }

  sortByHelpful() {
    console.log('most helpful', this.state.users)
    var sorted = this.state.users.sort((a, b) => {
      return b.helpful - a.helpful
    })
    console.log(sorted)
    this.setState({users: sorted})
  }

  sortByHighest() {
    console.log('highest rating')
    var sorted = this.state.users.sort((a, b) => {
      return b.rating - a.rating
    })
    this.setState({users: sorted})
  }

  sortByLowest() {
    console.log('lowest rating')
    var sorted = this.state.users.sort((a, b) => {
      return a.rating - b.rating
    })
    this.setState({users: sorted})
  }

  render() {
    return (<Styles>
      <div className="RatingsAndReviews">
        <h1 className='header'>Ratings & Reviews</h1>
        <Rating/>
        <br/>
        <br/>
        <FilterSortBar sortByHelpful={this.sortByHelpful} sortByLowest={this.sortByLowest} sortByHighest={this.sortByHighest}/>
        <div className='topDivider'></div>
        <div id='filterBar'>
          <div className='filterTypes'>
            <span className="eyeColor" onClick={this.showEyeColor}>
              <span>Eye Color</span>
              <span className="dropArrow">
                <svg viewBox="0 0 95 25" className="dropArrowSvg">
                  <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                </svg>
              </span>
              <span>
                {
                  this.state.eyeColor
                    ? <div id="eyeColorOptions">
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('eyeColor', 'blue')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-blue.png" height="26px" width="26px"/>
                          <span className="wordChoice">Blue</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('eyeColor', 'brown')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-brown.png" height="26px" width="26px"/>
                          <span className="wordChoice">Brown</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('eyeColor', 'green')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-green.png" height="26px" width="26px"/>
                          <span className="wordChoice">Green</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('eyeColor', 'gray')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-grey.png" height="26px" width="26px"/>
                          <span className="wordChoice">Gray</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('eyeColor', 'hazel')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-hazel.png" height="26px" width="26px"/>
                          <span className="wordChoice">Hazel</span>
                        </div>
                        <button className="buttonChoice" onClick={() => {
                            this.getSpecificUsers()
                          }}>RESET</button>
                      </div>
                    : <div></div>
                }
              </span>
            </span>
            <span className='filterVerticalBorder'></span>
            <span className="hairColor" onClick={this.showHairColor}>
              <span>Hair Color</span>
              <span className="dropArrow">
                <svg viewBox="0 0 95 25" className="dropArrowSvg">
                  <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                </svg>
              </span>
              {
                this.state.hairColor
                  ? <div id="hairColorOptions">
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'blonde')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-blonde.png" height="26px" width="26px"/>
                        <span className="wordChoice">Blonde</span>
                      </div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'brunette')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-brunette.png" height="26px" width="26px"/>
                        <span className="wordChoice">Brunette</span>
                      </div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'auburn')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-auburn.png" height="26px" width="26px"/>
                        <span className="wordChoice">Auburn</span>
                      </div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'black')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-black.png" height="26px" width="26px"/>
                        <span className="wordChoice">Black</span>
                      </div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'red')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-red.png" height="26px" width="26px"/>
                        <span className="wordChoice">Red</span>
                      </div>
                      <div className="choice" onClick={() => {
                          this.getSpecificUsers('hairColor', 'gray')
                        }}><img src="https://www.sephora.com/img/ufe/rich-profile/haircolor-gray.png" height="26px" width="26px"/>
                        <span className="wordChoice">Gray</span>
                      </div>
                      <button className="buttonChoice" onClick={() => {
                          this.getSpecificUsers()
                        }}>RESET</button>
                    </div>
                  : <div></div>
              }
            </span>
            <span className='filterVerticalBorder'></span>
            <span className="skinTone" onClick={this.showSkinTone}>
              <span>Skin Tone</span>
              <span className="dropArrow">
                <svg viewBox="0 0 95 25" className="dropArrowSvg">
                  <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                </svg>
              </span>
              <span>
                {
                  this.state.skinTone
                    ? <div id="skinToneOptions">
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'porcelain')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-porcelain.png" height="26px" width="26px"/>
                          <span className="wordChoice">Porcelain</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'fair')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-fair.png" height="26px" width="26px"/>
                          <span className="wordChoice">Fair</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'light')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-light.png" height="26px" width="26px"/>
                          <span className="wordChoice">Light</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'medium')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-medium.png" height="26px" width="26px"/>
                          <span className="wordChoice">Medium</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'tan')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-tan.png" height="26px" width="26px"/>
                          <span className="wordChoice">Tan</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'olive')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-olive.png" height="26px" width="26px"/>
                          <span className="wordChoice">Olive</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'deep')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-deep.png" height="26px" width="26px"/>
                          <span className="wordChoice">Deep</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'dark')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-dark.png" height="26px" width="26px"/>
                          <span className="wordChoice">Dark</span>
                        </div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinTone', 'ebony')
                          }}><img src="https://www.sephora.com/img/ufe/rich-profile/skintone-ebony.png" height="26px" width="26px"/>
                          <span className="wordChoice">Ebony</span>
                        </div>
                        <button className="buttonChoice" onClick={() => {
                            this.getSpecificUsers()
                          }}>RESET</button>
                      </div>
                    : <div></div>
                }
              </span>
            </span>
            <span className='filterVerticalBorder'></span>
            <span className="skinType" onClick={this.showSkinType}>
              <span>Skin Type</span>
              <span className="dropArrow">
                <svg viewBox="0 0 95 25" className="dropArrowSvg">
                  <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                </svg>
              </span>
              <span>
                {
                  this.state.skinType
                    ? <div id="skinTypeOptions">
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinType', 'normal')
                          }}>Normal</div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinType', 'combination')
                          }}>Combination</div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinType', 'dry')
                          }}>Dry</div>
                        <div className="choice" onClick={() => {
                            this.getSpecificUsers('skinType', 'oily')
                          }}>Oily</div>
                        <button className="buttonChoice" onClick={() => {
                            this.getSpecificUsers()
                          }}>RESET</button>
                      </div>
                    : <div></div>
                }
              </span>
            </span>
          </div>
          <div className='divider'></div>
        </div>
        <div>
          {
            this.state.users.length > 0
              ? <Review users={this.state.users}/>
              : <div></div>
          }
        </div>
      </div>
    </Styles>)
  }
}

export default App

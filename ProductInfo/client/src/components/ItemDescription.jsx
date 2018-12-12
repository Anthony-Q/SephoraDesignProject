import React from "react";
import con1 from "../../dist/con1.css";
import con2 from "../../dist/con2.css";
import con3 from "../../dist/con3.css";
import con4 from "../../dist/con4.css";
import con5 from "../../dist/con5.css";
import Zoomer from "react-image-zoom";
import StarRatings from "react-star-ratings";
import axios from "axios";

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      sephoraItem: [],
      sephora: "hi",
      rating: 0
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.getRequest = this.getRequest.bind(this);
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    var num = Math.floor(Math.random() * 104);
    axios
      .get("/api", {
        params: {
          ID: num
        }
      })
      .then(response => {
        // console.log(
        //   response.data,
        //   "Proper get request! SEPHORA GANG SEPHORA GANG SEPHORA GANG"
        // );
        this.setState({ sephoraItem: response.data });
        this.setState({ rating: Number(response.data.product_rating) });
        this.setState({ img: response.data.product_img.toString() });
        console.log(this.state.img);
      })
      .catch(function(error) {
        console.log(error, "Shitty get request");
      });
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  checkImage() {}

  render() {
    if (!this.state.isHovering) {
      var variable = (
        <svg className={con5.sub5lovesSVG}>
          <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1zM8 1.988c-2.886 0-6 2.326-6 6.084 0 1.623.63 3.147 1.778 4.294L15 23.587c.533.533 1.463.535 2 0L28.22 12.364C29.368 11.217 30 9.694 30 8.07c0-3.757-3.114-6.083-6-6.083-1.174 0-2.884.31-4.364 1.792l-2.93 2.928c-.39.39-1.022.39-1.413 0l-2.93-2.93C10.884 2.3 9.174 1.99 8 1.99z" />
        </svg>
      );
    } else {
      var variable = (
        <svg className={con5.sub5lovesSVGred}>
          <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1z" />
        </svg>
      );
    }

    if (this.state.sephoraItem.product_loves) {
      var num = this.state.sephoraItem.product_loves;

      function nFormatter(num) {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num;
      }
      var prodLoves = nFormatter(num);
    }

    var photo = this.state.img;

    return (
      <div className={con1.container}>
        <div className={con1.subContainer1}>
          <div className={con1.imgZoom}>
            {this.state.img ? (
              <div>
                <Zoomer
                  width={300}
                  height={300}
                  scale={1.7}
                  offset={{ vertical: 0, horizontal: 30 }}
                  img={`${photo}`}
                  // img="https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg"
                />
                <div className={con1.sub1bottom}>
                  Roll over image to zoom in
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className={con1.margin} />
        <div className={con2.subContainer2}>
          <div className={con2.sub2name}>{this.state.sephoraItem.brand}</div>
          <div className={con2.sub2description}>
            {this.state.sephoraItem.product_name}
          </div>
          <div className={con2.sub2size}>
            SIZE 1.7 oz/ 50 mL {"\u00A0"}•{"\u00A0"} ITEM{" "}
            {this.state.sephoraItem.id}
          </div>
          <div className={con2.reviewsBox}>
            <div className={con2.stars}>
              <StarRatings
                rating={this.state.rating}
                starDimension="13px"
                starRatedColor="black"
                starSpacing="-3px"
              />
              <span> 107 reviews</span>
              <span className={con2.divider} />
              <span className={con2.loves}>
                <span>
                  <svg className={con2.lovesSVGblack}>
                    <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1z" />
                  </svg>
                </span>
                <span>{prodLoves} loves</span>
              </span>
            </div>
          </div>
        </div>
        <div className={con3.subContainer3}>
          <div className={con3.sub3price}>
            {this.state.sephoraItem.product_price}
          </div>
          <div className={con3.sub3ship}>Free Flash Shipping</div>
        </div>
        <div className={con3.subContainer4}>
          <div className={con4.sub4box}>
            <select className={con4.sub4select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <span className={con4.sub4arrow} />
          </div>
        </div>
        <div className={con5.subContainer5}>
          <div className={con5.sub5basket}>
            <button className={con5.sub5basketbutton}>Add to basket</button>
          </div>
          <div className={con5.sub5loves}>
            <button
              className={con5.sub5lovesbutton}
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
            >
              {variable}
              Add to loves
            </button>
          </div>
          <div className={con5.sub5find}>
            <div>
              <label className={con5.sub5findtext}>Find in store</label>
              <form className={con5.sub5findform}>
                <div className={con5.sub5findformbox}>
                  <input
                    className={con5.sub5findinput}
                    placeholder="Enter ZIP/Postal code"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDescription;

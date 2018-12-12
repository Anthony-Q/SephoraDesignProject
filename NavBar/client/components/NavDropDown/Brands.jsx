import React from 'react';

const Brands = props => {
  let newBrand = props.brands.filter((brand, index) => index < 5);
  let featured = props.brands.filter(
    (brand, index) => index >= 5 && index < 10
  );
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>
          <a href="/product">Brands A-Z</a>
        </h4>
        <h4>
          <a href="/product">Sephora Collection</a>
        </h4>
        <h4>New Brands</h4>
        <div>
          {newBrand.map(brand => (
            <div>
              <a href="/product">{brand}</a>
            </div>
          ))}
        </div>
        <h4>Featured Brands</h4>
        {featured.map(brand => (
          <div>
            <a href="/product">{brand}</a>
          </div>
        ))}
      </div>
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-09-13-hp-slide-charlotte-tilbury-us-ca-m-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-category-botnav-huda-us-ca-d-slice.jpg" />
      <div className="column">
        <img src="https://www.sephora.com/contentimages/meganav/medium/2018-08-16-hp-meganav-med-luxe-us-ca-d-slice.jpg" />
        <img src="https://www.sephora.com/contentimages/meganav/100517/2017-10-05-hp-meganav-sm-minimadness-gifts-d-us-slice.jpg" />
      </div>
    </div>
  );
};
export default Brands;

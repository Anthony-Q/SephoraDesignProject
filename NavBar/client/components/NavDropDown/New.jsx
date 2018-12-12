import React from 'react';

const New = props => {
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>
          <a href="/product">Just Arrived</a>
        </h4>
        <div>
          <a href="/product">Makeup</a>
        </div>
        <div>
          <a href="/product">Skincare</a>
        </div>
        <div>
          <a href="/product">Fragrance</a>
        </div>
        <div>
          <a href="/product">Hair</a>
        </div>
        <div>
          <a href="/product">Bath {'&'} Body</a>
        </div>
        <div>
          <a href="/product">Tools {'&'} Brushes</a>
        </div>
        <div>
          <a href="/product">Men</a>
        </div>
        <div>
          <a href="/product">View All</a>
        </div>
      </div>
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-meganav-lrg-foundation-finder-us-ca-d-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-category-botnav-huda-us-ca-d-slice.jpg" />
      <div className="column">
        <img src="https://www.sephora.com/contentimages/meganav/medium/2018-08-16-hp-meganav-med-luxe-us-ca-d-slice.jpg" />
        <img src="https://www.sephora.com/contentimages/meganav/100517/2017-10-05-hp-meganav-sm-minimadness-gifts-d-us-slice.jpg" />
      </div>
    </div>
  );
};
export default New;

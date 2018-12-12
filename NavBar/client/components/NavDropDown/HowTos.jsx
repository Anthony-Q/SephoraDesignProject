import React from 'react';

const HowTos = props => {
  let quizzes = [
    'Foundation Finder',
    'Skincare Finder',
    'Mascara Finder',
    'Hair Care Finder',
    'Fragrance Finder'
  ];
  let guides = ['K-Beauty', 'Clean Beauty', 'Skin Hydration', 'View All'];
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>Quizzes</h4>
        <div>
          {quizzes.map(quiz => (
            <div>
              <a href="/product">{quiz}</a>
            </div>
          ))}
        </div>
        <h4>Buying Guides</h4>
        {guides.map(guide => (
          <div>
            <a href="/product">{guide}</a>
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
export default HowTos;

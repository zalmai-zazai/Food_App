import React from 'react';
import bannerImg from '../assets/banner.jpg';
import bannerFood1 from '../assets/chili-crisp-shrimp-bowl-black.png';
import bannerFood2 from '../assets/broccoli-beef-black-bowl.png';
import bannerFood3 from '../assets/oc-bowl-2-black.png';
const Banner = () => {
  return (
    <div className="banner" id="home">
      <img className="banner-image" src={bannerImg} alt="" />
      <div className="row">
        <div className="banner-food-items col-6">
          <img className="food1" src={bannerFood1} alt="" />
          <img className="food2" src={bannerFood2} alt="" />
          <img className="food3" src={bannerFood3} alt="" />
        </div>
        <div className="banner-headings col-6">
          <div className="texts">
            <b>Best And Delicious Taste!</b>

            <p>
              with famouse foods from diffrent cusins! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ex quidem ut ratione,
              laboriosam, ullam quod culpa maxime autem nulla vitae amet
              blanditiis obcaecati, sed eveniet aliquid at officiis totam
              itaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

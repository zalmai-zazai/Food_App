import React from 'react';
import bannerImg from '../assets/banner.jpg';
const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "flickity/dist/flickity.min.css";
import Flickity from 'react-flickity-component';

import categoriUrlImg1 from '../../img/meet.png';
import categoriUrlImg2 from '../../img/lunch.png';
import categoriUrlImg3 from '../../img/sweets.png';

const items = [
  {urlImage: categoriUrlImg1, link: '#', alt: 'MEAT image', title: 'MEAT'},
  {urlImage: categoriUrlImg2, link: '#', alt: 'COMPLETE LUNCH image', title: 'COMPLETE LUNCH'},
  {urlImage: categoriUrlImg3, link: '#', alt: 'SWEETS image', title: 'SWEETS'},
  {urlImage: categoriUrlImg1, link: '#', alt: 'Sandwich image', title: 'Sandwich'},
  {urlImage: categoriUrlImg2, link: '#', alt: 'Soup image', title: 'Soup'},
];

{/* TODO: uncomment when items will get from props
// const CategoriesListItem = {
//   urlImage: PropTypes.string,
//   link: PropTypes.string,
//   url: PropTypes.string,
//   alt: PropTypes.string,
//   title: PropTypes.string,
// };
*/}

const Categories = () => {
  const optionCategoriesSlider = {
    pageDots: true,
    initialIndex: 2,
    contain: true,
    freeScroll: true,
    cellSelector: ".categories-slider__slide",
  }

  const sliderItems = items.map((slide, i) => {
    return (
      <div className="categories-slider__slide" key={i} >
        <div className="image-holder">
          <img src={slide.urlImage} alt={slide.alt}/>
        </div>
        <Link to={slide.link} className="slide-title">{slide.title}</Link>
      </div>
    );
  });
  return (
  <div className="categories">
    <div className="container">
      <div className="categories-content">
        <h2>Categories</h2>
        <Flickity className={'categories-slider'}
          options={optionCategoriesSlider} reloadOnUpdate>
          {sliderItems}
        </Flickity>
      </div>
    </div>
  </div>
  )
};

Categories.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.shape(CategoriesListItem)).isRequired,
};

export default Categories;

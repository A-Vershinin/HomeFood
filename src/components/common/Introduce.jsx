import React from 'react';
// import PropTypes from 'prop-types';


import IntroduceImage1 from '../../img/image-1.svg';
import IntroduceImage2 from '../../img/image-2.svg';
import IntroduceImage3 from '../../img/image-3.svg';

const items = [
  {imageSrc: IntroduceImage1, alt: 'some image', text: 'farm fresh ingredients and delivered to your doorstep'},
  {imageSrc: IntroduceImage2, alt: 'some image', text: 'farm fresh ingredients and delivered to your doorstep'},
  {imageSrc: IntroduceImage3, alt: 'some image', text: 'farm fresh ingredients and delivered to your doorstep'},
  {imageSrc: IntroduceImage2, alt: 'some image', text: 'farm fresh ingredients and delivered to your doorstep'},
];

{/* TODO: uncomment when items will get from props
// const IntroduceListItem = {
//   imageSrc: PropTypes.string,
//   url: PropTypes.string,
//   alt: PropTypes.string,
// };
*/}

const Introduce = () => {
  const listItems = items.map((item, i) => {
      return (
        <div key={i} className="introduce-item">
          <div className="image-holder">
            <img src={item.imageSrc} alt={item.alt} />
          </div>
          <span className="text-title">{item.text}</span>
        </div>
      );
  });

  return (
  <div className="introduce">
    <div className="container">
      <div className="introduce-content">
        <h2>HOW IT WORKS</h2>
        <div className="introduce-block">
          {listItems}
        </div>
      </div>
    </div>
  </div>
  );
}

Introduce.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.shape(IntroduceListItem)).isRequired,
};

export default Introduce;

import React from 'react';

// import required Swiper modules and styles
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = ({ children }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      slidesPerGroup={2}
      loop={true}
      loopFillGroupWithBlank={false}
      navigation={true}
      modules={[Navigation]}
      className='swiper-container'
    >
      {children}
    </Swiper>
  );
};

export default Carousel;

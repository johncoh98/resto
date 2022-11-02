import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import {images} from '../../constants'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <h1 className='headtext__cormorant'>Gallery</h1>
      <p className='p__opensans' style={{color:"AAA", marginTop:"2rem" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel, iste voluptas, accusamus, illum omnis blanditiis rerum fuga perferendis minima delectus. Aut, soluta. Similique laborum, nemo voluptas praesentium enim labore.</p>
      <button type='button' className='custom__button'>More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image,index)=>(
          <div className='app__gallery-images_card flex__center' key={'gallery_image-${index+1}'}>
            <img src={image} alt="gallery_image" />
          </div>
        ))}

      </div>
      <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>

    </div>
  </div>
);
}

export default Gallery;

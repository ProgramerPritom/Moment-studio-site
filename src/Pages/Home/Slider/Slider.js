import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../../images/333 .jpg';
import sliderImg2 from '../../../images/1.jpg';
import sliderImg3 from '../../../images/3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{height: "550px"}}
          className="d-block w-100"
          src={sliderImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Awesome Caption!</h3>
          <p>Perfect Click, set a moment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: "550px"}}
          className="d-block w-100"
          src={sliderImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Analysis Product</h3>
          <p>Product Analysis recommended a Perfect Photographer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: "550px"}}
          className="d-block w-100"
          src={sliderImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best Event Capture</h3>
          <p>
           All special event important for all.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
   
};

export default Slider;
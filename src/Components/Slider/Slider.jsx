import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100 h-40 S_ed"
        src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
        alt="First slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 h-40  S_ed"
        src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
        alt="First slide"
    />
    </Carousel.Item>
    
    
   
</Carousel>
)
}

export default Slider;
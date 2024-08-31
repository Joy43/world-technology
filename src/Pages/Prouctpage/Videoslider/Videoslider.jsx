import  { useRef, useEffect } from 'react';
import { Player } from 'video-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'video-react/dist/video-react.css';
import Vid1 from '../../.././assets/vidslide/1.mp4';
import Vid2 from '../../.././assets/vidslide/2.mp4';
import Vid3 from '../../.././assets/vidslide/3.mp4';
import Vid4 from '../../.././assets/vidslide/4.mp4';
import Vid5 from '../../.././assets/vidslide/5.mp4';

const videos = [Vid1, Vid2, Vid3, Vid4, Vid5];

const Videoslider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      slider.slickNext(); // Move to the next slide
    }, 5000); // Set the autoplay interval in milliseconds (e.g., 5000 for 5 seconds)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Disable the slider's autoplay since we're controlling it manually
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {videos.map((src, index) => (
          <div key={index}>
            <div className="video-container">
              <Player>
                <source src={src} />
              </Player>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Videoslider;

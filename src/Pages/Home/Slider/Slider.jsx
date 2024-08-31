import { useState, useEffect } from "react";

const images = [
  {
    url: "https://i.ibb.co/JFmR5RJ/1.png",
  },
  {
    url: "https://i.ibb.co/8Nt8kHx/2.png",
  },
  {
    url: "https://i.ibb.co/7CXJyQ8/3.png",
  },
  {
    url: "https://i.ibb.co/vcfpMY8/4.png",
  },
  {
    url: "https://i.ibb.co/T4GRPJJ/5.png",
  },
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* -----------left image----------- */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        <div className="image-container">
          <div className=" absolute text-center">
            {/* Title and description elements removed */}
          </div>
          <img
            src={images[currentImage].url}
            alt="Carousel"
            className="carousel-image min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover "
          />
        </div>
        {/* arrow right */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Carousel;

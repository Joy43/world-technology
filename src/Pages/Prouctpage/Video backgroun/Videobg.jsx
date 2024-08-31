import './Videobg.css'
import video1 from '../../../assets/vidslide/1.mp4'
import video2 from '../../../assets/vidslide/2.mp4'
import video3 from '../../../assets/vidslide/3.mp4'
import video4 from '../../../assets/vidslide/4.mp4'
import video5 from '../../../assets/vidslide/5.mp4'
import video6 from '../../../assets/vidslide/6.mp4'
import { useState } from 'react'


const Videobg = () => {
    const [currentVideo, setCurrentVideo] = useState(video1);

    const handleVideoChange = (newVideo) => {
        setCurrentVideo(newVideo);
    };
    return (
        <div className=''>

        <div className="home" id="home">
           

            <div className="controls">
                <span
                    className={`vid-btn ${currentVideo === video1 ? 'active' : ''}`}
                    data-src={video1}
                    onClick={() => handleVideoChange(video1)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video2 ? 'active' : ''}`}
                    data-src={video2}
                    onClick={() => handleVideoChange(video2)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video3 ? 'active' : ''}`}
                    data-src={video3}
                    onClick={() => handleVideoChange(video3)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video4 ? 'active' : ''}`}
                    data-src={video4}
                    onClick={() => handleVideoChange(video4)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video5 ? 'active' : ''}`}
                    data-src={video5}
                    onClick={() => handleVideoChange(video5)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video6 ? 'active' : ''}`}
                    data-src={video6}
                    onClick={() => handleVideoChange(video6)}
                ></span>
            </div>

            <div className="video-container">
                <video src={currentVideo} id="video-slider" loop autoPlay muted></video>
            </div>
        </div>
    </div>
    );
};

export default Videobg;
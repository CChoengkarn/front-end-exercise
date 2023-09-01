import React from 'react';
import ReactPlayer from 'react-player';
import versus from "../images/versus.png";





const VideoPlayer = ({activeSlide, prevSlide, nextSlide}) => {
  return (
    <div className="container">
      <div className="relative">
        <div style={{position:'absolute', top: 450, right: 20, zIndex: 200, background: '#FFFFFF'}}>
          <a onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <a onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <div style={{position:'absolute', top: -160, zIndex: 300, marginLeft: -620 }}>
            <img src={versus} alt="versus"/>
          </div>
        </div>
        <ReactPlayer
          url={activeSlide.video}
          controls={true}
          width="700px"
          height="959px"
          playing={true}
        />
      </div>
   </div>
   

  );
};

export default VideoPlayer;



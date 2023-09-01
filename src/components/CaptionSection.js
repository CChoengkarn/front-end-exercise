import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
// import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
//https://tailwindcss.com/docs/backdrop-blur

const CaptionSection = ({activeSlide}) => {
    return (
        <div className="container">
            <div className = "caption-section">
                <div className="px-6">
                    <img src={activeSlide.imageUrl} width={80} height={80} alt={activeSlide.partner} class="pt-2.5 shadow rounded-full max-w-full h-auto align-middle border-none" /> 
                </div>
                <div className="h-[20px]"></div>
                <div className="paragraph">
                    <h3 className="text-2xl text-black font-bold text-left mx-6">@{activeSlide.partner}</h3>
                    <p className="text-left text-lg font-medium max-w-xl mx-6">{activeSlide.question}</p>
                </div>
                <div className="h-[20px]"></div>
                <div className="flex flex-row items-center">
                    <a className="rounded-full bg-white answer-a font-bold text-pink-500 float-left text-lg border border-zinc-400 text-center py-5 pl-5 pr-6 ml-8">{activeSlide.answerA}</a>
              
                    <div className="h-[40px] w-[40px] -mx-5 rounded-full bg-gray-800 text-white text-center leading-[40px] z-50">V</div>
                    
                    <a className="rounded-full bg-white answer-b font-bold text-emerald-400 float-right text-lg border border-zinc-400 text-center py-5 pl-6 pr-8 mr-37">{activeSlide.answerB}</a>
                </div>
            </div>
        </div>
   
       
      
    );
}



export default CaptionSection;


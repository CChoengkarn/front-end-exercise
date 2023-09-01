import { useState, useEffect, useCallback } from 'react';
import SideHeader from '../components/SideHeader';
import VideoPlayer from '../components/VideoPlayer';
import CaptionSection from './CaptionSection';
import user from '../images/user.png';
//https://picsum.photos/


const data = [
    {
        question: "Maruris massa sem malesuadfjs fakljfaklf Maruris massa sem malesuadfjsfa kljfaklf Maruris massa sem malesuadf jsfakljfaklf Maruris massa sem malesuadf jsfakljfaklf Maruris massa sem malesuadfj sfakljfaklf",
        partner: "PartnerName",
        answerA: "SIDE A ANSWER GOES HERE",
        answerB: "SIDE B ANSWER GOES HERE",
        imageUrl: "https://picsum.photos/seed/PartnerName/80/80",
        video: "https://youtu.be/9ovoj-dwHmw"
    },
    {
        question: "Maruris massa sem malesuadfjs fakljfaklf Maruris massa massa sem malesuadf jsfakljfaklf Maruris massa sem malesuadfj sfakljfaklf",
        partner: "PartnerName2",
        answerA: "SIDE A2 ANSWER GOES HERE",
        answerB: "SIDE B2 ANSWER GOES HERE",
        imageUrl: "https://picsum.photos/seed/PartnerName2/80/80",
        video: "https://youtu.be/lwFfLH4nz6c?si=wnZ45CecQaKRqeuX"
    },
    {
        question: "Maruris massa sem malesuadfjs fakljfaklf Maruris massa sem malesuadfjsfa kljfaklf Maruris massa sem malesuadf",
        partner: "PartnerName3",
        answerA: "SIDE A3 ANSWER GOES HERE",
        answerB: "SIDE B3 ANSWER GOES HERE",
        imageUrl: "https://picsum.photos/seed/PartnerName3/80/80",
        video: "https://youtu.be/OnTUwiDDSaQ?si=ocDhmuBsJfFZip5s"
    }
]

function HomePage() {

    const [index, setIndex] = useState(0);



    useEffect(() => {
        if (index === 1) {
            //alert('Test banner.');
        }
    }, [index]);

    const prevSlide = useCallback(() => {
        if(index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    },[data, index]);

    const nextSlide = useCallback(() => {
        if(index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    },[data, index]);

    return (
        <div className="App">
            <div class="flex flex-row">
            <div class="basis-1/4">
            <SideHeader />
            </div>
            <div class="basis-1/4">
            <VideoPlayer activeSlide={data[index]} nextSlide={nextSlide} prevSlide={prevSlide} />
            </div>  
            <div class="basis-1/2">
            <CaptionSection activeSlide={data[index]} anotherProp={1} />
            </div> 
       </div>
            </div>
    );
}

export default HomePage;




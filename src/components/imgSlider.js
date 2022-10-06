import './imgSlider.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bannerimg from '../components/Images/bannerimg.jpg';
import bannerimg1 from '../components/Images/bannerimg1.jpg';
import bannerimg2 from '../components/Images/bannerimg2.jpg';
import bannerimg3 from '../components/Images/bannerimg3.jpg';


const slides = [
    {
        image: bannerimg
    },

    {
        image: bannerimg1
    },

    {
        image: bannerimg2
    },

    {
        image: bannerimg3
    },
]

export default function Slider() {

    return (
        <div className="slider-container">
            <Slide>
                {slides.map((slides, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slides.image} width={1366} />
                    </div>
                ))}
                </Slide>
        </div> 

    );
                }

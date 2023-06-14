import React from 'react';
import Carousel from '../component/Carousel';
import '../style/slider.css';

const Slider = () => {

    const slides = [
        {
            title: "Welcome My Blog1",
            content: () => (
                <img src="images/tele.jpg" alt="tele" />
            )
        },
        {
            title: "Welcome My Blog2",
            content: () => (
                <img src="images/playing.jpg" alt="playing" />
                )

        },
        {
            title: "Welcome My Blog3",
            content: () => (
                    <img src="images/Hollow.jpg" alt="Hollow" />
            )
            
        },
        {
            title: "Welcome My Blog4",
            content: () => (
                    <img src="images/lespaul3.jpg" alt="lespaul" />
            )

        },
        {
            title: "Welcome My Blog5",
            content: () => (
                    <img src="images/fender-head.jpg" alt="fender-head" />
            ),
        }
        
    ];

    return (
        <div className='container'>
            <Carousel slides={slides} speed={3000} />
        </div>
    );
};

export default Slider;
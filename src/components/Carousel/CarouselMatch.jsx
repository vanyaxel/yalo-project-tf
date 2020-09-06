import React, { useState } from 'react';
import CarouselSlide from './Carousel';
import { SLIDE_INFO } from './carouselCont';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './carousel.css';


const CarouselMatch = () => {
    function Arrow(props) {
        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <ArrowBackIosIcon color='primary' /> : <ArrowForwardIosIcon color='primary'/>;
    
        return <div onClick={clickFunction}>{icon}</div>;
    };
    
    
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;
    
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    return (
        <div className='carouselito'>
            <CarouselSlide 
                content={content} />
                <div className='arroow'>
                <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}/>
                <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}/>
                </div>
        </div>
    );
}

export default CarouselMatch;
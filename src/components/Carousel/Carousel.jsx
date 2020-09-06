import React from 'react';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const CarouselSlide = (props) => {
    const { backgroundImage } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            marginTop: '7px',
            backgroundImage,
            backgroundSize: 'contain',
            height: '30vh',
            width: '90vw',
            margin: '0',
            display: 'flex',
            padding: 10,
        } 
    }));

    const classes = useStyles();

    return (
        <div>
        <CardMedia className={classes.card}/>
        </div>
    );
}

export default CarouselSlide;
import React from 'react';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const CarouselSlide = (props) => {
    const { backgroundImage } = props.content;

    const useStyles = makeStyles(() => ({
        containerCard: {
            margin: '10px'
        },
        card: {
            backgroundImage,
            backgroundSize: 'contain',
            height: '30vh',
            margin: '0',
            display: 'flex',
            padding: 10,
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.containerCard}>
            <CardMedia className={classes.card} />
        </div>
    );
};

export default CarouselSlide;
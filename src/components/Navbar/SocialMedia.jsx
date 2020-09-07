import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    iconNavbar: {
        color: '#ffff',
    },
    containerIcon: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0 60px',
    }
});

const SocialMedia = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerIcon}>
            <TwitterIcon className={classes.iconNavbar} />
            <FacebookIcon className={classes.iconNavbar} />
            <InstagramIcon className={classes.iconNavbar} />
        </div>
    );
};

export default SocialMedia;
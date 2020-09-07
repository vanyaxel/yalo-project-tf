import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textBtnAppointment: {
        textDecoration: 'none'
    },
    btnAppoitment: {
        margin: '10px',
        height: '50px',
        width: '250px',
        fontSize: '16px'
    },
});

const Btn = (props) => {
    const classes = useStyles();
    return (
        <Link to={props.link} className={classes.textBtnAppointment}>
            <Button variant="contained" color="primary" className={classes.btnAppoitment} onClick={props.click}>
                {props.title}
            </Button>
        </Link>
    );
};

export default Btn;
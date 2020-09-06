import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardServices from './CardServices';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const ServicesMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.viewMenuService}>
            <Typography variant="h1" color="initial" className={classes.titleView} >
                Servicios
            </Typography>
            <CardServices />
            <Link to='/services' className={classes.textBtnAppointment}><Button variant="contained" color="primary" className={classes.btnAppoitment}>
                Agendar una cita
            </Button></Link>
            <Link to='/appointment' className={classes.textBtnAppointment}><Button variant="contained" color="primary" className={classes.btnAppoitment}>
                Historial servicios
            </Button></Link>
        </div>
    );
};

export default ServicesMenu;
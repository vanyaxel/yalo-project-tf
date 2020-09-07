import React from 'react';
import Calendar from './Calendar';
import ModalAppointment from './ModalAppointment';
import useStyles from './styles';

const Services = () => {

    const classes = useStyles();

    return (
        <div className={classes.viewAppointment}>
            <Calendar />
        </div>
    );
};

export default Services;
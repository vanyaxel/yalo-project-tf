import React from 'react';
import CardAppointment from './CardAppointment';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Appointment = () => {

    const classes = useStyles();

    return (
        <div className={classes.viewMenuService} >
            <Typography variant="h1" color="initial" className={classes.titleView}>
                Historial de servicios
            </Typography>
            <div className={classes.containerCardsAppointment}>
                <CardAppointment service='Cita para mantenimiento' date='10 de enero de 2020' />
                <CardAppointment service='Cita para revisión' date='08 de abril de 2020' />
                <CardAppointment service='Cita para revisión' date='18 de mayo de 2020' />
                <CardAppointment service='Cita para reparación' date='30 de agosto de 2020' />

            </div>
        </div>
    );
};

export default Appointment;     
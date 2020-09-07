import React, { useState, useEffect } from 'react';
import CardAppointment from './CardAppointment';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { db } from '../../firebaseConfig';

const useAppointments = () => {
    const [allAppointment, setAllAppointment] = useState([]);

    useEffect(() => {
        db
            .collection('appointments')
            .onSnapshot((snapshot) => {
                const newAppointment = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAllAppointment(newAppointment);
            });
    }, []);
    return allAppointment;
};

const Appointment = () => {

    const classes = useStyles();

    const appointment = useAppointments();

    return (
        <div className={classes.viewMenuService} >
            <Typography variant="h1" color="initial" className={classes.titleView}>
                Historial de servicios
            </Typography>
            <div className={classes.containerCardsAppointment}>
                {
                    appointment.map(appointment =>
                        <div>
                            <CardAppointment appointment={appointment} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Appointment;     
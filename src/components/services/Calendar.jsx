import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { db } from '../../firebaseConfig';
import ModalAppointment from './ModalAppointment';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dateHourContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '5px 0'
    },
    viewMenuService: {
        margin: '20px'
    },
    cardContainer: {
        padding: '10px !important'
    },
    note: {
        fontSize: '12px',
        margin: '0 0 10px 0 '
    },
    btnApp: {
        float: 'right',
        marginTop: '15PX'
    }
});

export default function MaterialUIPickers() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date('2020-09-10T18:00:00'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [service, setService] = useState("Servicio");
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [openModal, setOpenModal] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const day = selectedDate.toString();

    const handleAddOrder = () => {
        db.collection("appointments").add({
            date: day,
            service: service
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                setOpenModal(true);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    };


    return (
        <div className={classes.viewMenuService}>
            <Typography variant="h1" color="initial" className={classes.titleView}>
                Historial de servicios
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <div className={classes.dateHourContainer}>
                    <Typography className={classes.note}>
                        Recuerda nuestro horario de atención lunes a domingo de 11:00 am a 7:00 pm
                    </Typography>
                    <Typography variant="h5" color="initial">Elige la fecha para tu cita</Typography>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Typography variant="h5" color="initial">Elige la hora para tu cita</Typography>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <FormControl>
                        <Typography variant="h5" color="initial">Elige el servicio</Typography>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={service}
                            onChange={handleChange}
                        >
                            <MenuItem value="Reparación">Reparación</MenuItem>
                            <MenuItem value="Mantenimiento">Mantenimiento</MenuItem>
                            <MenuItem value="Revisión">Revisión</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Card variant="outlined" >
                    <CardContent className={classes.cardContainer}>
                        <Typography variant="h5" >
                            Resumen de cita
                    </Typography>
                        <Typography variant="body2" component="p">
                            Fecha y hora elegida:
                        <br />
                            {day}
                            <br />
                    Para el servicio de : {service}
                        </Typography>
                    </CardContent>
                </Card>
            </MuiPickersUtilsProvider >
            <div className={classes.btnApp}>
                <ModalAppointment handleAddOrder={handleAddOrder} handleCloseModal={handleCloseModal} openModal={openModal}
                />
            </div>
        </div>

    );
}


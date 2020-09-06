import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dateHourContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '25px 0'
    },
    viewMenuService: {
        margin: '20px'
    },
    cardContainer: {
        padding: '10px !important'
    },
});

export default function MaterialUIPickers() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-09-10T18:00:00'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [service, setService] = React.useState("Servicio");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const day = selectedDate.toString();

    return (
        <div className={classes.viewMenuService}>
            <Typography variant="h1" color="initial" className={classes.titleView}>
                Historial de servicios
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <div className={classes.dateHourContainer}>
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
                        <Typography variant="body1" component="p">
                            Fecha y hora elegida:
                        <br />
                            {day}
                            <br />
                    Para el servicio de : {service}
                        </Typography>
                    </CardContent>
                </Card>
            </MuiPickersUtilsProvider >
        </div>

    );
}


import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function AlertDialog({ handleAddOrder, handleCloseModal, openModal }) {

    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleAddOrder} className={classes.btnAcceptApp}>
                Agendar
            </Button>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Cita agendada"}</DialogTitle>
                <DialogContent>
                    <CheckCircleOutlineIcon className={classes.checkIcon} />
                    <DialogContentText id="alert-dialog-description">
                        Tu cita ha sido agendada, en unos momentos recibiras un correo electrónico de confirmación.
                        Cualquier duda, puedes ponerte en contacto con nosotros.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to='/dashboard'>
                        <Button onClick={handleCloseModal} variant='contained' color="primary" autoFocus>
                            Aceptar
                    </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

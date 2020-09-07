import React from 'react';
import Typography from '@material-ui/core/Typography';
import Btn from '../dashboard/btn/Btn';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    viewPayment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
        position: 'relative',
        top: '30px',
    },
    containerPaypal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    }
});

const Payment = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.viewPayment}>
                <Typography variant="h1" color="initial" className={classes.titleView}>
                    Método de pago
            </Typography>
                <div className={classes.containerPaypal}>
                    <div id="paypal-button-container"></div>
                </div>

            </div>
        </>

    );
};

export default Payment;
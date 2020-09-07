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
    titleView: {
        width: '90%'
    },
    creditCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '20px 0'
    },
    textView: {
        width: '90%'
    },
    inputCard: {
        width: '300px'
    },
    containerBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        height: '2px',
        backgroundColor: '#FED45E',
        marginTop: '90px'
    }
});

const Payment = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.viewPayment}>
                <Typography variant="h1" color="initial" className={classes.titleView}>
                    Registro de forma de pago
            </Typography>
                <div className={classes.creditCard}>
                    <Typography variant="body1" color="initial" className={classes.textView}>
                        Número de
                        tarjeta
                </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            placeholder='1234-1234-1234-1234'
                            id="mui-theme-provider-outlined-input"
                            className={classes.inputCard}
                        />
                    </form>
                    <Typography variant="body1" color="initial" className={classes.textView}>
                        Fecha de expiración
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            id="mui-theme-provider-outlined-input"
                            placeholder='mm/yy'
                        />
                    </form>

                    <Typography variant="body1" color="initial" className={classes.textView}>
                        CVV
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            id="mui-theme-provider-outlined-input"
                            placeholder='987'
                        />
                    </form>
                </div>
                <div className={classes.containerBtn}>
                    <Btn title='Guardar cambios' link='/dashboard' />
                    <div className={classes.line}></div>
                </div>
            </div>

        </>

    );
};

export default Payment;
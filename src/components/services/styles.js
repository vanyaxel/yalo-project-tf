import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    viewMenuService: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
        position: 'relative',
        top: '30px',
    },
    root: {
        minWidth: 275,
        margin: '5px 20px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textService: {
        padding: '10px !important'
    },
    btnAppoitment: {
        margin: '10px',
        height: '50px',
        width: '250px',
        fontSize: '16px'
    },
    textBtnAppointment: {
        textDecoration: 'none'
    },
    containerCardsAppointment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px'
    },
    titleView: {
        width: '90%'
    },
    viewAppointment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
        top: '30px',
    },
    btnAcceptApp: {
        marginRight: '20px'
    },
    checkIcon: {
        color: '#5B5BEE',
        fontSize: '80px',
        textAlign: 'center',
        width: '100%',
        marginBottom: '20px',
    }
});

export default useStyles;

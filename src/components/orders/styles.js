import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    viewOrders: {
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
    }
});

export default useStyles;
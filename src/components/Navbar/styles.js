import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        background: '#3732A7',
        paddingBottom: '5px',
    },
    firstPart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100vw',
        alignItems: 'center'
    },
    firstPart1: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 10px 0 0',
    },
    firstPart2: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 10px 0 0',
    },
    search: {
        width: '97%',
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
        borderRadius: '10px',
        paddingLeft: '10px'
    },
    searchIcon: {
        background: '#5B5BEE',
        padding: '5px 10px',
    },
    iconMenu: {
        color: '#ffff'
    },
    logoYalo: {
        width: '40px'
    }
}));

export default useStyles;
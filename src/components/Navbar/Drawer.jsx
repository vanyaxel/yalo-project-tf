import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TodayIcon from '@material-ui/icons/Today';
import Typography from '@material-ui/core/Typography';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import logo from '../../images/logo.png';
import './navbar.css';
import SocialMedia from './SocialMedia';

const useStyles = makeStyles({
    list: {
        width: 'fit-content',
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper: {
        background: '#3732A7',
        width: '300px'
    },
    headerNavbar: {
        position: 'relative',
        top: '50px',
        margin: '20px 45px'
    },
    logoNavbar: {
        width: '50px',
    },
    listItem: {
        height: '50px',
        position: 'relative',
        top: '90px',
        margin: '5px 20px'
    },
    iconMenu: {
        color: '#ffff'
    },
    linkNavbar: {
        textDecoration: 'none'
    },
    textNavbar: {
        color: '#ffff',
        fontSize: '14px',
        textTransform: 'initial',
    },
    iconNavbar: {
        color: '#ffff',
    },
    socialMedia: {
        position: 'relative',
        top: '175px',
        margin: '15px 20px',
        width: '90%',
        borderTop: 'solid 1px #5A54F2',
        paddingTop: '20px'
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
            >
                <div className={classes.headerNavbar} >
                    <img src={logo} alt="logo" className={classes.logoNavbar} />
                    <Typography variant="h5" className={classes.textNavbar}>¡Hola!</Typography>
                </div>
                <ListItem className={classes.listItem}>
                    <Link to='/profile' className={classes.linkNavbar}>
                        <Button>
                            <ListItemIcon><PersonIcon className={classes.iconNavbar} /></ListItemIcon>
                            <Typography variant="h5" className={classes.textNavbar} >Perfil</Typography>
                        </Button>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link to='/dashboard' className={classes.linkNavbar} >
                        <Button>
                            <ListItemIcon><ImportContactsRoundedIcon className={classes.iconNavbar} /></ListItemIcon>
                            <Typography variant="h5" className={classes.textNavbar} >Catálogo</Typography>
                        </Button>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link to='/orders' className={classes.linkNavbar} >
                        <Button>
                            <ListItemIcon><ShoppingBasketIcon className={classes.iconNavbar} /></ListItemIcon>
                            <Typography variant="h5" className={classes.textNavbar} >Historial de pedidos</Typography>
                        </Button>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link to='/menu-services' className={classes.linkNavbar} >
                        <Button>
                            <ListItemIcon><TodayIcon className={classes.iconNavbar} /></ListItemIcon>
                            <Typography variant="h5" className={classes.textNavbar} >Servicios</Typography>
                        </Button>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link to='/payment' className={classes.linkNavbar} >
                        <Button>
                            <ListItemIcon><PaymentIcon className={classes.iconNavbar} /></ListItemIcon>
                            <Typography variant="h5" className={classes.textNavbar} >Método de pago</Typography>
                        </Button>
                    </Link>
                </ListItem>
            </List >
            <div className={classes.socialMedia}>
                <SocialMedia />
            </div>
        </div >
    );

    return (
        <div >
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.iconMenu} /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

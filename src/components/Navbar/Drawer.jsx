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
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TodayIcon from '@material-ui/icons/Today';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import './navbar.css';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper: {
        background: 'lightgray'
    },
    iconMenu: {
        color: '#ffff'
    },
    linkIconMenu: {

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
                <ListItem >
                    <Link to='/profile'>
                        <Button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary='Perfil' />
                        </Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link to='/dashboard'>
                        <Button>
                            <ListItemIcon><ImportContactsRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Catálogo' />
                        </Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link to='/orders'>
                        <Button>
                            <ListItemIcon><ShoppingBasketIcon /></ListItemIcon>
                            <ListItemText primary='Mis pedidos' />
                        </Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link to='/menu-services'>
                        <Button>
                            <ListItemIcon><TodayIcon /></ListItemIcon>
                            <ListItemText primary='Servicios' />
                        </Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link to='/settings'>
                        <Button>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary='Ajustes' />
                        </Button>
                    </Link>
                </ListItem>
            </List>
            <Divider />
        </div>
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

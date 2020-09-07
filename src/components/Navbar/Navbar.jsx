import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from './Drawer';
import logo from '../../images/logo.png';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './styles';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    const productAdded = props.productAdded;

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const numItems = productAdded.products.length;


    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar position="fixed" className={classes.bckNavbar}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.firstPart}>
                            <div className={classes.firstPart1}>
                                <Drawer />
                                <img src={logo} alt="logo" className={classes.logoYalo} />
                            </div>
                            <div className={classes.firstPart2}>
                                <Link to='/login'>
                                    <Typography variant="h5" color="initial" className={classes.iconMenu}>
                                        Iniciar sesión
                            </Typography>
                                </Link>
                                <Link to='/cart'>
                                    <IconButton aria-label="show 17 new notifications" color="inherit">
                                        <Badge badgeContent={numItems} color="secondary">
                                            <ShoppingCartIcon className={classes.iconMenu} />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Busqueda..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}

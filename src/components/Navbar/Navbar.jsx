import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';
import logo from '../../images/logo.png';
import useStyles from './styles';

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <div >
            <AppBar position="static" className={classes.bckNavbar}>
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
                                    <Badge badgeContent={1} color="secondary">
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
        </div >
    );
}

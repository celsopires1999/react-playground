import * as React from 'react';
import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from '@material-ui/core';
import logo from '../../static/img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    login: {
        backgroundColor: "#ffffff",
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')]: {
            width: 170
        }
    }
}));

export const Navbar: React.FC = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <IconButton 
                    edge="start"
                    color="inherit" 
                    aria-controls="menu-appbar" 
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    transformOrigin={{vertical:'top', horizontal: 'center'}}
                    getContentAnchorEl={null}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Typography className={classes.title}> 
                    <img src={ logo } alt="CodeFlix" className={classes.logo} />
                </Typography>
                <Button className={classes.login}>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

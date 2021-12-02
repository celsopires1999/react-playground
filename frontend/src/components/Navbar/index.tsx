import * as React from 'react';
import { AppBar, makeStyles,  Theme, Toolbar } from '@material-ui/core';
import { Menu } from './Menu';

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000',
    },
}));

export const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu />
            </Toolbar>
        </AppBar>
    );
};

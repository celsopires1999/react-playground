import { Chip, createTheme, MuiThemeProvider } from '@material-ui/core';
import * as React from 'react';
import theme from '../theme';

const localTheme = createTheme({
    palette: {
        primary: theme.palette.success2,
        secondary: theme.palette.error,
    }
});

export const BadgeYes = () => {
    return (
        <MuiThemeProvider theme={localTheme}>
            <Chip label={'Sim'} color='primary'/>
        </MuiThemeProvider>
    );
};

export const BadgeNo = () => {
    return (
        <MuiThemeProvider theme={localTheme}>
            <Chip label={'Não'} color='secondary'/>
        </MuiThemeProvider>
    );
};

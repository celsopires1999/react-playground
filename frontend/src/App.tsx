import { Box } from '@material-ui/core';
import React from 'react';
import { Navbar } from './components/Navbar';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Box paddingTop={'70px'} >
        <AppRouter />
      </Box>
    </React.Fragment>
  );
}

export default App;

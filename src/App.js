import React from 'react';
import './App.css';
import HomeScreen from './infra/view/page/HomeScreen.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
  },
)
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HomeScreen/>
    </MuiThemeProvider>
  );
}

export default App;

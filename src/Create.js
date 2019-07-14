import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CreateGame from './infra/view/page/CreateGame';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
  },
)
function Create() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <CreateGame/>
    </MuiThemeProvider>
  );
}

export default Create;

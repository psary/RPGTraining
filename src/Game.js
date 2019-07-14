import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GamePage from './infra/view/page/GamePage';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
  },
)

function Game(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GamePage history={props.history} location={props.location} match={props.match}/>
    </MuiThemeProvider>
  );
}

export default Game;

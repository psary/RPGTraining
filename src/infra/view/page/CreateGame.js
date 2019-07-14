import React, { Component } from 'react';
import Header from '../common/Header.js';
import './CreateGame.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import {createGame} from  '../../adapter/GameAdapter.js';

class CreateGame extends Component {

    constructor(props){
        super(props);
        this.state={
            openSuccess: false,
            openError: false,
            name: ''
        }
    }

    handleChange(event){
        this.setState({'name': event.target.value});
    }

    addGame(){
        console.log(this.state.name)
        if(this.state.name && this.state.name !== ""){
            createGame(this.state.name).then(id => {
                this.props.history.push({pathname: '/game/'+id, id: id});
            });
        }
        this.setState({openError: true})
    }
    

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({openError: false, openSuccess: false});
  }

    render() {
        return (
            <div>
                <div>
                    <Header />
                    <div className="create_game_form">
                        <TextField
                            classes={{
                                root: "textfield-root"
                            }}
                            id="outlined-name"
                            label="Name"
                            color="primary"
                            onChange={this.handleChange.bind(this)}
                            margin="normal"
                            className="create_name_input"
                            variant="outlined"
                        />
                        <Button className="create_name_button" variant="contained"  color="primary" onClick={() => this.addGame()} >Créer</Button>
                    </div>
                </div>
                <div>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={this.state.openSuccess}
                        autoHideDuration={6000}
                        onClose={this.handleClose.bind(this)}
                    >
                        <SnackbarContent
                            className="snack-success"
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className="message" >
                                <CheckCircleIcon className="success snack-icon" />
                                Success !
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose.bind(this)}>
                                <CloseIcon />
                                </IconButton>,
                            ]}
                        />
                    </Snackbar>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={this.state.openError}
                        autoHideDuration={6000}
                        onClose={this.handleClose.bind(this)}
                    >
                        <SnackbarContent
                            className="snack-error"
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className="message" >
                                <ErrorIcon className="error snack-icon" />
                                Error !
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose.bind(this)}>
                                <CloseIcon />
                                </IconButton>,
                            ]}
                        />
                    </Snackbar>
                </div>
            </div>
        );
    }
}

export default CreateGame;

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './GameAdder.css'
import { createGame } from '../../../adapter/GameAdapter.js'

class GameAdder extends Component {

    addGame(){
        createGame();
    }

    render() {
        return (
            <div className="button">
                <Button variant="contained"  color="primary" onClick={() => this.addGame()} >Nouvelle partie</Button>
            </div>
        );
    }
}

export default GameAdder;

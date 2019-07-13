import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './GameAdder.css'
import { createGame } from '../../../adapter/GameAdapter.js'

class GameAdder extends Component {

    addGame(){
        createGame();
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.addGame()} >New Game !</Button>
            </div>
        );
    }
}

export default GameAdder;

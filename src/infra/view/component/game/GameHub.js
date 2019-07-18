import React, { Component } from 'react';
import './GameHub.css'
import Character from './Character';
import Fight from './Fight';
import { Loop } from 'react-game-kit';

class GameHub extends Component {

    constructor(props){
        super(props);
        this.state = {
            game: this.props.game
        }
    }

    render() {
        return (
            <div className="gamehubContainer">
                <Loop>
                    <Character />
                    <Fight />
                </Loop>
            </div>
        );
    }
}

export default GameHub;

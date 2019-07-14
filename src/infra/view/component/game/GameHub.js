import React, { Component } from 'react';
import './GameHub.css'
import Character from './Character';
import Fight from './Fight';

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
                <Character />
                <Fight />
            </div>
        );
    }
}

export default GameHub;

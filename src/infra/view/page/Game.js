import React, { Component } from 'react';
import Header from '../common/Header.js'
import './Game.css'
import { getGame } from '../../adapter/GameAdapter.js'

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    componentDidMount(){
        getGame(this.props.location.id).then(game => { this.setState({'name': game.name})});
    }

    render() {
        return (
            <div>
                <Header />
                you are currently looking at game {this.state.name} of id {this.props.location.id}
            </div>
        );
    }
}

export default Game;

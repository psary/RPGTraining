import React, { Component } from 'react';
import Header from '../common/Header.js'
import './GamePage.css'
import { getGame } from '../../adapter/GameAdapter.js'
import GameHub from '../component/game/GameHub.js'

class GamePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            game: undefined
        }
    }

    componentDidMount(){
        getGame(this.props.location.id).then(game => { this.setState({'game': game})});
    }

    render() {
        return (
            <div>
                <Header />
                <GameHub game={this.state.game} />
            </div>
        );
    }
}

export default GamePage;

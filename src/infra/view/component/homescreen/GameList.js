import React, { Component } from 'react';
import './GameList.css'
import { getAllGames } from '../../../adapter/GameAdapter.js'

class GameList extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount(){
        this.getGames();
        console.log(this.state.games);   
    }

    getGames(){
        getAllGames().then((result => {
            this.setState({'games': result});
        }));
    }


    render() {
        return (
            <div>
                {
                    this.state.games.length > 0 ? this.state.games.map((game) => {return game.name + ' - '}) : ''
                }
            </div>
        );
    }
}

export default GameList;

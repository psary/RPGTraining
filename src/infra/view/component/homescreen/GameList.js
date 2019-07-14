import React, { Component } from 'react';
import './GameList.css'
import { getAllGames } from '../../../adapter/GameAdapter.js'
import GameCard from './GameCard';

class GameList extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: [],
        }
    }

    componentDidMount(){
        this.getGames();
    }

    getGames(){
        getAllGames().then((result => {
            this.setState({'games': result});
        }));
    }

    forceRender(){
        this.getGames();
    }

    render() {
        return (
            <div className="car_list">
                {
                    this.state.games.length > 0 ? this.state.games.map((game) => {return <GameCard key={game.id} data={game} refresh={this.forceRender.bind(this)} />}) : ''
                }
            </div>
        );
    }
}

export default GameList;

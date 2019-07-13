import React, { Component } from 'react';
import './GameList.css'
import { getAllGames } from '../../../adapter/GameAdapter.js'
import GameCard from './GameCard';

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
            <div className="car_list">
                {
                    this.state.games.length > 0 ? this.state.games.map((game) => {return <GameCard data={game}/>}) : ''
                }
            </div>
        );
    }
}

export default GameList;
